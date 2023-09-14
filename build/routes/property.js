"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const productcontrolers_1 = require("../controlers/productcontrolers");
const multer_1 = __importDefault(require("../Helpers/multer"));
const auth_1 = __importDefault(require("../middlewares/auth"));
router.route("/all").get(productcontrolers_1.getProperty);
router.route("/propertydetail/:id").get(productcontrolers_1.getPropertyDetails);
router
    .route("/create")
    .post(multer_1.default.array("img"), auth_1.default, productcontrolers_1.createProperty);
router.route("/update/:id").put(multer_1.default.array("img"), productcontrolers_1.updateProperty);
router.route("/delete/:id").delete(auth_1.default, productcontrolers_1.deleteProperty);
router.route("/videos").get(productcontrolers_1.getVideo);
router.route("/uploads").post(multer_1.default.single("video"), productcontrolers_1.uploadVideo);
router.route("/deletevideo/:id").delete(productcontrolers_1.deleteVideo);
// router.route("/create").post(multipleUpload.array("img"), createProperty);
// router.route("/create").post(multipleUpload.array("img"), createProperty);
exports.default = router;
