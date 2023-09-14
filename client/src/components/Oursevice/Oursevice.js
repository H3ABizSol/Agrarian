"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Oursevice = void 0;
require("./oursevice.scss");
const ai_1 = require("react-icons/ai");
const md_1 = require("react-icons/md");
const Oursevice = () => {
    return (<div className="oursevice-wrapper">
      <div className="service-container">
        <h2>The Best Real Estate Services</h2>
        <div className="service-icon">
          <div>
            <ai_1.AiOutlineStock className="icon"/>
            <h3>Buy Plot</h3>
            <p>Cum sociis natoque penatibus et magnis dis​</p>
          </div>
          <div>
            <md_1.MdCompareArrows className="icon"/>
            <h3>Compare</h3>
            <p>Cum sociis natoque penatibus et magnis dis​</p>
          </div>{" "}
          <div>
            <ai_1.AiOutlineProject className="icon"/>
            <h3>Projects</h3>
            <p>Cum sociis natoque penatibus et magnis dis​</p>
          </div>{" "}
          <div>
            <ai_1.AiOutlineHome className="icon"/>
            <h3>Sell your Plot</h3>
            <p>Cum sociis natoque penatibus et magnis dis​</p>
          </div>
        </div>
      </div>
    </div>);
};
exports.Oursevice = Oursevice;
