import express from "express";
import cryptoJS from "crypto-js";
import * as jwt from "jsonwebtoken";
import { UserSchema } from "../models/User";

const authorizationRouter = express.Router();

// REGISTER
authorizationRouter.post(
  "/register",
  async (req: express.Request, res: express.Response) => {
    const newUser = new UserSchema({
      username: req.body.username,
      email: req.body.email,
      password: cryptoJS.AES.encrypt(
        req.body.password,
        process.env.PASS_SECURE as string
      ),
    });

    try {
      const savedUser = await newUser.save();
      res.status(201).json(savedUser);
    } catch (err) {
      res.status(500).json(err);
    }
  }
);

// LOGIN
authorizationRouter.post(
  "/login",
  async (req: express.Request, res: express.Response) => {
    try {
      const currentUser = await UserSchema.findOne({
        username: req.body.username,
      });
      if (!currentUser) {
        return res.status(401).json("Wrong username or password");
      }

      const decryptedDBPassword = cryptoJS.AES.decrypt(
        currentUser.password.toString(),
        process.env.PASS_SECURE as string
      );
      const dbPassword = decryptedDBPassword.toString();

      const encryptedReqPassword = cryptoJS.AES.encrypt(
        req.body.password,
        process.env.PASS_SECURE as string
      );
      const decryptedReqPassword = cryptoJS.AES.decrypt(
        encryptedReqPassword,
        process.env.PASS_SECURE as string
      );
      const newPassword = decryptedReqPassword.toString();
      if (dbPassword !== newPassword) {
        return res.status(401).json("Wrong username or password");
      }

      const accesToken = jwt.sign(
        {
          id: currentUser._id,
          isAdmin: currentUser.isAdmin,
        },
        process.env.JWT_SECURE as string,
        {
          expiresIn: "3d",
        }
      );

      const { password, ...otherInfo } = currentUser._doc;

      res.status(200).json({ otherInfo, accesToken });
    } catch (err) {
      res.status(500).json(err);
    }
  }
);

export { authorizationRouter };
