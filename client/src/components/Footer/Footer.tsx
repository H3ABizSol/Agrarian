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
                <a
                  href="https://www.facebook.com/people/Agrarian-Infratech/61552549041958/"
                  target="_blank"
                >
                  <BiLogoFacebook />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/agrarianinfratech/?igshid=YTQwZjQ0NmI0OA%3D%3D"
                  target="_blank"
                >
                  <BiLogoInstagram />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/agrarian-infratech-7a97a329b/"
                  target="_blank"
                >
                  <BiLogoLinkedin />
                </a>
              </li>
            </ul>
          </ul>
        </div>
        <div className="footer-details">
          <ul>
            <ul>
              <li>Disclaimer</li>
              <li>Privacy Policy</li>
              <li>Become Our Partner</li>
            </ul>
          </ul>
        </div>
        <div className="copyright">
          <p>
            © Copyright 2023, all right reserved, H3A Business Solutions Pvt Ltd
          </p>
        </div>
      </footer>
      <a href="https://api.whatsapp.com/send?phone=+919999589348">
        <div className="whatsapp">
          <AiOutlineWhatsApp className="icon" />
        </div>
      </a>
    </>
  );
};
