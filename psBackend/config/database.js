import { config } from "dotenv";
config();
import mongoose from "mongoose";

mongoose.connect(process.env.MONGODB_URI);

mongoose.connection.once("open", () => {
  console.log(`Connected to MongoDB. Database: ${mongoose.connection.name}`);
});
