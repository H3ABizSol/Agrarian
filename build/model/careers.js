"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const careerSchema = new mongoose_1.default.Schema({
    title: { type: String, trim: true },
    sector: { type: String, trim: true },
    minage: { type: String, trim: true },
    noofopenings: { type: String, trim: true },
    experience: { type: String, trim: true },
    qualification: { type: String, trim: true },
    location: { type: String, trim: true },
    salary: { type: String, trim: true },
});
const careerModel = mongoose_1.default.model("career", careerSchema);
exports.default = careerModel;
