"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sidenavdash = void 0;
require("./sidenavdashboard.scss");
const ai_1 = require("react-icons/ai");
const md_1 = require("react-icons/md");
const react_router_dom_1 = require("react-router-dom");
const Sidenavdash = () => {
    return (<div className="side-nav">
      <ul>
        <react_router_dom_1.Link to="/admin" className="link">
          <li>
            <ai_1.AiOutlineHome />
            Dashboard
          </li>
        </react_router_dom_1.Link>
        <react_router_dom_1.Link to="/admin/projects" className="link">
          <li>
            <ai_1.AiOutlineFundProjectionScreen />
            Projects
          </li>
        </react_router_dom_1.Link>

        <react_router_dom_1.Link to="/admin/video" className="link">
          <li>
            <md_1.MdOutlineCreate />
            videos
          </li>
        </react_router_dom_1.Link>
        <react_router_dom_1.Link to="/admin/create" className="link">
          <li>
            <md_1.MdOutlineCreate />
            Create Projects
          </li>
        </react_router_dom_1.Link>
      </ul>
    </div>);
};
exports.Sidenavdash = Sidenavdash;
