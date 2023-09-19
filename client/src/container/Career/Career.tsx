import React from "react";
import "./Career.scss";
import Layout from "../../Layout/Layout";
import axios from "axios";
import { Loader } from "../../components/Loader/Loader";

export const Career = () => {
  // const [ok, setOk] = React.useState(false);
  const [spin, setSpin] = React.useState(false);
  const [careers, setCareers] = React.useState([] as any);

  const getCareers = async () => {
    setSpin(true);
    const { data } = await axios.get("/api/career");
    if (data.success) {
      setCareers([...data.career]);
    }
    setSpin(false);
  };

  React.useEffect(() => {
    getCareers();
  }, []);
  return (
    <Layout>
      {spin ? (
        <Loader />
      ) : (
        <div className="career-wrapper">
          <div className="paralex"></div>
          <div className="careers-container">
            {careers &&
              careers.map((c: any) => {
                return (
                  <>
                    <div className="items">
                      <h2>{c.title}</h2>
                      <p>sector :-{c.sector}</p>
                      <p>Minium-age :-{c.minage}</p>
                      <p>No. Of Openings :-{c.noofopenings}</p>
                      <p>Experience Required :- {c.experience}</p>
                    </div>
                  </>
                );
              })}
          </div>
        </div>
      )}
    </Layout>
  );
};
