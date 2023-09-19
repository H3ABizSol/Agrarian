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
                Agrarian Infratech leverages the power of technology and brings
                simplicity, transparency and trust in unstructured real estate
                world. Agrarian infratech provides complete end to end solutions
                to their customers through mix of technology-enabled tools as
                well as on-ground support, research base information about
                various localities and properties and provides guidance on
                matters pertaining to legal paperwork and loan assistance to
                successfully fulfill service With nothing in his hand Mr. Anil
                Roy, the Captain of Agrarian Infratech ship, begin this voyage
                and sailed it successfully amidst the gigantic crests and
                troughs of the real estate. He and his entire team are fully
                devoted to offering unique experience to our valuable customers
                that they can cherish their dream buying journey for a lifetime.
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
