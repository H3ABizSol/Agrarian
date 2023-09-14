import { Request, Response, NextFunction } from "express";
import catchAsynchError from "../Helpers/catchAsyncError";
import adminModel from "../model/admin";
import bcrypt from "bcrypt";
import jwtToken from "../Helpers/generatetoken";
import Errorhandler from "../Helpers/errorhanlder";
import fs from "fs";
import path from "path";
import sendMail from "../Helpers/mail";

const register = catchAsynchError(
  async (req: Request, res: Response, next: NextFunction) => {
    const adminExist = await adminModel.findOne({ email: req.body.email });
    if (adminExist) {
      return next(new Errorhandler("admin already exist", 401));
    }
    const admin = await adminModel.create(req.body);
    res.send({ success: true, admin });
  }
);

const login = catchAsynchError(
  async (req: Request, res: Response, next: NextFunction) => {
    const userExist = await adminModel.findOne({ email: req.body.email });
    if (!userExist) {
      return res.json({ success: false, message: "user not found" });
    }

    const userPass: any = userExist.password;
    const isMatch = await bcrypt.compare(req.body.password, userPass);
    if (!isMatch) {
      return res.json({
        success: false,
        message: "invalid username or password",
      });
    }
    const token = await jwtToken(userExist._id);
    const { password, ...userDetails } = userExist;

    return res.status(200).json({ success: true, userDetails, token });
  }
);

const updateAdmin = catchAsynchError(
  async (req: Request, res: Response, next: NextFunction) => {
    const updatedAdmin = await adminModel.findByIdAndUpdate(
      req.params.id,
      {
        ...req.body,
      },
      { new: true }
    );
    res.send({ success: true, updatedAdmin });
  }
);

const isAdmin = catchAsynchError(
  async (req: Request, res: Response, next: NextFunction) => {
    return res.json({ success: true, message: "admin access" });
  }
);

const sendEmail = catchAsynchError(
  async (req: Request, res: Response, next: NextFunction) => {
    const mail = {
      ...req.body,
    };
    const info = await sendMail(mail);
    console.log(info);
  }
);

export { login, register, updateAdmin, isAdmin, sendEmail };
