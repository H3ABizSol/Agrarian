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

  const getProjectDetail = async () => {
    const { data } = await axios.get(`/api/property/all`);
    let names: any = params.name;

    if (data.success) {
      console.log("innn");
      const filterData = data.allProperty.filter((i: any) => {
        return i.ourservices.subservice.toLowerCase() == names.toLowerCase();
      });
      setPropertyDetail([...filterData]);
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
            <input type="search" name="" id="" placeholder="Search" />
            <div className="icon">
              <AiOutlineSearch size={30} color="#ff55a4d3" />
            </div>
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
      </div>
    </Layout>
  );
};
