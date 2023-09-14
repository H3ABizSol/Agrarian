"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dashboard = void 0;
require("./Dashboard.scss");
const Dashboardlayout_1 = require("../../Dashboardlayout/Dashboardlayout");
const Dashboard = () => {
    return (<Dashboardlayout_1.Dashboardlayout>
      <div className="dashboard-wrapper">
        <div className="dashboard">
          <div className="items">
            <h2>Total Projects</h2>
            <p>10</p>
          </div>
          <div className="items">
            <h2>Total Videos</h2>
            <p>10</p>
          </div>
        </div>
      </div>
    </Dashboardlayout_1.Dashboardlayout>);
};
exports.Dashboard = Dashboard;
