import Users from "../table_schemas/entre.table_schema.js";
import Idea from "../table_schemas/idea.table_schema.js";
import Investors from "../table_schemas/inves.table_schema.js";
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken';
import multer from 'multer';
import { v4 as uuidv4 } from 'uuid';
import dotenv from 'dotenv';

dotenv.config();
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, new Date().toISOString() + '-' + file.originalname);
    },
});

const fileFilter = (req, file, cb) => {
    // Accept images only
    if (file.mimetype.startsWith('image')) {
        cb(null, true);
    } else {
        cb(new Error('Not an image! Please upload only images.'), false);
    }
};

const upload = multer({ storage: storage, fileFilter: fileFilter }).single('ideaImage');
/**This part is for registering a user */
export const register = async (req, res) => {
    try {
        
        const { username, email, password } = req.body;  
        
        const hash = bcrypt.hashSync(password, 5);
        const newUser = new Users({
            username,
            email,
            password: hash,
        });
        

        await newUser.save();
        res.status(201).send("User's account has been created.");
    } catch (err) {
        console.log('err: ', err);
        res.status(500).json({ error: "An error occurred while registering." });
    }
};

/**This part is for authenticating the credentials and allowing access*/
// Adjust the import path according to your project structure


export const login = async (req, res) => {
    try {
        const user = await Users.findOne({ email: req.body.email });
        if (!user) return res.status(404).send("Oops! User not found.");

        const isCorrect = bcrypt.compareSync(req.body.password, user.password);
        if (!isCorrect) return res.status(400).send("Wrong password.");

        // Logic for JWT token generation and setting up cookies
        const expiresInMinutes = 60 /**minutes */ * 10; /**Hours */
        const expirationTime = Math.floor(Date.now() / 1000) + expiresInMinutes * 60;

        const accessToken = jwt.sign({
            userId: user._id,
            username: user.username, // Assuming username is a property you want to include
            exp: expirationTime,
        }, process.env.JWT_SECRET);

        // Generate a session UUID
        const sessionUUID = uuidv4();

        // Update the user with the session UUID
        await Users.updateOne({ _id: user._id }, { sessionUUID: sessionUUID });

        // Set accessToken in a httpOnly cookie
        res.cookie('accessToken', accessToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production', // Use secure cookies in production
            sameSite: 'strict', // Adjust according to your cross-site request needs
            maxAge: expiresInMinutes * 60 * 1000 // Expiry in milliseconds
        });

        // Set sessionUUID in a separate httpOnly cookie
        res.cookie('sessionUUID', sessionUUID, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production', // Use secure cookies in production
            sameSite: 'strict', // Adjust according to your cross-site request needs
            maxAge: expiresInMinutes * 60 * 1000 // Expiry in milliseconds
        });

        // Prepare and send the response, excluding sensitive information
        const info = {
            ...user.toObject(),
            password: undefined, // Exclude the password from the response
            sessionUUID: undefined, // Optionally exclude sessionUUID if not needed in the response
        };

        res.status(200).send(info);
    } catch (err) {
        console.log('err: ', err);
        res.status(500).json({ error: "An error occurred while logging in." });
    }
};



/**This part is for logging out*/
export const logout = async (req, res) => {
    res.cookie('accessToken', '', {
        httpOnly: true,
        expires: new Date(0),
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict'
      });
    res.status(200).send("User has been logged out.");
};


/**This part is for logging out*/
export const idea_submit = async (req, res) => {
    console.log("vin"+req.body.data);
    console.log("kum"+req.body.data);
    upload(req, res, async (error) => {
        if (error) {
            return res.status(400).json({ msg: error.message });
        } else {
            const userId = req.params.userId;
            const { ideaName, problemStatement, oneLinerSolution, detailedSolution, businessModel, competition, yourProfession, equity, amount, noOfDays, debtIfRequired } = req.body;
            const filePath = req.file ? req.file.path : null;

            try {
                const ideaExist = await Idea.findOne({ ideaName });
                if (ideaExist) {
                    return res.status(400).json({ msg: "Idea already exists" });
                }

                const ideaCreated = await Idea.create({
                    created_by: userId,
                    ideaName,
                    problemStatement,
                    oneLinerSolution,
                    detailedSolution,
                    businessModel,
                    competition,
                    yourProfession,
                    equity,
                    amount,
                    noOfDays,
                    debtIfRequired,
                    filePath // Save the file path
                });

                res.status(200).json({ msg: "Idea submitted successfully", idea: ideaCreated });
            } catch (error) {
                console.log(error);
                res.status(400).json({ msg: "Error processing your submission" });
            }
        }
    });
};

export const entre_ideas = async (req, res) => {
   try{
      const userId= req.params.userId;
      const ideas = await Idea.find({created_by:userId});
      if(!ideas){
        return res.status(400).json({msg: "No ideas are submitted"});
      }
      else{
        return res.status(200).json({msg: ideas});
      }
   }catch(error){   
    console.log(error);
    res.status(400).json({msg: "page not found"})
   }
};
export const list_of_investors = async (req,res) => {
    try{
        const investors = await Investors.find();
        if(!investors || investors.length==0){
          return res.status(400).json({msg: "No investors are present"});
        }
        else{
          return res.status(200).json({msg: investors});
        }
     }catch(error){   
      console.log(error);
      res.status(400).json({msg: "page not found"})
     }
};



