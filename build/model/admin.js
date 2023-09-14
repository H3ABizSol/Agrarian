"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const adminSchema = new mongoose_1.default.Schema({
    username: { type: String, trim: true },
    email: {
        type: String,
        required: [true, "please enter email"],
        trim: true,
    },
    password: {
        type: String,
        required: [true, "please enter email"],
        minlength: 8,
    },
    img: {
        type: String,
        default: "https://img.freepik.com/free-icon/user_318-504048.jpg",
    },
    mobile: {
        type: String,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
});
adminSchema.pre("save", async function (next) {
    const password = this.password;
    if (!this.isModified("password")) {
        return next();
    }
    const salt = await bcrypt_1.default.genSalt(10);
    const hash = await bcrypt_1.default.hash(password, salt);
    this.password = hash;
    next();
});
adminSchema.methods.comparePassword = async function (adminPass) {
    const user = this;
    return await bcrypt_1.default.compare(adminPass, this.password);
};
const adminModel = mongoose_1.default.model("admin", adminSchema);
exports.default = adminModel;
