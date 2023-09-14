"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Footer = void 0;
require("./Footer.scss");
const bi_1 = require("react-icons/bi");
const Footer = () => {
    return (<>
      <footer>
        <div className="social-icon-wrapper">
          <ul>
            <ul>
              <li>
                <a href="tel:+">
                  <bi_1.BiLogoFacebook />
                </a>
              </li>
              <li>
                <a href="tel:+">
                  <bi_1.BiLogoInstagram />
                </a>
              </li>
              <li>
                <a href="tel:+">
                  <bi_1.BiLogoLinkedin />
                </a>
              </li>
            </ul>
          </ul>
        </div>
        <div className="footer-details">
          <ul>
            <ul>
              <li>Become our partner</li>
              <li>NRI Corner</li>
              <li>Careers</li>
              <li>Disclaimer</li>
              <li>Privacy Polcy</li>
              <li>Anul Returns</li>
              <li>Become our partner</li>
            </ul>
          </ul>
        </div>
        <div className="copyright">
          <p>© Copyright 2023, all right reserved Demo</p>
        </div>
      </footer>
    </>);
};
exports.Footer = Footer;
