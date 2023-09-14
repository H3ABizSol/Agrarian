import mongoose from "mongoose";
import bcrypt from "bcrypt";
import { buffer } from "stream/consumers";
interface Admin {
  password: string;
}

const adminSchema = new mongoose.Schema({
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
  const password: any = this.password;
  if (!this.isModified("password")) {
    return next();
  }
  const salt: string = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);
  this.password = hash;
  next();
});

adminSchema.methods.comparePassword = async function (
  adminPass: string
): Promise<boolean> {
  const user = this;
  return await bcrypt.compare(adminPass, this.password);
};

const adminModel = mongoose.model("admin", adminSchema);

export default adminModel;
