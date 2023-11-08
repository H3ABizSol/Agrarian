import React, { useEffect, useState } from "react";
import Layout from "../../Layout/Layout";
import { AiOutlineSearch } from "react-icons/ai";
import { SlLocationPin } from "react-icons/sl";
import { LuBedDouble } from "react-icons/lu";
import "./Ourproject.scss";
import axios from "axios";
import logo from "../../assets/agrarianlogo.jpeg";
import { Link } from "react-router-dom";

export const Ourproject = () => {
  const [allProperty, setAllProperty] = React.useState([] as any);
  const [filterProperty, setFilterProperty] = React.useState([] as any);
  const [isFilter, setIsFilter] = useState(false);
  const [isProperty, setIsProperty] = useState(false);
  const [location, setLocation] = useState([] as any);
  const [check, setCheck] = React.useState("");
  const [isCheck, setIsCheck] = React.useState(true);
  const [dispay, setDisplay] = React.useState(false);
  const [searchValue, setSearchValue] = React.useState("");
  const [searchData, setSearchData] = React.useState([] as any);

  // const [spin, setSpin] = React.useState(false);

  const getProjects = async () => {
    // setSpin(true);
    const { data } = await axios.get("/api/property/all");
    if (data.success) {
      const filterLocation = data.allProperty.map((i: any) => {
        return i.location;
      });
      setLocation([...new Set(filterLocation)]);
      setAllProperty([...data.allProperty]);
      // setSpin(false);
      setIsFilter(false);
      setIsProperty(true);
    }
  };

  const filterProject2 = (e: any) => {
    if (e.target.innerHTML.toLowerCase() === "all") {
      setIsProperty(true);
      setIsFilter(false);
    } else {
      setIsProperty(false);
      setIsFilter(true);
      const filterData = allProperty.filter((i: any) => {
        if (
          i.ourservices.type.toLowerCase() === e.target.innerHTML.toLowerCase()
        ) {
          return i;
        }
      });
      setFilterProperty([...filterData]);
    }
  };

  const filterProject = (e: any) => {
    setCheck(e.target.innerHTML.toLowerCase());
    setIsCheck(false);
    if (e.target.innerHTML.toLowerCase() === "all") {
      setIsProperty(true);
      setIsFilter(false);
    } else {
      setIsProperty(false);
      setIsFilter(true);
      const filterData = allProperty.filter((i: any) => {
        if (
          i.ourservices.subservice.toLowerCase() ===
          e.target.innerHTML.toLowerCase()
        ) {
          return i;
        }
      });
      setFilterProperty([...filterData]);
    }
  };

  const filterLocation = (e: any) => {
    if (e.target.innerHTML.toLowerCase() === "all") {
      setIsProperty(true);
      setIsFilter(false);
    } else {
      setIsProperty(false);
      setIsFilter(true);
      const filterData = allProperty.filter((i: any) => {
        return i.location.toLowerCase() === e.target.innerHTML.toLowerCase();
      });
      setFilterProperty([...filterData]);
    }
  };
  const filterPrice = (e: any) => {
    const priceRange = e.target.value.split("-");
    setIsProperty(false);
    setIsFilter(true);
    const filterData = allProperty.filter((i: any) => {
      if (
        parseInt(i.price) >= parseInt(priceRange[0]) &&
        parseInt(i.price) <= parseInt(priceRange[1])
      ) {
        return i;
      }
    });
    setFilterProperty([...filterData]);
  };

  const search = () => {
    if (searchValue) {
      setDisplay(true);
      const filterData = allProperty.filter((d: any) => {
        return d.title.toLowerCase().includes(searchValue.toLowerCase());
      });
      console.log(filterData);
      setSearchData([...filterData]);
    } else {
      setDisplay(false);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    getProjects();
  }, []);
  console.log(check);
  return (
    <Layout>
      <div className="project-detail-wrapper">
        <div className="search-wrapper-container">
          <div className={"search-wrapper"}>
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
                      return (
                        <Link to={`/projectdetails/${p._id}`} className="link">
                          <li> {p.title}</li>
                        </Link>
                      );
                    })}
                </ul>
              </div>
            )}
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
                        <img src={` ${p.img[0]}`} alt="" />
                      </figure>
                      <div className="content">
                        <h3>{p.title}</h3>
                        <p className="description">{p.desc}</p>
                        <div className="location">
                          <SlLocationPin className="icon" />
                          <span>{p.location}</span>
                        </div>
                        <p>
                          {p.price.length === 6
                            ? `₹ ${p.price.slice(0, 1)} Lacs`
                            : ""}
                        </p>
                        <p>
                          {p.price.length === 7
                            ? `₹ ${p.price.slice(0, 2)} Lacs`
                            : ""}
                        </p>
                        <p>
                          {p.price.length === 8
                            ? `₹ ${p.price.slice(0, 1)} Cr`
                            : ""}
                        </p>
                        <p>
                          {p.price.length === 9
                            ? `₹ ${p.price.slice(0, 2)} Cr`
                            : ""}
                        </p>
                        {p.properyDetails?.bedrooms && (
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
                        )}

                        <div>
                          <Link to={`/projectdetails/${p._id}`}>
                            <button>More</button>
                          </Link>
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
              {isCheck && (
                <div
                  className="residental-category"
                  onClick={(e) => {
                    filterProject(e);
                  }}
                >
                  <p className="item">Residential</p>
                  <p className="item">Commercial</p>
                  <p className="item">Building Nation</p>
                  <p className="item">Plot</p>
                  <p className="item">Dream Homes Construction</p>
                  <p className="item">All</p>
                </div>
              )}

              <h4>By Location</h4>
              <div
                className="residental-category"
                onClick={(e) => {
                  filterLocation(e);
                }}
              >
                {location &&
                  location.map((l: any) => {
                    return <p className="item">{l}</p>;
                  })}
              </div>
              <h4>By Price</h4>
              <div className="price">
                <select
                  name=""
                  id=""
                  onChange={(e) => {
                    filterPrice(e);
                  }}
                >
                  <option value="">select price</option>
                  <option value="1000000-3000000">Rs. 10 Lac - 30 Lac</option>
                  <option value="3000000-6000000">Rs. 30 Lac - 60 Lac</option>
                  <option value="6000000-10000000">Rs. 60 Lac - 1 Cr</option>
                  <option value="10000000-100000000">Rs. 1 Cr - 10 Cr</option>
                  <option value="100000000 - 1000000000">Above Rs 10 Cr</option>
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
                        <img src={`${p.img[0]}`} alt="" />
                      </figure>
                      <div className="content">
                        <h3>{p.title}</h3>
                        <p className="description">{p.desc}</p>
                        <div className="location">
                          <SlLocationPin className="icon" />
                          <span>{p.location}</span>
                        </div>
                        <p>
                          {p.price.length === 6
                            ? `₹ ${p.price.slice(0, 1)} Lacs`
                            : ""}
                        </p>
                        <p>
                          {p.price.length === 7
                            ? `₹ ${p.price.slice(0, 2)} Lacs`
                            : ""}
                        </p>
                        <p>
                          {p.price.length === 8
                            ? `₹ ${p.price.slice(0, 1)} Cr`
                            : ""}
                        </p>
                        <p>
                          {p.price.length === 9
                            ? `₹ ${p.price.slice(0, 2)} Cr`
                            : ""}
                        </p>
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
                          <Link to={`/projectdetails/${p._id}`}>
                            <button>More</button>
                          </Link>
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
              {isCheck && (
                <div
                  className="residental-category"
                  onClick={(e) => {
                    filterProject2(e);
                  }}
                >
                  <p className="item">Residential</p>
                  <p className="item">Commercial</p>
                  <p className="item">Land</p>
                  <p className="item">Dream Homes Construction</p>
                  <p className="item">Plot</p>
                  <p className="item">All</p>
                </div>
              )}

              {check.toLowerCase() === "residential" && (
                <div
                  className="residental-category"
                  onClick={(e) => {
                    filterProject2(e);
                  }}
                >
                  <p>Flats</p>
                  <p>villas</p>
                  <p>Appartments</p>
                  <p>Floors</p>
                </div>
              )}
              {check.toLowerCase() === "commercial" && (
                <div
                  className="residental-category"
                  onClick={(e) => {
                    filterProject2(e);
                  }}
                >
                  <p>shop</p>
                  <p>offices</p>
                  <p>food court</p>
                </div>
              )}
              {check.toLowerCase() === "dream home construction" && (
                <div
                  className="residental-category"
                  onClick={(e) => {
                    filterProject2(e);
                  }}
                >
                  <p>Flats</p>
                  <p>Floors</p>
                  <p>Appartments</p>
                  <p>Villa</p>
                </div>
              )}
              {check.toLowerCase() === "building nation" && (
                <div
                  className="residental-category"
                  onClick={(e) => {
                    filterProject2(e);
                  }}
                >
                  <p>roads</p>
                  <p>bridges</p>
                  <p>hospitals</p>
                  <p>hotels</p>
                </div>
              )}
              <h4>By Location</h4>
              <div
                className="residental-category"
                onClick={(e) => {
                  filterLocation(e);
                }}
              >
                {location &&
                  location.map((l: any) => {
                    return <p className="item">{l}</p>;
                  })}
                {/* <p className="item">Gurugram</p>
                <p className="item">Nodia</p> */}
              </div>
              <h4>By Price</h4>
              <div className="price">
                <select
                  name=""
                  id=""
                  onChange={(e) => {
                    filterPrice(e);
                  }}
                >
                  <option value="">select price</option>
                  <option value="1000000 - 3000000">Rs. 10 Lac - 30 Lac</option>
                  <option value="3000000 - 6000000">Rs. 30 Lac - 60 Lac</option>
                  <option value="6000000 - 10000000">Rs. 60 Lac - 1 Cr</option>
                  <option value="100000000 - 100000000">
                    Rs. 1 Cr - 10 Cr
                  </option>
                  <option value="100000000 - 1000000000">Above Rs 10 Cr</option>
                </select>
              </div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};
