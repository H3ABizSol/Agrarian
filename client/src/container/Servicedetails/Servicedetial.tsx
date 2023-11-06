import React from "react";
import "./Servicedetail.scss";
import Layout from "../../Layout/Layout";
import { AiOutlineSearch } from "react-icons/ai";
import { SlLocationPin } from "react-icons/sl";
import { LuBedDouble } from "react-icons/lu";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

export const Servicedetial = () => {
  const [propertyDetail, setPropertyDetail] = React.useState({} as any);
  const params = useParams();
  const [searchValue, setSearchValue] = React.useState("");
  const [searchData, setSearchData] = React.useState([] as any);
  const [dispay, setDisplay] = React.useState(false);
  const [filterDatas, setFilterData] = React.useState([] as any);
  const [isFilter, setIsFilter] = React.useState(false);

  const changeType = (e: any) => {
    const filterData = propertyDetail.filter((f: any) => {
      console.log(f);
      return (
        f.ourservices.type.toLowerCase() === e.target.innerHTML.toLowerCase()
      );
    });
    setFilterData([...filterData]);
    setIsFilter(true);
  };

  const getProjectDetail = async () => {
    const { data } = await axios.get(`/api/property/all`);
    console.log(data);
    let names: any = params.name;

    if (data.success) {
      const filterData = data.allProperty.filter((i: any) => {
        if (i.ourservices.subservice.toLowerCase() == names.toLowerCase()) {
          return i;
        }
        if (i.ourservices.name.toLowerCase() == names.toLowerCase()) {
          return i;
        }
      });
      // console.log(filterData);
      setPropertyDetail([...filterData]);
    }
  };

  const search = () => {
    if (searchValue) {
      setDisplay(true);
      const filterData = propertyDetail.filter((d: any) => {
        return d.title.toLowerCase().includes(searchValue.toLowerCase());
      });
      console.log(filterData);
      setSearchData([...filterData]);
    } else {
      setDisplay(false);
    }
  };

  React.useEffect(() => {
    getProjectDetail();
    // window.location.reload();
  }, []);
  console.log(propertyDetail);

  return (
    <Layout>
      <div className="service-detail-wrapper">
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
          <h2>{propertyDetail[0]?.ourservices.subservice}</h2>
          <p>Find your dream house</p>
        </div>
        {propertyDetail[0]?.ourservices.subservice.toLowerCase() ===
          "residential" && (
          <div
            className="filter-type"
            onClick={(e) => {
              changeType(e);
            }}
          >
            <button>Flats</button>
            <button>Villas</button>
            <button>Appartments</button>
            <button>Independent Floors</button>
          </div>
        )}
        {propertyDetail[0]?.ourservices.subservice === "commercial" && (
          <div
            className="filter-type"
            onClick={(e) => {
              changeType(e);
            }}
          >
            <button>Shop</button>
            <button>Offices</button>
            <button>Food court</button>
          </div>
        )}
        {propertyDetail[0]?.ourservices.subservice ===
          "plotting & land development" && (
          <div
            className="filter-type"
            onClick={(e) => {
              changeType(e);
            }}
          >
            <button>Plots</button>
            <button>Farm House</button>
          </div>
        )}
        {propertyDetail[0]?.ourservices.subservice ===
          "dream home construction" && (
          <div
            className="filter-type"
            onClick={(e) => {
              changeType(e);
            }}
          >
            <button>Flat</button>
            <button>Floors</button>
            <button>Appartments</button>
            <button>Villa</button>
          </div>
        )}
        {propertyDetail[0]?.ourservices.subservice === "Building nation" && (
          <div
            className="filter-type"
            onClick={(e) => {
              changeType(e);
            }}
          >
            <button>Roads</button>
            <button>Bridges</button>
            <button>Hospitals</button>
            <button>Hotels</button>
          </div>
        )}

        <div className="service-detail">
          {!isFilter &&
            propertyDetail.length > 0 &&
            propertyDetail.map((p: any) => {
              return (
                <div className="service-items">
                  <figure>
                    <img src={`${p.img[0]}`} alt="" />
                  </figure>
                  <h3>{p.title}</h3>
                  <p className="desc">{p.desc}</p>
                  <div className="location">
                    <SlLocationPin className="icon" />
                    <span>{p.location}</span>
                  </div>
                  <p className="price">Rs 20000</p>
                  {p.properyDetails && (
                    <div className="residental-wrapper">
                      <div className="details">
                        <LuBedDouble size={20} />
                        <p>Bedrooms {p.properyDetails.bedrooms}</p>
                      </div>
                      <div className="details">
                        <LuBedDouble size={20} />
                        <p>Bath Room {p.properyDetails.washrooms}</p>
                      </div>{" "}
                      <div className="details">
                        <LuBedDouble size={20} />
                        <p>
                          {p.properyDetails?.parking === "yes"
                            ? "Parking Available"
                            : "No Parking"}
                        </p>
                      </div>
                    </div>
                  )}

                  <div>
                    <Link
                      to={`/projectdetails/${p._id}`}
                      onClick={() => {
                        window.location.href = `/projectdetails/${p._id}`;
                      }}
                    >
                      <button>More</button>
                    </Link>
                  </div>
                </div>
              );
            })}

          {/* <div className="service-items">
            <figure>
              <img
                src="https://cdn.staticmb.com/propertyservicestatic/marketplacestatic/images/property-valuation/val-for-buyer-img.png"
                alt=""
              />
            </figure>
            <h3>Valuation for Buyers</h3>
            <p>
              Finalized a property? Let an Expert Valuer make sure it's worth
              the price you pay & help you save money.
            </p>
            <div className="location">
              <SlLocationPin className="icon" />
              <span>Nodia</span>
            </div>
            <p className="price">Rs 20000</p>
            <div className="residental-wrapper">
              <div className="details">
                <LuBedDouble size={20} />
                <p>Bedrooms 2</p>
              </div>
              <div className="details">
                <LuBedDouble size={20} />
                <p>Bath Room 2</p>
              </div>{" "}
              <div className="details">
                <LuBedDouble size={20} />
                <p>ParKing</p>
              </div>
            </div>
            <div>
              <button>More</button>
            </div>
          </div>{" "}
          <div className="service-items">
            <figure>
              <img
                src="https://cdn.staticmb.com/propertyservicestatic/marketplacestatic/images/property-valuation/val-for-buyer-img.png"
                alt=""
              />
            </figure>
            <h3>Valuation for Buyers</h3>
            <p>
              Finalized a property? Let an Expert Valuer make sure it's worth
              the price you pay & help you save money.
            </p>
            <div className="location">
              <SlLocationPin className="icon" />
              <span>Nodia</span>
            </div>
            <p className="price">Rs 20000</p>
            <div className="residental-wrapper">
              <div className="details">
                <LuBedDouble size={20} />
                <p>Bedrooms 2</p>
              </div>
              <div className="details">
                <LuBedDouble size={20} />
                <p>Bath Room 2</p>
              </div>{" "}
              <div className="details">
                <LuBedDouble size={20} />
                <p>ParKing</p>
              </div>
            </div>
            <div>
              <button>More</button>
            </div>
          </div>{" "}
          <div className="service-items">
            <figure>
              <img
                src="https://cdn.staticmb.com/propertyservicestatic/marketplacestatic/images/property-valuation/val-for-buyer-img.png"
                alt=""
              />
            </figure>
            <h3>Valuation for Buyers</h3>
            <p>
              Finalized a property? Let an Expert Valuer make sure it's worth
              the price you pay & help you save money.
            </p>
            <div className="location">
              <SlLocationPin className="icon" />
              <span>Nodia</span>
            </div>
            <p className="price">Rs 20000</p>
            <div className="residental-wrapper">
              <div className="details">
                <LuBedDouble size={20} />
                <p>Bedrooms 2</p>
              </div>
              <div className="details">
                <LuBedDouble size={20} />
                <p>Bath Room 2</p>
              </div>{" "}
              <div className="details">
                <LuBedDouble size={20} />
                <p>ParKing</p>
              </div>
            </div>
            <div>
              <button>More</button>
            </div>
          </div>{" "}
          <div className="service-items">
            <figure>
              <img
                src="https://cdn.staticmb.com/propertyservicestatic/marketplacestatic/images/property-valuation/val-for-buyer-img.png"
                alt=""
              />
            </figure>
            <h3>Valuation for Buyers</h3>
            <p>
              Finalized a property? Let an Expert Valuer make sure it's worth
              the price you pay & help you save money.
            </p>
            <div className="location">
              <SlLocationPin className="icon" />
              <span>Nodia</span>
            </div>
            <p className="price">Rs 20000</p>
            <div className="residental-wrapper">
              <div className="details">
                <LuBedDouble size={20} />
                <p>Bedrooms 2</p>
              </div>
              <div className="details">
                <LuBedDouble size={20} />
                <p>Bath Room 2</p>
              </div>{" "}
              <div className="details">
                <LuBedDouble size={20} />
                <p>ParKing</p>
              </div>
            </div>
            <div>
              <button>More</button>
            </div>
          </div> */}
        </div>
        <div className="service-detail">
          {isFilter &&
            filterDatas.length > 0 &&
            filterDatas.map((p: any) => {
              return (
                <div className="service-items">
                  <figure>
                    <img src={`${p.img[0]}`} alt="" />
                  </figure>
                  <h3>{p.title}</h3>
                  <p>{p.desc}</p>
                  <div className="location">
                    <SlLocationPin className="icon" />
                    <span>{p.location}</span>
                  </div>
                  <p className="price">Rs 20000</p>
                  {p.properyDetails && (
                    <div className="residental-wrapper">
                      <div className="details">
                        <LuBedDouble size={20} />
                        <p>Bedrooms {p.properyDetails.bedrooms}</p>
                      </div>
                      <div className="details">
                        <LuBedDouble size={20} />
                        <p>Bath Room {p.properyDetails.washrooms}</p>
                      </div>{" "}
                      <div className="details">
                        <LuBedDouble size={20} />
                        <p>ParKing</p>
                      </div>
                    </div>
                  )}

                  <div>
                    <Link
                      to={`/projectdetails/${p._id}`}
                      onClick={() => {
                        window.location.href = `/projectdetails/${p._id}`;
                      }}
                    >
                      <button>More</button>
                    </Link>
                  </div>
                </div>
              );
            })}

          {/* <div className="service-items">
            <figure>
              <img
                src="https://cdn.staticmb.com/propertyservicestatic/marketplacestatic/images/property-valuation/val-for-buyer-img.png"
                alt=""
              />
            </figure>
            <h3>Valuation for Buyers</h3>
            <p>
              Finalized a property? Let an Expert Valuer make sure it's worth
              the price you pay & help you save money.
            </p>
            <div className="location">
              <SlLocationPin className="icon" />
              <span>Nodia</span>
            </div>
            <p className="price">Rs 20000</p>
            <div className="residental-wrapper">
              <div className="details">
                <LuBedDouble size={20} />
                <p>Bedrooms 2</p>
              </div>
              <div className="details">
                <LuBedDouble size={20} />
                <p>Bath Room 2</p>
              </div>{" "}
              <div className="details">
                <LuBedDouble size={20} />
                <p>ParKing</p>
              </div>
            </div>
            <div>
              <button>More</button>
            </div>
          </div>{" "}
          <div className="service-items">
            <figure>
              <img
                src="https://cdn.staticmb.com/propertyservicestatic/marketplacestatic/images/property-valuation/val-for-buyer-img.png"
                alt=""
              />
            </figure>
            <h3>Valuation for Buyers</h3>
            <p>
              Finalized a property? Let an Expert Valuer make sure it's worth
              the price you pay & help you save money.
            </p>
            <div className="location">
              <SlLocationPin className="icon" />
              <span>Nodia</span>
            </div>
            <p className="price">Rs 20000</p>
            <div className="residental-wrapper">
              <div className="details">
                <LuBedDouble size={20} />
                <p>Bedrooms 2</p>
              </div>
              <div className="details">
                <LuBedDouble size={20} />
                <p>Bath Room 2</p>
              </div>{" "}
              <div className="details">
                <LuBedDouble size={20} />
                <p>ParKing</p>
              </div>
            </div>
            <div>
              <button>More</button>
            </div>
          </div>{" "}
          <div className="service-items">
            <figure>
              <img
                src="https://cdn.staticmb.com/propertyservicestatic/marketplacestatic/images/property-valuation/val-for-buyer-img.png"
                alt=""
              />
            </figure>
            <h3>Valuation for Buyers</h3>
            <p>
              Finalized a property? Let an Expert Valuer make sure it's worth
              the price you pay & help you save money.
            </p>
            <div className="location">
              <SlLocationPin className="icon" />
              <span>Nodia</span>
            </div>
            <p className="price">Rs 20000</p>
            <div className="residental-wrapper">
              <div className="details">
                <LuBedDouble size={20} />
                <p>Bedrooms 2</p>
              </div>
              <div className="details">
                <LuBedDouble size={20} />
                <p>Bath Room 2</p>
              </div>{" "}
              <div className="details">
                <LuBedDouble size={20} />
                <p>ParKing</p>
              </div>
            </div>
            <div>
              <button>More</button>
            </div>
          </div>{" "}
          <div className="service-items">
            <figure>
              <img
                src="https://cdn.staticmb.com/propertyservicestatic/marketplacestatic/images/property-valuation/val-for-buyer-img.png"
                alt=""
              />
            </figure>
            <h3>Valuation for Buyers</h3>
            <p>
              Finalized a property? Let an Expert Valuer make sure it's worth
              the price you pay & help you save money.
            </p>
            <div className="location">
              <SlLocationPin className="icon" />
              <span>Nodia</span>
            </div>
            <p className="price">Rs 20000</p>
            <div className="residental-wrapper">
              <div className="details">
                <LuBedDouble size={20} />
                <p>Bedrooms 2</p>
              </div>
              <div className="details">
                <LuBedDouble size={20} />
                <p>Bath Room 2</p>
              </div>{" "}
              <div className="details">
                <LuBedDouble size={20} />
                <p>ParKing</p>
              </div>
            </div>
            <div>
              <button>More</button>
            </div>
          </div> */}
        </div>
        {propertyDetail.length === 0 && (
          <h2 style={{ textAlign: "center", fontSize: "4rem", color: "gray" }}>
            Not Found
          </h2>
        )}
      </div>
    </Layout>
  );
};
