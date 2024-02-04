import "./otherFiles/config.js";
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import logRequest from "./middleware/logRequest.js";
import setupCluster from "./otherFiles/multipleRequestHandling.cjs";
import user_account_Route from "./routes/entre_account.route.js";
import authChecker from "./routes/auth-check.route.js";
/*import company_account_authentication_Route from "./routes/companies_account_authentication.route.js";
import adminRoute from "./routes/admin.routes.js";*/

const port = process.env.PORT || 8800;

mongoose.set("strictQuery", true);

const connect = async () => {
  try {
    if (!process.env.MONGO) {
      console.log("No mongoDB string defined");
    } else {
      await mongoose.connect(process.env.MONGO);
      // console.log("mongo connection successful");
    }
  } catch (error) {
    console.log("error: ", error);
  }
};

function startServer() {
  const app = express();
  //middleware
  app.use(express.json());
  app.use(logRequest);

  const allowedOrigins = [
    "http://localhost:5173",
    "http://localhost:5174",
  ];

  // const allowedOrigins = '*';

  app.use(
    cors({
      origin: (origin, callback) => {
        if (allowedOrigins.includes(origin) || !origin) {
          callback(null, true);
        } else {
          callback(new Error("Not allowed by CORS"));
        }
      },
      credentials: true,
      methods:"GET,POST,PUT,DELETE",
      preflightContinue: false,
      optionsSuccessStatus: 204
    })
  );

  app.use(cookieParser());

  // All the routes in the application are defined here
  app.use("/backend/users_account", user_account_Route);
  app.use("/backend/auth-check", authChecker);
  app.use("/backend/testing", (req, res) => {
    res.send("working");
  });
  /*app.use(
    "/backend/company_account_authentication",
    company_account_authentication_Route
  );
  app.use("/backend/admin_route", adminRoute);
  */

  // const httpsServer = https.createServer(credentials, app);
  app.listen(port, () => {
    console.log(`HTTP Server running on port ${port}`);
    connect();
  });
}

setupCluster(startServer);
