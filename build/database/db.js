"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Database = async (url) => {
    try {
        await mongoose_1.default.connect(url);
        console.log("db connected");
    }
    catch (error) {
        console.log(error);
    }
};
exports.default = Database;
