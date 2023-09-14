"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ourproject = void 0;
const react_1 = __importStar(require("react"));
const Layout_1 = __importDefault(require("../../Layout/Layout"));
const ai_1 = require("react-icons/ai");
const sl_1 = require("react-icons/sl");
const lu_1 = require("react-icons/lu");
require("./Ourproject.scss");
const axios_1 = __importDefault(require("axios"));
const LOGO_png_1 = __importDefault(require("../../assets/LOGO.png"));
const Ourproject = () => {
    const [allProperty, setAllProperty] = react_1.default.useState([]);
    const [filterProperty, setFilterProperty] = react_1.default.useState([]);
    const [isFilter, setIsFilter] = (0, react_1.useState)(false);
    const [isProperty, setIsProperty] = (0, react_1.useState)(false);
    // const [spin, setSpin] = React.useState(false);
    const getProjects = async () => {
        const { data } = await axios_1.default.get("/api/property/all");
        if (data.success) {
            setAllProperty([...data.allProperty]);
            setIsFilter(false);
            setIsProperty(true);
        }
    };
    const filterProject = (e) => {
        if (e.target.innerHTML.toLowerCase() === "all") {
            setIsProperty(true);
            setIsFilter(false);
        }
        else {
            setIsProperty(false);
            setIsFilter(true);
            const filterData = allProperty.filter((i) => {
                return (i.ourservices.subservice.toLowerCase() ===
                    e.target.innerHTML.toLowerCase());
            });
            setFilterProperty([...filterData]);
        }
    };
    (0, react_1.useEffect)(() => {
        window.scrollTo(0, 0);
        getProjects();
    }, []);
    return (<Layout_1.default>
      <div className="project-detail-wrapper">
        <div className="search-wrapper-container">
          <div className={"search-wrapper"}>
            <input type="search" name="" id="" placeholder="Search"/>
            <div className="icon">
              <ai_1.AiOutlineSearch size={30} color="#ff55a4d3"/>
            </div>
          </div>
        </div>
        <div className="paralex">
          <h2>Projects</h2>
          <p>Find your dream house</p>
        </div>

        {isProperty && (<div className="project-detail">
            <div className="left">
              {allProperty &&
                allProperty.map((p) => {
                    return (<div className="project-items">
                      <figure>
                        <img src={`/uploads/${p.img[0]}`} alt=""/>
                      </figure>
                      <div className="content">
                        <h3>{p.title}</h3>
                        <p>{p.desc}</p>
                        <div className="location">
                          <sl_1.SlLocationPin className="icon"/>
                          <span>{p.loaction}</span>
                        </div>
                        <p className="price"> ₹ {p.price}</p>
                        <div className="residental-wrapper">
                          <div className="details">
                            <lu_1.LuBedDouble size={20}/>
                            <p>Bedrooms {p.properyDetails?.bedrooms}</p>
                          </div>
                          <div className="details">
                            <lu_1.LuBedDouble size={20}/>
                            <p>washrooms {p.properyDetails?.washrooms}</p>
                          </div>{" "}
                          <div className="details">
                            <lu_1.LuBedDouble size={20}/>
                            {p.properyDetails?.parking === "yes" ? (<p>Parking</p>) : (<p>No Parking</p>)}
                          </div>
                        </div>
                        <div>
                          <button>More</button>
                        </div>
                      </div>
                    </div>);
                })}

              {allProperty.length == 0 && (<div className="no-projects">
                  <figure>
                    <img src={LOGO_png_1.default} alt=""/>
                  </figure>
                  <h2>No Projects</h2>
                </div>)}
            </div>

            <div className="right">
              <h3>Filter</h3>
              <h4>Services</h4>
              <div className="residental-category" onClick={(e) => {
                filterProject(e);
            }}>
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
          </div>)}

        {isFilter && (<div className="project-detail">
            <div className="left">
              {filterProperty &&
                filterProperty.map((p) => {
                    return (<div className="project-items">
                      <figure>
                        <img src={`/uploads/${p.img[0]}`} alt=""/>
                      </figure>
                      <div className="content">
                        <h3>{p.title}</h3>
                        <p>{p.desc}</p>
                        <div className="location">
                          <sl_1.SlLocationPin className="icon"/>
                          <span>{p.loaction}</span>
                        </div>
                        <p className="price"> ₹ {p.price}</p>
                        <div className="residental-wrapper">
                          <div className="details">
                            <lu_1.LuBedDouble size={20}/>
                            <p>Bedrooms {p.properyDetails?.bedrooms}</p>
                          </div>
                          <div className="details">
                            <lu_1.LuBedDouble size={20}/>
                            <p>washrooms {p.properyDetails?.washrooms}</p>
                          </div>{" "}
                          <div className="details">
                            <lu_1.LuBedDouble size={20}/>
                            {p.properyDetails?.parking === "yes" ? (<p>Parking</p>) : (<p>No Parking</p>)}
                          </div>
                        </div>
                        <div>
                          <button>More</button>
                        </div>
                      </div>
                    </div>);
                })}

              {filterProperty.length == 0 && (<div className="no-projects">
                  <figure>
                    <img src={LOGO_png_1.default} alt=""/>
                  </figure>
                  <h2>No Projects</h2>
                </div>)}
            </div>

            <div className="right">
              <h3>Filter</h3>
              <h4>Services</h4>
              <div className="residental-category" onClick={(e) => {
                filterProject(e);
            }}>
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
          </div>)}
      </div>
    </Layout_1.default>);
};
exports.Ourproject = Ourproject;
