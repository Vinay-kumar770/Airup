import "./otherFiles/config.js";
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import logRequest from "./middleware/logRequest.js";
import setupCluster from "./otherFiles/multipleRequestHandling.cjs";
import EntrepreneurRoute from "./routes/entre_account.route.js";
import InvestorRoute from "./routes/inves_account.route.js";

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
  app.use("/backend/entrepreneur",EntrepreneurRoute);
  app.use("/backend/investors",InvestorRoute);
  
  app.listen(port, () => {
    console.log(`HTTP Server running on port ${port}`);
    connect();
  });
}

setupCluster(startServer);
