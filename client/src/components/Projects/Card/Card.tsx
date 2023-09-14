import { Link } from "react-router-dom";
import "./Card.scss";
// import { BiRupee } from "react-icons/bi";
import { SlLocationPin } from "react-icons/sl";

export const Card = ({ property }: any) => {
  console.log(property);
  return (
    <>
      <div className="card-items">
        <Link to={`/projectdetails/${property._id}`}>
          <figure>
            <img
              src={`http://localhost:4000/uploads/${property.img[0]}`}
              alt=""
            />
          </figure>
        </Link>
        <h3>{property.title}</h3>
        <div className="location">
          <SlLocationPin className="icon" />
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
    </>
  );
};
