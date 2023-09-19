import "./oursevice.scss";
import {
  AiOutlineStock,
  AiOutlineHome,
  AiOutlineProject,
} from "react-icons/ai";
import { MdCompareArrows } from "react-icons/md";
export const Oursevice = () => {
  return (
    <div className="oursevice-wrapper">
      <div className="service-container">
        <h2>The Best Real Estate Services</h2>
        <div className="service-icon">
          <div>
            <AiOutlineStock className="icon" />
            <h3>Property Bazzar</h3>
            {/* <p>Cum sociis natoque penatibus et magnis dis​</p> */}
          </div>
          <div>
            <MdCompareArrows className="icon" />
            <h3>Agrarian Landcraft</h3>
            {/* <p>Cum sociis natoque penatibus et magnis dis​</p> */}
          </div>{" "}
          <div>
            <AiOutlineProject className="icon" />
            <h3>Agrarian Home</h3>
            {/* <p>Cum sociis natoque penatibus et magnis dis​</p> */}
          </div>{" "}
          <div>
            <AiOutlineHome className="icon" />
            <h3>Agrain Infrastructure</h3>
            {/* <p>Cum sociis natoque penatibus et magnis dis​</p> */}
          </div>
        </div>
      </div>
    </div>
  );
};
