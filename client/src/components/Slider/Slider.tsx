import "./Slider.scss";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { AiOutlineSearch } from "react-icons/ai";
import { useEffect, useState } from "react";
import axios from "axios";

export const Slider = ({ Image }: any) => {
  const [scrollVal, setScrollVal] = useState(false);
  const [dispay, setDisplay] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [searchData, setSearchData] = useState([] as any);

  const [allProperty, setAllProperty] = useState([] as any);
  // const [spin, setSpin] = useState(false);

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

  const search = () => {
    if (searchValue) {
      setDisplay(true);
      const filterData = allProperty.filter((d: any) => {
        return d.title.toLowerCase().includes(searchValue.toLowerCase());
      });
      setSearchData([...filterData]);
    } else {
      setDisplay(false);
    }
  };

  const scrollBar = () => {
    if (window.scrollY > 400) {
      setScrollVal(true);
    } else {
      setScrollVal(false);
    }
  };

  const getProjects = async () => {
    // setSpin(true);
    const { data } = await axios.get("/api/property/all");
    console.log(data);
    if (data.success) {
      setAllProperty([...data.allProperty]);
      // setSpin(false);
    }
  };

  useEffect(() => {
    window.document.addEventListener("scroll", scrollBar);
    getProjects();
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
            <input
              type="search"
              name=""
              id=""
              placeholder="Search"
              onChange={(e) => {
                setSearchValue(e.target.value);
              }}
              onKeyUp={() => {
                search();
              }}
            />
            <div className="icon">
              <AiOutlineSearch size={30} color="#ff55a4d3" />
            </div>
            {dispay && (
              <div className="display-search">
                <ul>
                  {searchData &&
                    searchData.map((p: any) => {
                      return <li>{p.title}</li>;
                    })}
                </ul>
              </div>
            )}
          </div>
        </div>
        <h2>New Thinking new real estate</h2>
      </div>
    </>
  );
};
