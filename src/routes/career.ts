import express from "express";
import authenticate from "../middlewares/auth";
import { createCareer, deleteCareer, getCareer } from "../controlers/careers";

const router = express.Router();

// import multipleUpload from "../Helpers/multer";

router.route("/").get(getCareer);
router.route("/create").post(authenticate, createCareer);
router.route("/delete/:id").delete(authenticate, deleteCareer);

// router.route("/create").post(multipleUpload.array("img"), createProperty);
// router.route("/delete/:id").delete(deleteProperty);

// router.route("/create").post(multipleUpload.array("img"), createProperty);
// router.route("/create").post(multipleUpload.array("img"), createProperty);

export default router;
