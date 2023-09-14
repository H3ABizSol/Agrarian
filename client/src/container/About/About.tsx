import React from "react";
import "./About.scss";
import Layout from "../../Layout/Layout";
import video from "../../assets/realestate.mp4";

export const About = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <Layout>
      <div className="about-section">
        <div className="about-paralex"></div>
        <div className="video-wrapper">
          <video autoPlay muted loop>
            <source src={video} />
          </video>
        </div>
        <div className="about-wrapper">
          <div className="left">
            <h4>About us</h4>
            <div className="content">
              <p>
                A Delhi University alumnus, Mr. Ankush Jain left his high paying
                job to bring a revolutionary change in the mammoth world of
                Indian real estate through his sheer vision and hard-earned
                experience. It is his hardship and dedication towards his work
                that Bullmen Realty is on the right path to achieving new
                heights. The founder of Bullmen Realty India, Mr. Ankush Jain is
                the first generation entrepreneur of the family and dons many
                hats as Chief Executive
              </p>
            </div>
          </div>
          <div className="right">
            <figure>
              <img
                src="https://lh3.googleusercontent.com/7K5BkEX8HqQShfGMFH3NuzAgOgIxdzBASWwsBW1FenQPy1cW5alzsLtQirKzLC4ces7_1GXnMNeOso6RYz1-A8hWPXZismqXm0pMl7UWH1ObjQlsZQ=w1440-v1-e30"
                alt=""
              />
            </figure>
          </div>
        </div>
      </div>
    </Layout>
  );
};
