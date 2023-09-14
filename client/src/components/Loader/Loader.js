"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Loader = void 0;
const LOGO_png_1 = __importDefault(require("../../assets/LOGO.png"));
require("./Loader.scss");
const Loader = () => {
    return (<div className="loader-container">
      <div className="loader-img">
        <img src={LOGO_png_1.default} alt=""/>
        <h3>Loading....</h3>
      </div>
    </div>);
};
exports.Loader = Loader;
