import mongoose from "mongoose";
import { config } from "dotenv";

config({ path: "./.env" });

export const dbConnection = () => {
  console.log("MONGO_URI:", process.env.MONGO_URI); // Debug: Log the URI
  if (!process.env.MONGO_URI) {
    console.error("Error: MONGO_URI is not defined in .env file");
    process.exit(1);
  }
  mongoose
    .connect(process.env.MONGO_URI, {
      dbName: "MERN_JOB_SEEKING_WEBAPP",
    })
    .then(() => {
      console.log("Connected to MongoDB database!");
    })
    .catch((err) => {
      console.error(`Error connecting to MongoDB: ${err.message}`);
      console.error("Full error:", err); // Log full error details
      process.exit(1);
    });
};