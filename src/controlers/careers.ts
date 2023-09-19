import { Request, Response, NextFunction } from "express";
import catchAsynchError from "../Helpers/catchAsyncError";
import careerModel from "../model/careers";

const createCareer = catchAsynchError(
  async (req: Request, res: Response, next: NextFunction) => {
    const career = await careerModel.create({
      ...req.body,
    });
    return res.json({ success: true, career });
  }
);

const getCareer = catchAsynchError(
  async (req: Request, res: Response, next: NextFunction) => {
    const career = await careerModel.find({});
    return res.json({ success: true, career });
  }
);

const deleteCareer = catchAsynchError(
  async (req: Request, res: Response, next: NextFunction) => {
    const career = await careerModel.findByIdAndDelete(req.params.id);
    return res.json({ success: true, career });
  }
);

export { createCareer, getCareer, deleteCareer };
