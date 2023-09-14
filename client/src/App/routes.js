"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_router_dom_1 = require("react-router-dom");
const Home_1 = __importDefault(require("../container/Home/Home"));
const Privateroute_1 = require("../container/Admin/Private/Privateroute");
const Servicedetial_1 = require("../container/Servicedetails/Servicedetial");
const Ourproject_1 = require("../container/Ourprojects/Ourproject");
const Contact_1 = require("../container/Contact/Contact");
const About_1 = require("../container/About/About");
const Login_1 = require("../components/Login/Login");
const Dashboard_1 = require("../container/Admin/Pages/Dashboard/Dashboard");
const createproject_1 = require("../container/Admin/Pages/Project/createproject");
const Video_1 = require("../container/Admin/Pages/Video/Video");
const Project_1 = require("../container/Admin/Pages/Projects/Project");
const Projectdetail_1 = require("../container/Projectdetails/Projectdetail");
Contact_1.ContactPage;
const routes = () => {
    return (<react_router_dom_1.Routes>
      <react_router_dom_1.Route path="/" element={<Home_1.default />}/>
      <react_router_dom_1.Route path="/signin" element={<Login_1.Login />}/>
      <react_router_dom_1.Route path="/project" element={<Ourproject_1.Ourproject />}/>
      <react_router_dom_1.Route path="/projectdetails/:id" element={<Projectdetail_1.Projectdetail />}/>
      <react_router_dom_1.Route path="/service/:name" element={<Servicedetial_1.Servicedetial />}/>
      <react_router_dom_1.Route path="/contact" element={<Contact_1.ContactPage />}/>
      <react_router_dom_1.Route path="/about" element={<About_1.About />}/>
      <react_router_dom_1.Route path="/admin" element={<Privateroute_1.Privateroute />}>
        <react_router_dom_1.Route path="" element={<Dashboard_1.Dashboard />}/>
        <react_router_dom_1.Route path="create" element={<createproject_1.Createproject />}/>
        <react_router_dom_1.Route path="video" element={<Video_1.Video />}/>
        <react_router_dom_1.Route path="projects" element={<Project_1.Project />}/>
      </react_router_dom_1.Route>
      {/* <Route path="/login" element={<h2>Login Page</h2>} /> */}
    </react_router_dom_1.Routes>);
};
exports.default = routes;
