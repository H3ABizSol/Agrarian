"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Layout_1 = __importDefault(require("../../Layout/Layout"));
const Contact_1 = require("../../components/Contact/Contact");
const Oursevice_1 = require("../../components/Oursevice/Oursevice");
const Project_1 = require("../../components/Projects/Project/Project");
const Slider_1 = require("../../components/Slider/Slider");
const banner1_webp_1 = __importDefault(require("../../assets/banner1.webp"));
require("./Home.scss");
const react_router_dom_1 = require("react-router-dom");
const Relatedvideo_1 = require("../Relatedvideos/Relatedvideo");
const Home = () => {
    const image = [
        "https://www.bankrate.com/2020/10/02105002/What_are_real_estate_comps.jpg",
        "https://www.build-review.com/wp-content/uploads/2020/07/luxury-real-estate.jpg",
        banner1_webp_1.default,
    ];
    return (<Layout_1.default>
      <Slider_1.Slider Image={image}/>
      <Oursevice_1.Oursevice />
      <Project_1.Project />
      <section className="about-container">
        <h2>About us</h2>
        <div className="about-section">
          <div className="left">
            <figure>
              <img src="https://img.freepik.com/free-vector/contact-us-concept-landing-page_52683-12860.jpg" alt=""/>
            </figure>
          </div>
          <div className="right">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro
              quod nobis omnis harum maiores dolore ullam. Minima fuga rem quod
              tempore provident fugit aliquid, libero iste enim repudiandae sed
              laudantium!
            </p>
            <div className="btn-container">
              <react_router_dom_1.Link to="/about">
                <button>More</button>
              </react_router_dom_1.Link>
            </div>
          </div>
        </div>
      </section>
      <Relatedvideo_1.Relatedvideo />
      <Contact_1.Contact />
    </Layout_1.default>);
};
exports.default = Home;
