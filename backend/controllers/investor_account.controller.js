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
      password
    } = req.body;
    const hash = bcrypt.hashSync(req.body.password, 5);
    /** the logic is that, we won't be saving the password on our database, but we will save the hash of the password with us*/
    const newInvestor = new Investors({
      username,
      email,
      password: hash,
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
    const invest = await Investors.findOne({ email: req.body.email });
    if (!invest) return res.status(404).send("Oops! Investor not found.");

    const isCorrect = bcrypt.compareSync(req.body.password, invest.password);
    if (!isCorrect) return res.status(400).send("Wrong password.");

    const expiresInMinutes = 60 /**minutes */ * 10; /**Hours */
    const expirationTime = Math.floor(Date.now() / 1000) + expiresInMinutes * 60;

    // Create JWT token
    const accessToken = jwt.sign(
      {
        userId: invest._id, // corrected from company._id to invest._id
        username: invest.email, // assuming you want to use email as username, adjust accordingly
        exp: expirationTime,
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
      ...invest.toObject(),
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
      const { ideaId, investorId, investorName, amount } = req.body;
      
      // Find the idea by ID
      const idea = await Idea.findById(ideaId);

      if (!idea) {
          return res.status(404).json({ error: "Idea not found." });
      }
      const newBid = {
          id: investorId, // Assuming the investor's ID uniquely identifies the bid; you might want to generate a unique ID for the bid itself
          name: investorName,
          amount: amount,
          status: false, // Assuming a new bid is initially not confirmed; adjust as necessary
      };
      idea.totalBids.push(newBid);
      await idea.save();
      res.status(201).json({ message: "Bid added successfully", bid: newBid });
  } catch (err) {
      console.log("err: ", err);
      res.status(500).json({ error: "An error occurred while adding Bid." });
    }
  };


 
  export const deleteBid = async (req, res) => {
    try {
        const { ideaId, investorId } = req.body; // The request includes the idea's ID and the investor's ID

        // Find the idea document
        const idea = await Idea.findById(ideaId);

        if (!idea) {
            return res.status(404).json({ error: "Idea not found." });
        }

        // Check if the investor's bid exists in the totalBids array
        const bidIndex = idea.totalBids.findIndex(bid => bid.id === investorId);

        if (bidIndex === -1) {
            return res.status(404).json({ error: "Bid not found." });
        }

        // Remove the investor's bid from the totalBids array
        idea.totalBids.splice(bidIndex, 1);

        // Save the updated idea
        await idea.save();

        res.status(200).json({ message: "Bid deleted successfully" });
    } catch (err) {
        console.log("err: ", err);
        res.status(500).json({ error: "An error occurred while deleting the bid." });
    }
};


export const updateBid = async (req, res) => {
  try {
      const { ideaId, investorId, newAmount } = req.body; // Assuming the request includes the idea ID, investor ID, and the new bid amount

      // Find the idea document
      const idea = await Idea.findById(ideaId);

      if (!idea) {
          return res.status(404).json({ error: "Idea not found." });
      }

      // Find the investor's bid in the totalBids array
      const bid = idea.totalBids.find(bid => bid.id === investorId);

      if (!bid) {
          return res.status(404).json({ error: "Bid not found." });
      }

      // Update the bid's amount
      bid.amount = newAmount;

      // Optionally, update other bid properties here if needed

      // Save the updated idea document
      await idea.save();

      res.status(200).json({ message: "Bid updated successfully", updatedBid: bid });
  } catch (err) {
      console.log("err: ", err);
      res.status(500).json({ error: "An error occurred while updating the bid." });
  }
};


export const investorBids = async (req, res) => {
  try {
      const { investorId } = req.params; // Assuming the investor's ID is passed as a URL parameter

      // Find all ideas that include a bid from the specified investor
      const ideasWithBids = await Idea.find({
          'totalBids.id': investorId
      });

      if (!ideasWithBids.length) {
          return res.status(404).json({ message: "No bids found for this investor." });
      }

      // Optionally, transform the data to only include relevant information about each idea and the investor's bid
      const investorBids = ideasWithBids.map(idea => ({
          ideaId: idea._id,
          ideaname: idea.ideaname,
          bid: idea.totalBids.find(bid => bid.id === investorId),
          // Include any other idea or bid details you wish to return
      }));

      res.status(200).json(investorBids);
  } catch (err) {
      console.log("err: ", err);
      res.status(500).json({ error: "An error occurred while getting investor bids." });
  }
};



