"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const express_1 = __importDefault(require("express"));
const error_1 = __importDefault(require("./middlewares/error"));
const db_1 = __importDefault(require("./database/db"));
const property_1 = __importDefault(require("./routes/property"));
const adminroute_1 = __importDefault(require("./routes/adminroute"));
const career_1 = __importDefault(require("./routes/career"));
const cors_1 = __importDefault(require("cors"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
const PORT = process.env.PORT || 4000;
const URL = process.env.DB_URL;
// middleware config
app.use((0, cors_1.default)());
app.use((0, cookie_parser_1.default)());
app.use(express_1.default.static(path_1.default.join(__dirname, "./public")));
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.json());
app.use("/api/auth", adminroute_1.default);
app.use("/api/property", property_1.default);
app.use("/api/career", career_1.default);
app.use(express_1.default.static(path_1.default.join(__dirname, "../client/dist/")));
app.get("*", (req, res) => {
    res.sendFile(path_1.default.join(__dirname, "../client/dist/index.html"));
});
// db connection
(0, db_1.default)(URL);
// errror middleware
app.use(error_1.default);
// listen to port
app.listen(4000, () => {
    console.log(`Server connected to port ${PORT}`);
});
