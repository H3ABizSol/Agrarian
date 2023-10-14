import mongoose from "mongoose";

const careerSchema = new mongoose.Schema({
  title: { type: String, trim: true },
  sector: { type: String, trim: true },
  minage: { type: String, trim: true },
  noofopenings: { type: String, trim: true },
  experience: { type: String, trim: true },
  qualification: { type: String, trim: true },
  location: { type: String, trim: true },
  salary: { type: String, trim: true },
});

const careerModel = mongoose.model("career", careerSchema);

export default careerModel;
