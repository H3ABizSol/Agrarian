import mongoose from "mongoose";

const propertySchema = new mongoose.Schema({
  title: { type: String, trim: true },
  desc: { type: String, trim: true },
  price: { type: String, trim: true },
  location: { type: String, trim: true },
  ourservices: {
    name: { type: String },
    subservice: { type: String },
  },
  properyDetails: {
    bedrooms: { type: String },
    washrooms: { type: String },
    parking: { type: String },
  },
  img: Array,
});
const videoSchema = new mongoose.Schema({
  video: { type: String },
});

const propertyModel = mongoose.model("property", propertySchema);
const videoModel = mongoose.model("videos", videoSchema);

export default propertyModel;
export { videoModel };
