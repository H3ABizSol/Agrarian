"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("./App.scss");
const react_router_dom_1 = require("react-router-dom");
const routes_1 = __importDefault(require("../App/routes"));
function App() {
    return (<react_router_dom_1.BrowserRouter>
      <routes_1.default />
    </react_router_dom_1.BrowserRouter>);
}
exports.default = App;
