import Layout from "../../Layout/Layout";
import { Contact } from "../../components/Contact/Contact";
import { Oursevice } from "../../components/Oursevice/Oursevice";
import { Project } from "../../components/Projects/Project/Project";
import { Slider } from "../../components/Slider/Slider";
import banner1 from "../../assets/banner1.jpg";

import "./Home.scss";
import { Link } from "react-router-dom";
import { Relatedvideo } from "../Relatedvideos/Relatedvideo";
import { AiOutlineWhatsApp } from "react-icons/ai";

const Home = () => {
  const image: string[] = [
    "https://www.bankrate.com/2020/10/02105002/What_are_real_estate_comps.jpg",
    "https://www.build-review.com/wp-content/uploads/2020/07/luxury-real-estate.jpg",
    "https://images.unsplash.com/photo-1582407947304-fd86f028f716?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVhbCUyMGVzdGF0ZXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80",
    banner1,
    "https://static.seekingalpha.com/cdn/s3/uploads/getty_images/1348328425/image_1348328425.jpg?io=getty-c-w750",
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
              Agrarian Infratech leverages the power of technology and brings
              simplicity, transparency and trust in unstructured real estate
              world. Agrarian infratech provides complete end to end solutions
              to their customers through mix of technology-enabled tools as well
              as on-ground support, research base information about various
              localities and properties and provides guidance on matters
              pertaining to legal paperwork and loan assistance to successfully
              fulfill service..
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
      <a href="https://api.whatsapp.com/send?phone=7497042180">
        <div className="whatsapp">
          <AiOutlineWhatsApp className="icon" />
        </div>
      </a>
    </Layout>
  );
};

export default Home;
