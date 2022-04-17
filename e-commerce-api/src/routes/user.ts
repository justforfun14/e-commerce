import express from "express";
import { verifyTokenRouter } from "./verifyToken";

const userRouter = express.Router();

userRouter.put(
  "/:id",
  verifyTokenRouter,
  (req: express.Request, res: express.Response) => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
    }
  }
);

export { userRouter };
