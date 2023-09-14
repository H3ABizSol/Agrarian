import { Response, Request, NextFunction } from "express";
import jwt from "jsonwebtoken";
import adminModel from "../model/admin";
import { json } from "stream/consumers";

const jwt_key: any = process.env.JWT_TOKEN;

const authenticate = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token: any = req.headers.token;
  if (token) {
    jwt.verify(token, jwt_key, async (err: any, payload: any) => {
      const userExist = await adminModel.findById(payload.id);
      if (userExist?.isAdmin) {
        next();
      } else {
        return res.json({
          success: false,
          message: "you are not authenticated",
        });
      }
    });
  } else {
    return res.json({ success: false, message: "you have to login" });
  }
};

export default authenticate;
