import express from "express";
import {
  register,
  login,
  logout,
  listIdeas,
  addBidToIdea,
  deleteBid,
  updateBid,
  investorBids
} from "../controllers/investor_account.controller.js";
import authenticateJWT from "../middleware/jwt_authentication.js";
const InvestorRoute = express.Router();

// Routes that do not require JWT authentication
InvestorRoute.post("/register", register);
InvestorRoute.post("/login", login);
InvestorRoute.post("/logout", logout);
InvestorRoute.get("/:userId/listideas",authenticateJWT,listIdeas);
InvestorRoute.post('/:userId/addBid', authenticateJWT, addBidToIdea);
InvestorRoute.delete('/:userId/deleteBid', authenticateJWT, deleteBid);
InvestorRoute.post('/:userId/updateBid', authenticateJWT, updateBid);
InvestorRoute.get('/:userId/yourBids', authenticateJWT, investorBids);

export default InvestorRoute;
