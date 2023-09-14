import Layout from "../../Layout/Layout";
import { Contact } from "../../components/Contact/Contact";
import { Oursevice } from "../../components/Oursevice/Oursevice";
import { Project } from "../../components/Projects/Project/Project";
import { Slider } from "../../components/Slider/Slider";
import banner1 from "../../assets/banner1.webp";

import "./Home.scss";
import { Link } from "react-router-dom";
import { Relatedvideo } from "../Relatedvideos/Relatedvideo";

const Home = () => {
  const image: string[] = [
    "https://www.bankrate.com/2020/10/02105002/What_are_real_estate_comps.jpg",
    "https://www.build-review.com/wp-content/uploads/2020/07/luxury-real-estate.jpg",
    banner1,
  ];

  return (
    <Layout>
      <Slider Image={image} />
      <Oursevice />
      <Project />
      <section className="about-container">
        <h2>About us</h2>
        <div className="about-section">
          <div className="left">
            <figure>
              <img
                src="https://img.freepik.com/free-vector/contact-us-concept-landing-page_52683-12860.jpg"
                alt=""
              />
            </figure>
          </div>
          <div className="right">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro
              quod nobis omnis harum maiores dolore ullam. Minima fuga rem quod
              tempore provident fugit aliquid, libero iste enim repudiandae sed
              laudantium!
            </p>
            <div className="btn-container">
              <Link to="/about">
                <button>More</button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Relatedvideo />
      <Contact />
    </Layout>
  );
};

export default Home;
