"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendEmail = exports.isAdmin = exports.updateAdmin = exports.register = exports.login = void 0;
const catchAsyncError_1 = __importDefault(require("../Helpers/catchAsyncError"));
const admin_1 = __importDefault(require("../model/admin"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const generatetoken_1 = __importDefault(require("../Helpers/generatetoken"));
const errorhanlder_1 = __importDefault(require("../Helpers/errorhanlder"));
const mail_1 = __importDefault(require("../Helpers/mail"));
const register = (0, catchAsyncError_1.default)(async (req, res, next) => {
    const adminExist = await admin_1.default.findOne({ email: req.body.email });
    if (adminExist) {
        return next(new errorhanlder_1.default("admin already exist", 401));
    }
    const admin = await admin_1.default.create(req.body);
    res.send({ success: true, admin });
});
exports.register = register;
const login = (0, catchAsyncError_1.default)(async (req, res, next) => {
    const userExist = await admin_1.default.findOne({ email: req.body.email });
    if (!userExist) {
        return res.json({ success: false, message: "user not found" });
    }
    const userPass = userExist.password;
    const isMatch = await bcrypt_1.default.compare(req.body.password, userPass);
    if (!isMatch) {
        return res.json({
            success: false,
            message: "invalid username or password",
        });
    }
    const token = await (0, generatetoken_1.default)(userExist._id);
    const { password, ...userDetails } = userExist;
    return res.status(200).json({ success: true, userDetails, token });
});
exports.login = login;
const updateAdmin = (0, catchAsyncError_1.default)(async (req, res, next) => {
    const updatedAdmin = await admin_1.default.findByIdAndUpdate(req.params.id, {
        ...req.body,
    }, { new: true });
    res.send({ success: true, updatedAdmin });
});
exports.updateAdmin = updateAdmin;
const isAdmin = (0, catchAsyncError_1.default)(async (req, res, next) => {
    return res.json({ success: true, message: "admin access" });
});
exports.isAdmin = isAdmin;
const sendEmail = (0, catchAsyncError_1.default)(async (req, res, next) => {
    const mail = {
        ...req.body,
    };
    const info = await (0, mail_1.default)(mail);
    console.log(info);
});
exports.sendEmail = sendEmail;
