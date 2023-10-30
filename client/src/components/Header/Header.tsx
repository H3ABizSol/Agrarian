import "./Header.scss";
import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import logo from "../../assets/agrarianlogo.jpeg";

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
                      Agrarian Landcraft
                      <ul className="sub-sub-menu-li">
                        <a
                          href="/service/plotting & Land Development"
                          className="link"
                        >
                          <li className="sub-li">
                            Plotting & Land Development
                          </li>
                        </a>
                        {/* <a href="/service/land development" className="link">
                          <li>Land Development</li>
                        </a> */}
                      </ul>
                    </li>
                    <li className="sub-li">
                      Agrarian Homes
                      <ul className="sub-sub-menu-li">
                        <a
                          href="/service/dream home construction"
                          className="link"
                        >
                          <li>Dream Homes construction</li>
                        </a>
                      </ul>
                    </li>
                    <li className="sub-li">
                      Agrarian Infrastructure
                      <ul className="sub-sub-menu-li">
                        <a href="/service/building nation" className="link">
                          <li>Building nation</li>
                        </a>
                      </ul>
                    </li>
                  </ul>
                </li>
                <Link to="/project" className="link">
                  <li>PROJECTS</li>
                </Link>
                <li>
                  360 Assistant
                  <ul className="sub-menu-li">
                    <li className="sub-li">
                      Help to search
                      <ul className="sub-sub-menu-li">
                        <a href="#" className="link">
                          <li>location</li>
                        </a>
                        <a href="#" className="link">
                          <li>projects</li>
                        </a>
                        <a href="#" className="link">
                          <li>masterplan</li>
                        </a>
                      </ul>
                    </li>
                    <li className="sub-li">
                      site visit
                      <ul className="sub-sub-menu-li">
                        <a href="#" className="link">
                          <li className="sub-li">free pick up & drop</li>
                        </a>
                        {/* <a href="/service/land development" className="link">
                          <li>Land Development</li>
                        </a> */}
                      </ul>
                    </li>
                    <li className="sub-li">
                      legal guru
                      <ul className="sub-sub-menu-li">
                        <a
                          href="/service/dream home construction"
                          className="link"
                        >
                          <li>plot</li>
                        </a>
                        <a
                          href="/service/dream home construction"
                          className="link"
                        >
                          <li>Residential Propoerty</li>
                        </a>
                        <a
                          href="/service/dream home construction"
                          className="link"
                        >
                          <li>Commercial Property</li>
                        </a>
                      </ul>
                    </li>
                    <li className="sub-li">
                      loan assistance
                      <ul className="sub-sub-menu-li">
                        <a href="/emicalculator" className="link">
                          <li>EMI Calculator</li>
                        </a>
                        <a href="#" className="link">
                          <li>Loan Eligibility</li>
                        </a>
                        <a href="#" className="link">
                          <li>Loan Documents</li>
                        </a>
                      </ul>
                    </li>
                    <li className="sub-li">
                      property services
                      <ul className="sub-sub-menu-li">
                        <a href="#" className="link">
                          <li>Rent Agreement</li>
                        </a>
                        <a href="#" className="link">
                          <li>Office Leasing Assistance</li>
                        </a>
                        <a href="/service/building nation" className="link">
                          <li>Home Interiors</li>
                        </a>
                        <a href="/service/building nation" className="link">
                          <li>Vastu</li>
                        </a>
                      </ul>
                    </li>
                    <li className="sub-li">
                      booking to possession
                      <ul className="sub-sub-menu-li">
                        <a href="/service/building nation" className="link">
                          <li>Complete Assistance</li>
                        </a>
                      </ul>
                    </li>
                  </ul>
                </li>
                <Link to="/careers" className="link">
                  <li>partner with us</li>
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
                      Agrarian Landcraft
                      <ul className="sub-sub-menu-li">
                        <a href="/service/plot" className="link">
                          <li className="sub-li">
                            Plotting & Land Development
                          </li>
                        </a>
                        {/* <a href="/service/land development" className="link">
                          <li>Land Development</li>
                        </a> */}
                      </ul>
                    </li>
                    <li className="sub-li">
                      Agrarian Home
                      <ul className="sub-sub-menu-li">
                        <a
                          href="/service/dream home construction"
                          className="link"
                        >
                          <li>Dream Home construction</li>
                        </a>
                      </ul>
                    </li>
                    <li className="sub-li">
                      Agrarian Infrastructure
                      <ul className="sub-sub-menu-li">
                        <a href="/service/building nation" className="link">
                          <li>Building nation</li>
                        </a>
                      </ul>
                    </li>
                  </ul>
                </li>
                <Link to="/project" className="link">
                  <li>PROJECTS</li>
                </Link>
                <li>
                  360 Assistant
                  <ul className="sub-menu-li">
                    <li className="sub-li">
                      Help to search
                      <ul className="sub-sub-menu-li">
                        <a href="#" className="link">
                          <li>location</li>
                        </a>
                        <a href="#" className="link">
                          <li>projects</li>
                        </a>
                        <a href="#" className="link">
                          <li>masterplan</li>
                        </a>
                      </ul>
                    </li>
                    <li className="sub-li">
                      site visit
                      <ul className="sub-sub-menu-li">
                        <a href="#" className="link">
                          <li className="sub-li">free pick up & drop</li>
                        </a>
                        {/* <a href="/service/land development" className="link">
                          <li>Land Development</li>
                        </a> */}
                      </ul>
                    </li>
                    <li className="sub-li">
                      legal guru
                      <ul className="sub-sub-menu-li">
                        <a
                          href="/service/dream home construction"
                          className="link"
                        >
                          <li>plot</li>
                        </a>
                        <a
                          href="/service/dream home construction"
                          className="link"
                        >
                          <li>Residential Propoerty</li>
                        </a>
                        <a
                          href="/service/dream home construction"
                          className="link"
                        >
                          <li>Commercial Property</li>
                        </a>
                      </ul>
                    </li>
                    <li className="sub-li">
                      loan assistance
                      <ul className="sub-sub-menu-li">
                        <a href="/emicalculator" className="link">
                          <li>EMI Calculator</li>
                        </a>
                        <a href="#" className="link">
                          <li>Loan Eligibility</li>
                        </a>
                        <a href="#" className="link">
                          <li>Loan Documents</li>
                        </a>
                      </ul>
                    </li>
                    <li className="sub-li">
                      property services
                      <ul className="sub-sub-menu-li">
                        <a href="#" className="link">
                          <li>Rent Agreement</li>
                        </a>
                        <a href="#" className="link">
                          <li>Office Leasing Assistance</li>
                        </a>
                        <a href="/service/building nation" className="link">
                          <li>Home Interiors</li>
                        </a>
                        <a href="/service/building nation" className="link">
                          <li>Vastu</li>
                        </a>
                      </ul>
                    </li>
                    <li className="sub-li">
                      booking to possession
                      <ul className="sub-sub-menu-li">
                        <a href="/service/building nation" className="link">
                          <li>Complete Assistance</li>
                        </a>
                      </ul>
                    </li>
                  </ul>
                </li>
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
