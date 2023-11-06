// import Errorhandler from "../Helpers/errorhanlder";
import { Request, Response, NextFunction } from "express";
import catchAsynchError from "../Helpers/catchAsyncError";
import propertyModel, { videoModel } from "../model/property";
import Errorhandler from "../Helpers/errorhanlder";
import fs from "fs";
import path from "path";

const createProperty = catchAsynchError(
  async (req: Request, res: Response, next: NextFunction) => {
    console.log(req.body);
    const { washrooms, bedrooms, parking } = req.body;
    if (parking && bedrooms && washrooms) {
      const property = await propertyModel.create({
        ...req.body,
        ourservices: {
          name: req.body.service,
          subservice: req.body.subservice,
          type: req.body.type,
        },
        properyDetails: {
          bedrooms: req.body.bedrooms,
          washrooms: req.body.washrooms,
          parking: req.body.parking,
        },
      });
      return res.send({ success: true, property });
    } else {
      console.log(req.body);
      const property = await propertyModel.create({
        ...req.body,
        ourservices: {
          name: req.body.service,
          subservice: req.body.subservice.toLowerCase(),
          type: req.body.type,
        },
      });
      return res.send({ success: true, property });
    }
  }
);

const getProperty = catchAsynchError(
  async (req: Request, res: Response, next: NextFunction) => {
    const allProperty = await propertyModel.find({});
    res.send({ success: true, allProperty });
  }
);

const getPropertyDetails = catchAsynchError(
  async (req: Request, res: Response, next: NextFunction) => {
    const propertydetail = await propertyModel.findById(req.params.id);
    res.send({ success: true, propertydetail });
  }
);

const updateProperty = catchAsynchError(
  async (req: Request, res: Response, next: NextFunction) => {
    const { washrooms, bedrooms, parking } = req.body;
    if (
      parking !== "undefined" &&
      bedrooms !== "undefined" &&
      washrooms !== "undefined"
    ) {
      const allProperty = await propertyModel.findByIdAndUpdate(
        req.params.id,
        {
          $set: {
            ...req.body,
            properyDetails: {
              bedrooms: bedrooms,
              washrooms: washrooms,
              parking: parking,
            },
            ourservices: {
              name: req.body.service,
              subservice: req.body.subservice,
              type: req.body.type,
            },
          },
        },
        { new: true }
      );
      return res.send({ success: true, allProperty });
    } else {
      const allProperty = await propertyModel.findByIdAndUpdate(
        req.params.id,
        {
          $set: {
            ...req.body,
            ourservices: {
              name: req.body.service,
              subservice: req.body.subservice,
              type: req.body.type,
            },
          },
        },
        { new: true }
      );
      return res.send({ success: true, allProperty });
    }
  }
);

const deleteProperty = catchAsynchError(
  async (req: Request, res: Response, next: NextFunction) => {
    const propertyExist = await propertyModel.findById(req.params.id);
    if (!propertyExist) {
      return next(new Errorhandler("property does not exist", 401));
    }
    await propertyExist.deleteOne();
    res.send({ success: true, message: "property delte Successfuly" });
  }
);

const uploadVideo = async (req: Request, res: Response) => {
  const video = await videoModel.create({
    video: req.file?.filename,
  });
  return res.json({ success: true, video });
};

const getVideo = async (req: Request, res: Response) => {
  const videos = await videoModel.find({});
  if (videos.length > 0) {
    return res.json({ success: true, videos });
  }
  return res.json({ success: false, message: "no videos " });
};

const deleteVideo = catchAsynchError(
  async (req: Request, res: Response, next: NextFunction) => {
    const videoExist = await videoModel.findById(req.params.id);

    if (!videoExist) {
      return next(new Errorhandler("property does not exist", 401));
    }
    fs.unlink(
      path.join(__dirname, `../public/uploads/${videoExist.video}`),
      (err) => {
        if (err) {
          return next(new Errorhandler(err, 401));
        }
      }
    );

    await videoExist.deleteOne();
    res.send({ success: true, message: "video delte Successfuly" });
  }
);

export {
  createProperty,
  getProperty,
  updateProperty,
  deleteProperty,
  uploadVideo,
  getVideo,
  deleteVideo,
  getPropertyDetails,
};
