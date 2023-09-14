import dotenv from "dotenv";
dotenv.config();
import express from "express";
import errorHanlder from "./middlewares/error";
import Database from "./database/db";
import propertyRoute from "./routes/property";
import adminRoute from "./routes/adminroute";
import cors from "cors";
import cookieParser from "cookie-parser";
import path from "path";

const app = express();
const PORT = process.env.PORT || 4000;
const URL = process.env.DB_URL;

// middleware config

app.use(cors());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "./public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/api/auth", adminRoute);
app.use("/api/property", propertyRoute);

app.use(express.static(path.join(__dirname, "../client/dist/")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/dist/index.html"));
});

// db connection
Database(URL);

// errror middleware
app.use(errorHanlder);

// listen to port
app.listen(4000, () => {
  console.log(`Server connected to port ${PORT}`);
});
