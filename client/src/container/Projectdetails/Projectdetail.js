"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Projectdetail = void 0;
const react_1 = __importDefault(require("react"));
require("./Projectdetail.scss");
const Layout_1 = __importDefault(require("../../Layout/Layout"));
const react_router_dom_1 = require("react-router-dom");
const io5_1 = require("react-icons/io5");
const axios_1 = __importDefault(require("axios"));
const Projectdetail = () => {
    const params = (0, react_router_dom_1.useParams)();
    const [imgIndex, setImgIndex] = react_1.default.useState(0);
    const [propertyDetail, setPropertyDetail] = react_1.default.useState({});
    const getProjectDetail = async () => {
        const { data } = await axios_1.default.get(`/api/property/propertydetail/${params.id}`);
        console.log(data);
        if (data.success) {
            setPropertyDetail(data.propertydetail);
        }
    };
    react_1.default.useEffect(() => {
        getProjectDetail();
    }, []);
    return (<Layout_1.default>
      <div className="project-detail-wrapper">
        <div className="img-container">
          <figure>
            <img src={propertyDetail.img && `/uploads/${propertyDetail.img[imgIndex]}`} alt=""/>
          </figure>
        </div>
        <div className="img-show">
          {propertyDetail.img?.map((i, index) => {
            return (<figure onClick={() => {
                    setImgIndex(index);
                }}>
                <img src={`/uploads/${i}`} alt=""/>
              </figure>);
        })}
        </div>
        <div className="project-content">
          <div className="left">
            <div className="first">
              <h2>{propertyDetail.title}</h2>
              <span>
                <io5_1.IoLocationOutline />
                {propertyDetail.location}
              </span>
              <p>₹ {propertyDetail.price}</p>
              <p>{propertyDetail.desc}</p>
            </div>
            {propertyDetail.properyDetails && (<div className="second">
                <div className="items">
                  <p>{propertyDetail.properyDetails?.bedrooms} Bedrooms</p>
                </div>
                <div className="items">
                  <p>{propertyDetail.properyDetails?.washrooms} Washrooms</p>
                </div>
                <div className="items">
                  <p>{propertyDetail.properyDetails?.parking} Parking</p>
                </div>
              </div>)}
          </div>
          <div className="right">
            <h3>Welomce</h3>
          </div>
        </div>
      </div>
    </Layout_1.default>);
};
exports.Projectdetail = Projectdetail;
