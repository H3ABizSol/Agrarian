"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPropertyDetails = exports.deleteVideo = exports.getVideo = exports.uploadVideo = exports.deleteProperty = exports.updateProperty = exports.getProperty = exports.createProperty = void 0;
const catchAsyncError_1 = __importDefault(require("../Helpers/catchAsyncError"));
const property_1 = __importStar(require("../model/property"));
const errorhanlder_1 = __importDefault(require("../Helpers/errorhanlder"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const createProperty = (0, catchAsyncError_1.default)(async (req, res, next) => {
    console.log(req.body);
    const { washrooms, bedrooms, parking } = req.body;
    if (parking && bedrooms && washrooms) {
        const property = await property_1.default.create({
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
    }
    else {
        console.log(req.body);
        const property = await property_1.default.create({
            ...req.body,
            ourservices: {
                name: req.body.service,
                subservice: req.body.subservice.toLowerCase(),
                type: req.body.type,
            },
        });
        return res.send({ success: true, property });
    }
});
exports.createProperty = createProperty;
const getProperty = (0, catchAsyncError_1.default)(async (req, res, next) => {
    const allProperty = await property_1.default.find({});
    res.send({ success: true, allProperty });
});
exports.getProperty = getProperty;
const getPropertyDetails = (0, catchAsyncError_1.default)(async (req, res, next) => {
    const propertydetail = await property_1.default.findById(req.params.id);
    res.send({ success: true, propertydetail });
});
exports.getPropertyDetails = getPropertyDetails;
const updateProperty = (0, catchAsyncError_1.default)(async (req, res, next) => {
    const { washrooms, bedrooms, parking } = req.body;
    if (parking !== "undefined" &&
        bedrooms !== "undefined" &&
        washrooms !== "undefined") {
        const allProperty = await property_1.default.findByIdAndUpdate(req.params.id, {
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
        }, { new: true });
        return res.send({ success: true, allProperty });
    }
    else {
        const allProperty = await property_1.default.findByIdAndUpdate(req.params.id, {
            $set: {
                ...req.body,
                ourservices: {
                    name: req.body.service,
                    subservice: req.body.subservice,
                    type: req.body.type,
                },
            },
        }, { new: true });
        return res.send({ success: true, allProperty });
    }
});
exports.updateProperty = updateProperty;
const deleteProperty = (0, catchAsyncError_1.default)(async (req, res, next) => {
    const propertyExist = await property_1.default.findById(req.params.id);
    if (!propertyExist) {
        return next(new errorhanlder_1.default("property does not exist", 401));
    }
    await propertyExist.deleteOne();
    res.send({ success: true, message: "property delte Successfuly" });
});
exports.deleteProperty = deleteProperty;
const uploadVideo = async (req, res) => {
    const video = await property_1.videoModel.create({
        video: req.file?.filename,
    });
    return res.json({ success: true, video });
};
exports.uploadVideo = uploadVideo;
const getVideo = async (req, res) => {
    const videos = await property_1.videoModel.find({});
    if (videos.length > 0) {
        return res.json({ success: true, videos });
    }
    return res.json({ success: false, message: "no videos " });
};
exports.getVideo = getVideo;
const deleteVideo = (0, catchAsyncError_1.default)(async (req, res, next) => {
    const videoExist = await property_1.videoModel.findById(req.params.id);
    if (!videoExist) {
        return next(new errorhanlder_1.default("property does not exist", 401));
    }
    fs_1.default.unlink(path_1.default.join(__dirname, `../public/uploads/${videoExist.video}`), (err) => {
        if (err) {
            return next(new errorhanlder_1.default(err, 401));
        }
    });
    await videoExist.deleteOne();
    res.send({ success: true, message: "video delte Successfuly" });
});
exports.deleteVideo = deleteVideo;
