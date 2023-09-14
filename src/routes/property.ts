import express from "express";
const router = express.Router();
import {
  createProperty,
  deleteProperty,
  deleteVideo,
  getProperty,
  getVideo,
  updateProperty,
  uploadVideo,
  getPropertyDetails,
} from "../controlers/productcontrolers";
import FileUpload from "../Helpers/multer";
import authenticate from "../middlewares/auth";

router.route("/all").get(getProperty);
router.route("/propertydetail/:id").get(getPropertyDetails);

router
  .route("/create")
  .post(FileUpload.array("img"), authenticate, createProperty);
router.route("/update/:id").put(FileUpload.array("img"), updateProperty);
router.route("/delete/:id").delete(authenticate, deleteProperty);
router.route("/videos").get(getVideo);
router.route("/uploads").post(FileUpload.single("video"), uploadVideo);
router.route("/deletevideo/:id").delete(deleteVideo);

// router.route("/create").post(multipleUpload.array("img"), createProperty);
// router.route("/create").post(multipleUpload.array("img"), createProperty);

export default router;
