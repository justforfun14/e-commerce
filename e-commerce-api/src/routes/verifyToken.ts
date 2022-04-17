import express from "express";
import * as jwt from "jsonwebtoken";

const verifyTokenRouter = express.Router();

verifyTokenRouter.get(
  "/usertest",
  (req: express.Request, res: express.Response, next: express.NextFunction) => {
    const authHeader = req.headers.token?.toString();
    if (authHeader) {
      jwt.verify(authHeader, process.env.JWT_SECURE as string, (err, user) => {
        if (err) {
          res.status(403).json("Token is not valid");
          // req.user = user;
          next();
        }
      });
    } else {
      return res.status(401).json("Tou are not logged in!");
    }
  }
);

export { verifyTokenRouter };
