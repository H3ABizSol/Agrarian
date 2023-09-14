import React, { useEffect, useState } from "react";
import Layout from "../../Layout/Layout";
import { AiOutlineSearch } from "react-icons/ai";
import { SlLocationPin } from "react-icons/sl";
import { LuBedDouble } from "react-icons/lu";
import "./Ourproject.scss";
import axios from "axios";
import logo from "../../assets/LOGO.png";

export const Ourproject = () => {
  const [allProperty, setAllProperty] = React.useState([] as any);
  const [filterProperty, setFilterProperty] = React.useState([] as any);
  const [isFilter, setIsFilter] = useState(false);
  const [isProperty, setIsProperty] = useState(false);

  // const [spin, setSpin] = React.useState(false);

  const getProjects = async () => {
    // setSpin(true);
    const { data } = await axios.get("http://localhost:4000/api/property/all");
    if (data.success) {
      setAllProperty([...data.allProperty]);
      // setSpin(false);
      setIsFilter(false);
      setIsProperty(true);
    }
  };

  const filterProject = (e: any) => {
    if (e.target.innerHTML.toLowerCase() === "all") {
      setIsProperty(true);
      setIsFilter(false);
    } else {
      setIsProperty(false);
      setIsFilter(true);
      const filterData = allProperty.filter((i: any) => {
        return (
          i.ourservices.subservice.toLowerCase() ===
          e.target.innerHTML.toLowerCase()
        );
      });
      setFilterProperty([...filterData]);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    getProjects();
  }, []);
  return (
    <Layout>
      <div className="project-detail-wrapper">
        <div className="search-wrapper-container">
          <div className={"search-wrapper"}>
            <input type="search" name="" id="" placeholder="Search" />
            <div className="icon">
              <AiOutlineSearch size={30} color="#ff55a4d3" />
            </div>
          </div>
        </div>
        <div className="paralex">
          <h2>Projects</h2>
          <p>Find your dream house</p>
        </div>

        {isProperty && (
          <div className="project-detail">
            <div className="left">
              {allProperty &&
                allProperty.map((p: any) => {
                  return (
                    <div className="project-items">
                      <figure>
                        <img
                          src={`http://localhost:4000/uploads/${p.img[0]}`}
                          alt=""
                        />
                      </figure>
                      <div className="content">
                        <h3>{p.title}</h3>
                        <p>{p.desc}</p>
                        <div className="location">
                          <SlLocationPin className="icon" />
                          <span>{p.loaction}</span>
                        </div>
                        <p className="price"> ₹ {p.price}</p>
                        <div className="residental-wrapper">
                          <div className="details">
                            <LuBedDouble size={20} />
                            <p>Bedrooms {p.properyDetails?.bedrooms}</p>
                          </div>
                          <div className="details">
                            <LuBedDouble size={20} />
                            <p>washrooms {p.properyDetails?.washrooms}</p>
                          </div>{" "}
                          <div className="details">
                            <LuBedDouble size={20} />
                            {p.properyDetails?.parking === "yes" ? (
                              <p>Parking</p>
                            ) : (
                              <p>No Parking</p>
                            )}
                          </div>
                        </div>
                        <div>
                          <button>More</button>
                        </div>
                      </div>
                    </div>
                  );
                })}

              {allProperty.length == 0 && (
                <div className="no-projects">
                  <figure>
                    <img src={logo} alt="" />
                  </figure>
                  <h2>No Projects</h2>
                </div>
              )}
            </div>

            <div className="right">
              <h3>Filter</h3>
              <h4>Services</h4>
              <div
                className="residental-category"
                onClick={(e) => {
                  filterProject(e);
                }}
              >
                <p className="item">Residental</p>
                <p className="item">Coomercial</p>
                <p className="item">Land</p>
                <p className="item">Dream Home</p>
                <p className="item">Coomercial</p>
                <p className="item">Plot</p>
                <p className="item">All</p>
              </div>
              <h4>By Location</h4>
              <div className="residental-category">
                <p className="item">Nodia</p>
                <p className="item">Gurugram</p>
                <p className="item">Nodia</p>
              </div>
              <h4>By Price</h4>
              <div className="price">
                <select name="" id="">
                  <option value="">Rs. 10 Lac - 20 Lac</option>
                  <option value="">Rs. 10 Lac - 20 Lac</option>
                  <option value="">Rs. 10 Lac - 20 Lac</option>
                  <option value="">Rs. 10 Lac - 20 Lac</option>
                </select>
              </div>
            </div>
          </div>
        )}

        {isFilter && (
          <div className="project-detail">
            <div className="left">
              {filterProperty &&
                filterProperty.map((p: any) => {
                  return (
                    <div className="project-items">
                      <figure>
                        <img
                          src={`http://localhost:4000/uploads/${p.img[0]}`}
                          alt=""
                        />
                      </figure>
                      <div className="content">
                        <h3>{p.title}</h3>
                        <p>{p.desc}</p>
                        <div className="location">
                          <SlLocationPin className="icon" />
                          <span>{p.loaction}</span>
                        </div>
                        <p className="price"> ₹ {p.price}</p>
                        <div className="residental-wrapper">
                          <div className="details">
                            <LuBedDouble size={20} />
                            <p>Bedrooms {p.properyDetails?.bedrooms}</p>
                          </div>
                          <div className="details">
                            <LuBedDouble size={20} />
                            <p>washrooms {p.properyDetails?.washrooms}</p>
                          </div>{" "}
                          <div className="details">
                            <LuBedDouble size={20} />
                            {p.properyDetails?.parking === "yes" ? (
                              <p>Parking</p>
                            ) : (
                              <p>No Parking</p>
                            )}
                          </div>
                        </div>
                        <div>
                          <button>More</button>
                        </div>
                      </div>
                    </div>
                  );
                })}

              {filterProperty.length == 0 && (
                <div className="no-projects">
                  <figure>
                    <img src={logo} alt="" />
                  </figure>
                  <h2>No Projects</h2>
                </div>
              )}
            </div>

            <div className="right">
              <h3>Filter</h3>
              <h4>Services</h4>
              <div
                className="residental-category"
                onClick={(e) => {
                  filterProject(e);
                }}
              >
                <p className="item">Residental</p>
                <p className="item">Coomercial</p>
                <p className="item">Land</p>
                <p className="item">Dream Home</p>
                <p className="item">Coomercial</p>
                <p className="item">Plot</p>
                <p className="item">All</p>
              </div>
              <h4>By Location</h4>
              <div className="residental-category">
                <p className="item">Nodia</p>
                <p className="item">Gurugram</p>
                <p className="item">Nodia</p>
              </div>
              <h4>By Price</h4>
              <div className="price">
                <select name="" id="">
                  <option value="">Rs. 10 Lac - 20 Lac</option>
                  <option value="">Rs. 10 Lac - 20 Lac</option>
                  <option value="">Rs. 10 Lac - 20 Lac</option>
                  <option value="">Rs. 10 Lac - 20 Lac</option>
                </select>
              </div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};
