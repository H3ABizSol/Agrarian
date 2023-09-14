"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const jwt_key = process.env.JWT_TOKEN;
const jwtToken = async (id) => {
    const token = jsonwebtoken_1.default.sign({ id }, jwt_key);
    return token;
};
exports.default = jwtToken;
