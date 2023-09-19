"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCareer = exports.getCareer = exports.createCareer = void 0;
const catchAsyncError_1 = __importDefault(require("../Helpers/catchAsyncError"));
const careers_1 = __importDefault(require("../model/careers"));
const createCareer = (0, catchAsyncError_1.default)(async (req, res, next) => {
    const career = await careers_1.default.create({
        ...req.body,
    });
    return res.json({ success: true, career });
});
exports.createCareer = createCareer;
const getCareer = (0, catchAsyncError_1.default)(async (req, res, next) => {
    const career = await careers_1.default.find({});
    return res.json({ success: true, career });
});
exports.getCareer = getCareer;
const deleteCareer = (0, catchAsyncError_1.default)(async (req, res, next) => {
    const career = await careers_1.default.findByIdAndDelete(req.params.id);
    return res.json({ success: true, career });
});
exports.deleteCareer = deleteCareer;
