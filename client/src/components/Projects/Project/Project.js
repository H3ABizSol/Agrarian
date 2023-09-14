"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Project = void 0;
const react_1 = __importDefault(require("react"));
require("./Projects.scss");
const Card_1 = require("../Card/Card");
const axios_1 = __importDefault(require("axios"));
const Loader_1 = require("../../Loader/Loader");
const Project = () => {
    const [allProperty, setAllProperty] = react_1.default.useState([]);
    const [spin, setSpin] = react_1.default.useState(false);
    // const handleClick = (e: any) => {
    //   const li = window.document.getElementsByClassName("myul");
    //   for (const items of li) {
    //     items.classList.remove("active");
    //   }
    //   e.target.classList.add("active");
    // };
    const getProjects = async () => {
        setSpin(true);
        const { data } = await axios_1.default.get("http://localhost:4000/api/property/all");
        if (data.success) {
            setAllProperty([...data.allProperty]);
            setSpin(false);
        }
    };
    react_1.default.useEffect(() => {
        getProjects();
    }, []);
    return (<>
      <div className="project-wrapper">
        <div className="second-div">
          <div>
            <h2>Our choice of popular deals</h2>
          </div>
          {/* <div className="filter-wrapper">
          <div className="filter-data">
            <ul onClick={handleClick}>
              <li className="myul">Rent</li>
              <li className="myul">Commercial</li>
              <li className="myul">Plot</li>
            </ul>
          </div>
        </div> */}
          {spin ? (<Loader_1.Loader />) : (<div className="card-wrapper">
              {allProperty &&
                allProperty.map((property) => {
                    return <Card_1.Card property={property}/>;
                })}
            </div>)}
        </div>
      </div>
    </>);
};
exports.Project = Project;
