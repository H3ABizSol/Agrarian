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
                      return <li>{p.title}</li>;
                    })}
                </ul>
              </div>
            )}
          </div>
        </div>
        <div className="paralex">
          <h2>Residental</h2>
          <p>Find your dream house</p>
        </div>
        <div className="service-detail">
          {propertyDetail &&
            propertyDetail.length > 0 &&
            propertyDetail.map((p: any) => {
              return (
                <div className="service-items">
                  <figure>
                    <img src={`/uploads/${p.img[0]}`} alt="" />
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
