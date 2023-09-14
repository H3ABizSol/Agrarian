import "./Dashboard.scss";
import { Dashboardlayout } from "../../Dashboardlayout/Dashboardlayout";

export const Dashboard = () => {
  return (
    <Dashboardlayout>
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
    </Dashboardlayout>
  );
};
