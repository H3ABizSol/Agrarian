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
    if (window.scrollY > 250) {
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
                <img src={logo} alt="" />
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
                    <li>
                      Property Bajjar
                      <ul className="sub-sub-menu-li">
                        <Link to="/service/residental" className="link">
                          <li>Residental</li>
                        </Link>
                        <Link to="/service/coomercial" className="link">
                          <li>Commercial</li>
                        </Link>
                      </ul>
                    </li>
                    <li>
                      Agraina Landcraft
                      <ul className="sub-sub-menu-li">
                        <Link to="/service/plot" className="link">
                          <li>Plot</li>
                        </Link>
                        <Link to="/service/land development" className="link">
                          <li>Land Development</li>
                        </Link>
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
                <li>CAREER</li>
                <Link to="/contact" className="link">
                  <li>CONTACT US</li>
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
                <li>WHO WE ARE</li>
                <li>
                  OUR SERVICE
                  <ul className="sub-menu-li">
                    <li>
                      Property Bajjar
                      <ul className="sub-sub-menu-li">
                        <Link to="/service/name" className="link">
                          <li>Residental</li>
                        </Link>
                        <Link to="/service/name" className="link">
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
                <li>COMPARE</li>
                <li>FINANCE</li>
                <li>CAREER</li>
                <li>CONTACT US</li>
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