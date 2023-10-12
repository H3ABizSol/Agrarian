"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.videoModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const propertySchema = new mongoose_1.default.Schema({
    title: { type: String, trim: true },
    desc: { type: String, trim: true },
    price: { type: String, trim: true },
    location: { type: String, trim: true },
    ourservices: {
        name: { type: String },
        subservice: { type: String },
        type: { type: String },
    },
    properyDetails: {
        bedrooms: { type: String },
        washrooms: { type: String },
        parking: { type: String },
    },
    img: Array,
});
const videoSchema = new mongoose_1.default.Schema({
    video: { type: String },
});
const propertyModel = mongoose_1.default.model("property", propertySchema);
const videoModel = mongoose_1.default.model("videos", videoSchema);
exports.videoModel = videoModel;
exports.default = propertyModel;
