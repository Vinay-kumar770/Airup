import express from "express";
import { demo } from "../controllers/auth-check.controller.js";
import authenticateJWT from "../middleware/jwt_authentication.js";
const authCheckRoute = express.Router();

// Routes that do not require JWT authentication
authCheckRoute.post("/checking", authenticateJWT, demo);


export default authCheckRoute;
