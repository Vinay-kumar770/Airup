import express from "express";
import {
  register,
  login,
  logout,
  idea_submit,
  entre_ideas,
  list_of_investors
} from "../controllers/entre_account.controller.js";
import authenticateJWT from "../middleware/jwt_authentication.js";

const EntrepreneurRoute = express.Router();

// Routes that do not require JWT authentication
EntrepreneurRoute.post("/register", register);
EntrepreneurRoute.post("/login", login);
EntrepreneurRoute.post("/logout", logout);
EntrepreneurRoute.post("/:userId/ideaSubmission", authenticateJWT, idea_submit);
EntrepreneurRoute.get("/:userId/entre_ideas", authenticateJWT, entre_ideas);
EntrepreneurRoute.get("/:userId/allInvestors",list_of_investors)

export default EntrepreneurRoute;
