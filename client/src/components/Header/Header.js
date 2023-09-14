"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Header = void 0;
require("./Header.scss");
const react_1 = require("react");
const ai_1 = require("react-icons/ai");
const react_router_dom_1 = require("react-router-dom");
const LOGO_png_1 = __importDefault(require("../../assets/LOGO.png"));
// import {
//   BiLogoFacebook,
//   BiLogoInstagram,
//   BiLogoLinkedin,
// } from "react-icons/bi";
// import { FiPhone } from "react-icons/fi";
const Header = () => {
    const [menu, setMenu] = (0, react_1.useState)(false);
    const [nav, setNav] = (0, react_1.useState)(false);
    const changeNav = () => {
        if (window.scrollY > 250) {
            setNav(true);
        }
        else {
            setNav(false);
        }
    };
    window.addEventListener("scroll", changeNav);
    return (<>
      <header className={nav ? "share" : ""}>
        <nav>
          {/* <div className="top-nav">
          <div className="contact-details">
            <ul>
              <li>
                <a href="tel:+">
                  <FiPhone />
                  Sales: +7778899888
                </a>
              </li>
              <li>
                <a href="tel:+">
                  <FiPhone />
                  Custome Care: +7778899888
                </a>
              </li>{" "}
              <li>
                <a href="tel:+">
                  <FiPhone />
                  Corporate +7778899888
                </a>
              </li>
            </ul>
          </div>

          <div className="social-icons">
            <ul>
              <li>
                <a href="tel:+">
                  <BiLogoFacebook />
                </a>
              </li>
              <li>
                <a href="tel:+">
                  <BiLogoInstagram />
                </a>
              </li>
              <li>
                <a href="tel:+">
                  <BiLogoLinkedin />
                </a>
              </li>
            </ul>
          </div>
        </div> */}

          <div className="bottom-nav">
            <div className="logo-wrapper">
              <figure>
                <img src={LOGO_png_1.default} alt=""/>
              </figure>
            </div>
            <div className={"navbar-wrapper"}>
              <ul>
                <react_router_dom_1.Link to="/" className="link">
                  <li>HOME</li>
                </react_router_dom_1.Link>
                <react_router_dom_1.Link to="/about" className="link">
                  <li>WHO WE ARE</li>
                </react_router_dom_1.Link>
                <li>
                  OUR SERVICE
                  <ul className="sub-menu-li">
                    <li>
                      Property Bajjar
                      <ul className="sub-sub-menu-li">
                        <react_router_dom_1.Link to="/service/residental" className="link">
                          <li>Residental</li>
                        </react_router_dom_1.Link>
                        <react_router_dom_1.Link to="/service/coomercial" className="link">
                          <li>Commercial</li>
                        </react_router_dom_1.Link>
                      </ul>
                    </li>
                    <li>
                      Agraina Landcraft
                      <ul className="sub-sub-menu-li">
                        <react_router_dom_1.Link to="/service/plot" className="link">
                          <li>Plot</li>
                        </react_router_dom_1.Link>
                        <react_router_dom_1.Link to="/service/land development" className="link">
                          <li>Land Development</li>
                        </react_router_dom_1.Link>
                      </ul>
                    </li>
                    <li>
                      Agrain Home
                      <ul className="sub-sub-menu-li">
                        <li>Dream Home Construction</li>
                      </ul>
                    </li>
                    <li>
                      Agrarain Infrastructure
                      <ul className="sub-sub-menu-li">
                        <li>Building Walion</li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <react_router_dom_1.Link to="/project" className="link">
                  <li>PROJECTS</li>
                </react_router_dom_1.Link>
                <li>LEGAL GURU</li>
                <li>CAREER</li>
                <react_router_dom_1.Link to="/contact" className="link">
                  <li>CONTACT US</li>
                </react_router_dom_1.Link>
              </ul>
            </div>

            <div className={menu
            ? "mobile-navbar-wrapper show "
            : "mobile-navbar-wrapper hide "}>
              <ul>
                <react_router_dom_1.Link to="/" className="link">
                  <li>HOME</li>
                </react_router_dom_1.Link>
                <li>WHO WE ARE</li>
                <li>
                  OUR SERVICE
                  <ul className="sub-menu-li">
                    <li>
                      Property Bajjar
                      <ul className="sub-sub-menu-li">
                        <react_router_dom_1.Link to="/service/name" className="link">
                          <li>Residental</li>
                        </react_router_dom_1.Link>
                        <react_router_dom_1.Link to="/service/name" className="link">
                          <li>Commercial</li>
                        </react_router_dom_1.Link>
                      </ul>
                    </li>
                    <li>
                      Agraina Landcraft
                      <ul className="sub-sub-menu-li">
                        <li>Plot</li>
                        <li>Land Development</li>
                      </ul>
                    </li>
                    <li>
                      Agrain Home
                      <ul className="sub-sub-menu-li">
                        <li>Dream Home Construction</li>
                      </ul>
                    </li>
                    <li>
                      Agrarain Infrastructure
                      <ul className="sub-sub-menu-li">
                        <li>Building Walion</li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <react_router_dom_1.Link to="/project" className="link">
                  <li>PROJECTS</li>
                </react_router_dom_1.Link>
                <li>COMPARE</li>
                <li>FINANCE</li>
                <li>CAREER</li>
                <li>CONTACT US</li>
              </ul>
            </div>

            <div className="menu" onClick={() => {
            setMenu(!menu);
        }}>
              {menu ? (<div>
                  <ai_1.AiOutlineClose size={40}/>
                </div>) : (<ai_1.AiOutlineMenu size={35}/>)}
            </div>
          </div>
        </nav>
      </header>
      ;
    </>);
};
exports.Header = Header;
