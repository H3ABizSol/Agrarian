import "./Header.scss";
import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import logo from "../../assets/LOGO.png";

// import {
//   BiLogoFacebook,
//   BiLogoInstagram,
//   BiLogoLinkedin,
// } from "react-icons/bi";

// import { FiPhone } from "react-icons/fi";

export const Header = () => {
  const [menu, setMenu] = useState(false);
  const [nav, setNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY > 400) {
      setNav(true);
    } else {
      setNav(false);
    }
  };
  window.addEventListener("scroll", changeNav);
  return (
    <>
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
                <Link to="/">
                  <img src={logo} alt="" />
                </Link>
              </figure>
            </div>
            <div className={"navbar-wrapper"}>
              <ul>
                <Link to="/" className="link">
                  <li>HOME</li>
                </Link>
                <Link to="/about" className="link">
                  <li>WHO WE ARE</li>
                </Link>
                <li>
                  OUR SERVICE
                  <ul className="sub-menu-li">
                    <li className="sub-li">
                      Property Bazzar
                      <ul className="sub-sub-menu-li">
                        <a href="/service/residental" className="link">
                          <li>Residental</li>
                        </a>
                        <a href="/service/commercial" className="link">
                          <li>Commercial</li>
                        </a>
                      </ul>
                    </li>
                    <li className="sub-li">
                      Agraina Landcraft
                      <ul className="sub-sub-menu-li">
                        <a href="/service/plot" className="link">
                          <li className="sub-li">Plot</li>
                        </a>
                        <a href="/service/land development" className="link">
                          <li>Land Development</li>
                        </a>
                      </ul>
                    </li>
                    <li className="sub-li">
                      Agrain Home
                      <ul className="sub-sub-menu-li">
                        <li>Dream Home Construction</li>
                      </ul>
                    </li>
                    <li className="sub-li">
                      Agrarain Infrastructure
                      <ul className="sub-sub-menu-li">
                        <li>Building Walion</li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <Link to="/project" className="link">
                  <li>PROJECTS</li>
                </Link>
                <li>LEGAL GURU</li>
                <Link to="/careers" className="link">
                  <li>CAREERS</li>
                </Link>
                <Link to="/contact" className="link">
                  <li>CONNECT US</li>
                </Link>
              </ul>
            </div>

            <div
              className={
                menu
                  ? "mobile-navbar-wrapper show "
                  : "mobile-navbar-wrapper hide "
              }
            >
              <ul>
                <Link to="/" className="link">
                  <li>HOME</li>
                </Link>
                <Link to="/about" className="link">
                  <li>WHO WE ARE</li>
                </Link>
                <li>
                  OUR SERVICE
                  <ul className="sub-menu-li">
                    <li>
                      Property Bajjar
                      <ul className="sub-sub-menu-li">
                        <Link to="/service/residental" className="link">
                          <li>Residental</li>
                        </Link>
                        <Link to="/service/commercial" className="link">
                          <li>Commercial</li>
                        </Link>
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
                <Link to="/project" className="link">
                  <li>PROJECTS</li>
                </Link>
                <li>LEGAL GURU</li>
                <Link to="/careers" className="link">
                  <li>CAREERS</li>
                </Link>
                <Link to="/contact" className="link">
                  <li>CONNECT US</li>
                </Link>
              </ul>
            </div>

            <div
              className="menu"
              onClick={() => {
                setMenu(!menu);
              }}
            >
              {menu ? (
                <div>
                  <AiOutlineClose size={40} />
                </div>
              ) : (
                <AiOutlineMenu size={35} />
              )}
            </div>
          </div>
        </nav>
      </header>
      ;
    </>
  );
};
