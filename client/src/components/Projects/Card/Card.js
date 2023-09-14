"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Card = void 0;
const react_router_dom_1 = require("react-router-dom");
require("./Card.scss");
// import { BiRupee } from "react-icons/bi";
const sl_1 = require("react-icons/sl");
const Card = ({ property }) => {
    console.log(property);
    return (<>
      <div className="card-items">
        <react_router_dom_1.Link to={`/projectdetails/${property._id}`}>
          <figure>
            <img src={`http://localhost:4000/uploads/${property.img[0]}`} alt=""/>
          </figure>
        </react_router_dom_1.Link>
        <h3>{property.title}</h3>
        <div className="location">
          <sl_1.SlLocationPin className="icon"/>
          <span>{property.location}</span>
        </div>
        <div className="card-details">
          {/* <div>
          <BiRupee className="icon" />
          <p>Name</p>
        </div>
        <div>
          <BiRupee className="icon" />
          <p>Address</p>
        </div>{" "}
        <div>
          <BiRupee className="icon" />
          <p>price</p>
        </div> */}
        </div>
        {/* <div className="explore-and-enquiry">
          <button>Explore</button>
          <button>Enquire</button>
        </div> */}
      </div>
    </>);
};
exports.Card = Card;
