import { Request, Response, NextFunction } from "express";
import multer from "multer";
import path from "path";

const storage = multer.diskStorage({
  destination: function (req: Request, file, cb: CallableFunction) {
    cb(null, path.join(__dirname, "../public/uploads"));
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
});

const FileUpload = multer({
  storage,
});

export default FileUpload;
