import { AiOutlineWhatsApp } from "react-icons/ai";
import "./Footer.scss";
import {
  BiLogoFacebook,
  BiLogoInstagram,
  BiLogoLinkedin,
} from "react-icons/bi";

export const Footer = () => {
  return (
    <>
      <footer>
        <div className="social-icon-wrapper">
          <ul>
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
      <a href="https://api.whatsapp.com/send?phone=7497042180">
        <div className="whatsapp">
          <AiOutlineWhatsApp className="icon" />
        </div>
      </a>
    </>
  );
};
