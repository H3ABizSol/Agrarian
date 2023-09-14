import React from "react";
import Layout from "../../../Layout/Layout";
import { Sidenavdash } from "../Sidenavdashboard/Sidenavdash";
import "./Dashboardlayout.scss";

export const Dashboardlayout = ({ children }: React.PropsWithChildren) => {
  return (
    <Layout>
      <div className="dahboard-layout-container">
        <div className="left">
          <Sidenavdash />
        </div>
        <div className="right">{children}</div>
      </div>
    </Layout>
  );
};
