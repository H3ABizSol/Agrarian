"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Header_1 = require("../components/Header/Header");
const Footer_1 = require("../components/Footer/Footer");
const layout = ({ children }) => {
    return (<>
      <Header_1.Header />
      <main>{children}</main>
      <Footer_1.Footer />
    </>);
};
exports.default = layout;
