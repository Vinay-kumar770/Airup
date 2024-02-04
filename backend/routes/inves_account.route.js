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
const authenticationRoute = express.Router();

// Routes that do not require JWT authentication
authenticationRoute.post("/register", register);
authenticationRoute.post("/login", login);
authenticationRoute.post("/logout", logout);
authenticationRoute.get("/:id/list_ideas",authenticateJWT,listIdeas);
authenticationRoute.post('/:id/addBid', authenticateJWT, addBidToIdea);
authenticationRoute.delete('/:id/deleteBid', authenticateJWT, deleteBid);
authenticationRoute.post('/:id/updateBid', authenticateJWT, updateBid);
authenticationRoute.get('/:id/yourBids', authenticateJWT, investorBids);

export default authenticationRoute;
