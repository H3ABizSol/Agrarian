import "./Slider.scss";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { AiOutlineSearch } from "react-icons/ai";
import { useEffect, useState } from "react";

export const Slider = ({ Image }: any) => {
  const [scrollVal, setScrollVal] = useState(false);
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const scrollBar = () => {
    if (window.scrollY > 400) {
      setScrollVal(true);
    } else {
      setScrollVal(false);
    }
  };

  useEffect(() => {
    window.document.addEventListener("scroll", scrollBar);
    // return window.document.removeEventListener("scroll", scrollBar);
  }, []);
  return (
    <>
      <div className="slider-wrapper">
        <Carousel
          responsive={responsive}
          swipeable={true}
          draggable={true}
          autoPlay={true}
          autoPlaySpeed={6000}
          infinite={true}
          className="cara-style"
        >
          {Image.map((img: string) => {
            return (
              <figure>
                <img src={img} alt="" />
              </figure>
            );
          })}
        </Carousel>
        <div className="search-wrapper-container">
          <div
            className={
              scrollVal ? "search-wrapper fix-scroll" : "search-wrapper"
            }
          >
            <input type="search" name="" id="" placeholder="Search" />
            <div className="icon">
              <AiOutlineSearch size={30} color="#ff55a4d3" />
            </div>
          </div>
        </div>
        <h2>New Thinking new real estate</h2>
      </div>
    </>
  );
};
