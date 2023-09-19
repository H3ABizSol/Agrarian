"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_1 = __importDefault(require("../middlewares/auth"));
const careers_1 = require("../controlers/careers");
const router = express_1.default.Router();
// import multipleUpload from "../Helpers/multer";
router.route("/").get(careers_1.getCareer);
router.route("/create").post(auth_1.default, careers_1.createCareer);
router.route("/delete/:id").delete(auth_1.default, careers_1.deleteCareer);
// router.route("/create").post(multipleUpload.array("img"), createProperty);
// router.route("/delete/:id").delete(deleteProperty);
// router.route("/create").post(multipleUpload.array("img"), createProperty);
// router.route("/create").post(multipleUpload.array("img"), createProperty);
exports.default = router;
