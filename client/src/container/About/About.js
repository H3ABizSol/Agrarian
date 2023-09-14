"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.About = void 0;
const react_1 = __importDefault(require("react"));
require("./About.scss");
const Layout_1 = __importDefault(require("../../Layout/Layout"));
const realestate_mp4_1 = __importDefault(require("../../assets/realestate.mp4"));
const About = () => {
    react_1.default.useEffect(() => {
        window.scrollTo(0, 0);
    });
    return (<Layout_1.default>
      <div className="about-section">
        <div className="about-paralex"></div>
        <div className="video-wrapper">
          <realestate_mp4_1.default autoPlay muted loop>
            <source src={realestate_mp4_1.default}/>
          </realestate_mp4_1.default>
        </div>
        <div className="about-wrapper">
          <div className="left">
            <h4>About us</h4>
            <div className="content">
              <p>
                A Delhi University alumnus, Mr. Ankush Jain left his high paying
                job to bring a revolutionary change in the mammoth world of
                Indian real estate through his sheer vision and hard-earned
                experience. It is his hardship and dedication towards his work
                that Bullmen Realty is on the right path to achieving new
                heights. The founder of Bullmen Realty India, Mr. Ankush Jain is
                the first generation entrepreneur of the family and dons many
                hats as Chief Executive
              </p>
            </div>
          </div>
          <div className="right">
            <figure>
              <img src="https://lh3.googleusercontent.com/7K5BkEX8HqQShfGMFH3NuzAgOgIxdzBASWwsBW1FenQPy1cW5alzsLtQirKzLC4ces7_1GXnMNeOso6RYz1-A8hWPXZismqXm0pMl7UWH1ObjQlsZQ=w1440-v1-e30" alt=""/>
            </figure>
          </div>
        </div>
      </div>
    </Layout_1.default>);
};
exports.About = About;
