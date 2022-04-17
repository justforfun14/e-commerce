import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import { userRouter } from "./routes/user";
import { authorizationRouter } from "./routes/authorization";

dotenv.config();

const app = express();
mongoose
  .connect(process.env.MONGO_URL as string)
  .then(() => console.log("Mongo connected"))
  .catch((err: Error) => console.log(err));

app.use(cors());
app.use(express.json());

app.use("/api/authorization", authorizationRouter);
app.use("/api/user", userRouter);

app.listen(process.env.PORT || 5000, () => {
  console.log("backend server is running");
});

export {};
