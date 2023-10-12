import "./oursevice.scss";
import {
  AiOutlineStock,
  AiOutlineHome,
  AiOutlineProject,
} from "react-icons/ai";
import { MdCompareArrows } from "react-icons/md";
import { Link } from "react-router-dom";

export const Oursevice = () => {
  return (
    <div className="oursevice-wrapper">
      <div className="service-container">
        <h2>The Best Real Estate Services</h2>
        <div className="service-icon">
          <Link to="/service/property bazzar" className="link">
            <div>
              <AiOutlineStock className="icon" />
              <h3>Property Bazzar</h3>
              {/* <p>Cum sociis natoque penatibus et magnis dis​</p> */}
            </div>
          </Link>
          <Link to="/service/agrarian landcraft" className="link">
            <div>
              <MdCompareArrows className="icon" />
              <h3>Agrarian Landcraft</h3>
              {/* <p>Cum sociis natoque penatibus et magnis dis​</p> */}
            </div>
          </Link>
          <Link to="/service/agrarian home" className="link">
            <div>
              <AiOutlineProject className="icon" />
              <h3>Agrarian Home</h3>
              {/* <p>Cum sociis natoque penatibus et magnis dis​</p> */}
            </div>{" "}
          </Link>
          <Link to="/service/agrarian infrastructure" className="link">
            <div>
              <AiOutlineHome className="icon" />
              <h3>Agrarian Infrastructure</h3>
              {/* <p>Cum sociis natoque penatibus et magnis dis​</p> */}
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};
