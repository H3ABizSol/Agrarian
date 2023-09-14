"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactPage = void 0;
const react_1 = __importStar(require("react"));
const Layout_1 = __importDefault(require("../../Layout/Layout"));
const ai_1 = require("react-icons/ai");
require("./Contact.scss");
const axios_1 = __importDefault(require("axios"));
const ContactPage = () => {
    const [name, setName] = (0, react_1.useState)("");
    const [email, setEmail] = (0, react_1.useState)("");
    const [message, setMessage] = (0, react_1.useState)("");
    const handleSubmit = async (e) => {
        e.preventDefault();
        const { data } = await axios_1.default.post("http://localhost:4000/api/auth/sendemail", {
            name,
            email,
            message,
        });
        console.log(data);
    };
    return (<Layout_1.default>
      <div className="contact-paralex">
        <h2>Contact us</h2>
      </div>
      <div className="contact-wrappers">
        <div className="contact-form">
          <div className="left">
            <p className="miss-call">Give a Miss Call</p>
            <a href="" className="link">
              +9111111111
            </a>
            <p className="follow">Foolow on us</p>
            <div className="social-icons">
              <ai_1.AiOutlineInstagram className="icon insta"/>
              <ai_1.AiOutlineTwitter className="icon twiter"/>
              <ai_1.AiOutlineMail className="icon mail"/>
              {/* <AiOutlineInstagram className="icon" /> */}
            </div>
          </div>
          <form method="post" onSubmit={handleSubmit}>
            <h3>We’d love to hear from you</h3>

            <div>
              <input type="text" name="name" value={name} onChange={(e) => {
            setName(e.target.value);
        }} placeholder="enter your name" required/>
            </div>
            <div>
              <input type="email" name="email" value={email} onChange={(e) => {
            setEmail(e.target.value);
        }} placeholder="enter your email" required/>
            </div>
            <div>
              <textarea rows={6} placeholder="message" required value={message} onChange={(e) => {
            setMessage(e.target.value);
        }}/>
            </div>
            <div>
              <button>Submit</button>
            </div>
          </form>
        </div>
      </div>
      <div className="map-container">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224357.50123665962!2d77.23701437997667!3d28.522102351088325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5a43173357b%3A0x37ffce30c87cc03f!2sNoida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1694080128722!5m2!1sen!2sin" width="100%" height="350" 
    //   allowfullscreen=""
    loading="lazy"></iframe>
      </div>
    </Layout_1.default>);
};
exports.ContactPage = ContactPage;
