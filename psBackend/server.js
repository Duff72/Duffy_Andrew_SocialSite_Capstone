import { config } from "dotenv";
config();
import cors from "cors";
import postRouter from "./routes/postRouter.js";
import "./config/database.js";

import express from "express";
const app = express();
const PORT = 3000;

app.get("/", (req, res) => res.send("API is runnsdfing!"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use("/posts", postRouter);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
