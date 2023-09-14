"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const admin_1 = __importDefault(require("../model/admin"));
const jwt_key = process.env.JWT_TOKEN;
const authenticate = async (req, res, next) => {
    const token = req.headers.token;
    if (token) {
        jsonwebtoken_1.default.verify(token, jwt_key, async (err, payload) => {
            const userExist = await admin_1.default.findById(payload.id);
            if (userExist?.isAdmin) {
                next();
            }
            else {
                return res.json({
                    success: false,
                    message: "you are not authenticated",
                });
            }
        });
    }
    else {
        return res.json({ success: false, message: "you have to login" });
    }
};
exports.default = authenticate;
