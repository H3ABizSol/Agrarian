import { Request, Response, NextFunction } from "express";

const catchAsynchError =
  (func: any) => (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(func(req, res, next)).catch(next);
  };
export default catchAsynchError;
