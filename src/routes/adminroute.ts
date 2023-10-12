import express from "express";
import authenticate from "../middlewares/auth";

const router = express.Router();
import {
  register,
  login,
  //   getProperty,
  updateAdmin,
  isAdmin,
  sendEmail,
  applyJob,
} from "../controlers/admincontrolers";
import FileUpload from "../Helpers/multer";

// import multipleUpload from "../Helpers/multer";

router.route("/authenticate").get(authenticate, isAdmin);
router.route("/register").post(register);
router.route("/login").post(login);
router.route("/update/:id").put(authenticate, updateAdmin);
router.route("/sendemail").post(sendEmail);
router.route("/applyjob").post(FileUpload.single("resume"), applyJob);

// router.route("/create").post(multipleUpload.array("img"), createProperty);
// router.route("/delete/:id").delete(deleteProperty);

// router.route("/create").post(multipleUpload.array("img"), createProperty);
// router.route("/create").post(multipleUpload.array("img"), createProperty);

export default router;
