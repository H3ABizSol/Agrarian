import React from "react";
import "./Projectdetail.scss";
import Layout from "../../Layout/Layout";
import { useParams } from "react-router-dom";
import { IoLocationOutline } from "react-icons/io5";
import axios from "axios";
export const Projectdetail = () => {
  const params = useParams();
  const [imgIndex, setImgIndex] = React.useState(0);
  const [propertyDetail, setPropertyDetail] = React.useState({} as any);

  const getProjectDetail = async () => {
    const { data } = await axios.get(
      `/api/property/propertydetail/${params.id}`
    );
    console.log(data);
    if (data.success) {
      setPropertyDetail(data.propertydetail);
    }
  };

  React.useEffect(() => {
    getProjectDetail();
  }, []);
  console.log(propertyDetail);
  return (
    <Layout>
      <div className="project-detail-wrapper">
        <div className="img-container">
          <figure>
            <img
              src={propertyDetail.img && `${propertyDetail.img[imgIndex]}`}
              alt=""
            />
          </figure>
        </div>
        <div className="img-show">
          {propertyDetail.img?.map((i: any, index: any) => {
            return (
              <figure
                onClick={() => {
                  setImgIndex(index);
                }}
              >
                <img src={`${i}`} alt="" />
              </figure>
            );
          })}
        </div>
        <div className="project-content">
          <div className="left">
            <div className="first">
              <h2>{propertyDetail.title}</h2>
              <span>
                <IoLocationOutline />
                {propertyDetail.location}
              </span>
              <p>₹ {propertyDetail.price}</p>
              <p>{propertyDetail.desc}</p>
            </div>
            {propertyDetail.properyDetails && (
              <div className="second">
                <div className="items">
                  <p>{propertyDetail.properyDetails?.bedrooms} Bedrooms</p>
                </div>
                <div className="items">
                  <p>{propertyDetail.properyDetails?.washrooms} Washrooms</p>
                </div>
                <div className="items">
                  <p>
                    {propertyDetail.properyDetails?.parking === "yes"
                      ? "Parking Available"
                      : "No Parking"}
                  </p>
                </div>
              </div>
            )}
          </div>
          <div className="right">
            <h3></h3>
          </div>
        </div>
      </div>
    </Layout>
  );
};
