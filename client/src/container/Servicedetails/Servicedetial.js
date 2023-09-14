"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Servicedetial = void 0;
const react_1 = __importDefault(require("react"));
require("./Servicedetail.scss");
const Layout_1 = __importDefault(require("../../Layout/Layout"));
const ai_1 = require("react-icons/ai");
const sl_1 = require("react-icons/sl");
const lu_1 = require("react-icons/lu");
const react_router_dom_1 = require("react-router-dom");
const axios_1 = __importDefault(require("axios"));
const Servicedetial = () => {
    const [propertyDetail, setPropertyDetail] = react_1.default.useState({});
    const params = (0, react_router_dom_1.useParams)();
    const getProjectDetail = async () => {
        const { data } = await axios_1.default.get(`/api/property/all`);
        let names = params.name;
        if (data.success) {
            const filterData = data.allProperty.filter((i) => {
                return i.ourservices.subservice.toLowerCase() == names.toLowerCase();
            });
            setPropertyDetail([...filterData]);
        }
    };
    react_1.default.useEffect(() => {
        getProjectDetail();
    }, []);
    return (<Layout_1.default>
      <div className="service-detail-wrapper">
        <div className="search-wrapper-container">
          <div className={"search-wrapper"}>
            <input type="search" name="" id="" placeholder="Search"/>
            <div className="icon">
              <ai_1.AiOutlineSearch size={30} color="#ff55a4d3"/>
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
            propertyDetail.map((p) => {
                return (<div className="service-items">
                  <figure>
                    <img src={`/uploads/${p.img[0]}`} alt=""/>
                  </figure>
                  <h3>{p.title}</h3>
                  <p>{p.desc}</p>
                  <div className="location">
                    <sl_1.SlLocationPin className="icon"/>
                    <span>{p.location}</span>
                  </div>
                  <p className="price">Rs 20000</p>
                  {p.properyDetails && (<div className="residental-wrapper">
                      <div className="details">
                        <lu_1.LuBedDouble size={20}/>
                        <p>Bedrooms {p.properyDetails.bedrooms}</p>
                      </div>
                      <div className="details">
                        <lu_1.LuBedDouble size={20}/>
                        <p>Bath Room {p.properyDetails.washrooms}</p>
                      </div>{" "}
                      <div className="details">
                        <lu_1.LuBedDouble size={20}/>
                        <p>ParKing</p>
                      </div>
                    </div>)}

                  <div>
                    <react_router_dom_1.Link to={`/projectdetails/${p._id}`} onClick={() => {
                        window.location.href = `/projectdetails/${p._id}`;
                    }}>
                      <button>More</button>
                    </react_router_dom_1.Link>
                  </div>
                </div>);
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
    </Layout_1.default>);
};
exports.Servicedetial = Servicedetial;
