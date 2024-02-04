import Investors from "../table_schemas/inves.table_schema.js";
import Idea from "../table_schemas/idea.table_schema.js";
import Users from "../table_schemas/entre.table_schema.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { v4 as uuidv4 } from 'uuid';

export const register = async (req, res) => {
  try {
    const {
      username,
      email,
      password ,
      phone_number
    } = req.body;
    const hash = bcrypt.hashSync(req.body.password, 5);
    /** the logic is that, we won't be saving the password on our database, but we will save the hash of the password with us*/
    const newInvestor = new Investors({
      username,
      email,
      password: hash,
      phone_number
    });

    await newInvestor.save();
    res.status(201).send("Investor account has been created.");
  } catch (err) {
    console.log("err: ", err);
    res.status(500).json({ error: "An error occurred while registering." });
  }
};

/**This part is for authenticating the credentials and allowing access*/
export const login = async (req, res) => {
  try {
    const invest = await Investors.findOne({ username: req.body.username });
    if (!invest) return res.status(404).send("Oops! Investor not found.");

    const isCorrect = bcrypt.compareSync(req.body.password, invest.password);
    if (!isCorrect) return res.status(400).send("Wrong password.");

    const expiresInMinutes = 60 /**minutes */ * 10; /**Hours */
    const expirationTime = Math.floor(Date.now() / 1000) + expiresInMinutes * 60;

    // Create JWT token
    const accessToken = jwt.sign(
      {
        userId: company._id,
        username: company.username,
        exp: expirationTime, // Set the expiration time
      },
      process.env.JWT_SECRET
    );

    const sessionUUID = uuidv4();

    await Investors.updateOne({ _id: invest._id},{ sessionUUID: sessionUUID})

    res.cookie('accessToken', accessToken, {
      httpOnly: true,
      secure: true, // Ensure using HTTPS
      sameSite: 'None', // Necessary for cross-site access
      maxAge: expiresInMinutes * 60 * 1000 // Convert from minutes to milliseconds
    });

    res.cookie('sessionUUID', sessionUUID, {
      httpOnly: true,
      secure: true,
      sameSite: 'None',
      maxAge: expiresInMinutes * 60 * 1000
    });
    
    const info = {
      ...company.toObject(),
      password: undefined,
      activeSessionUUID: undefined,
    };
    res.status(200).send(info);
  } catch (err) {
    console.log("err: ", err);
    res.status(500).json({ error: "An error occurred while logging in." });
  }
};


export const logout = async (req, res) => {
    res.cookie("accessToken", "", {
      httpOnly: true,
      expires: new Date(0),
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
    });
    res.cookie("sessionUUID", "", {
      httpOnly: true,
      expires: new Date(0),
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
    });
    res.status(200).send("User has been logged out.");
  };

export const listIdeas = async (req, res) => {
    try {
          const ideas = await Idea.find();
          if(!ideas || ideas.length==0){
            return res.status(400).json({msg: "No ideas are present"});
          }
          else return res.status(200).json({msg: ideas});
    } catch (err) {
      console.log("err: ", err);
      res.status(500).json({ error: "An error occurred while listing Ideas." });
    }
  };

  export const addBidToIdea = async (req, res) => {
    try {
        

    } catch (err) {
      console.log("err: ", err);
      res.status(500).json({ error: "An error occurred while adding Bid." });
    }
  };


  export const deleteBid = async (req, res) => {
    try {

    } catch (err) {
      console.log("err: ", err);
      res.status(500).json({ error: "An error occurred while deleting bid." });
    }
  };


  export const updateBid = async (req, res) => {
    try {

    } catch (err) {
      console.log("err: ", err);
      res.status(500).json({ error: "An error occurred while updating bid." });
    }
  };


  export const investorBids = async (req, res) => {
    try {
      
    } catch (err) {
      console.log("err: ", err);
      res.status(500).json({ error: "An error occurred while getting investor bids." });
    }
  };



