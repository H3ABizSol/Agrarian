import mongoose from "mongoose";

const Database = async (url: any) => {
  try {
    await mongoose.connect(url);
    console.log("db connected");
  } catch (error) {
    console.log(error);
  }
};

export default Database;
