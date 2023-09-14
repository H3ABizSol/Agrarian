"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dashboardlayout = void 0;
const react_1 = __importDefault(require("react"));
const Layout_1 = __importDefault(require("../../../Layout/Layout"));
const Sidenavdash_1 = require("../Sidenavdashboard/Sidenavdash");
require("./Dashboardlayout.scss");
const Dashboardlayout = ({ children }) => {
    return (<Layout_1.default>
      <div className="dahboard-layout-container">
        <div className="left">
          <Sidenavdash_1.Sidenavdash />
        </div>
        <div className="right">{children}</div>
      </div>
    </Layout_1.default>);
};
exports.Dashboardlayout = Dashboardlayout;
