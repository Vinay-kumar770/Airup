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

const authenticationRoute = express.Router();

// Routes that do not require JWT authentication
authenticationRoute.post("/register", register);
authenticationRoute.post("/login", login);
authenticationRoute.post("/logout", logout);
authenticationRoute.post("/:userId/idea_submission", authenticateJWT, idea_submit);
authenticationRoute.post("/:userId/entre_ideas", authenticateJWT, entre_ideas);
authenticationRoute.post("/:userId/list_of_investors",list_of_investors)

export default authenticationRoute;
