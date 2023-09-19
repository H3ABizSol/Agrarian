import React from "react";
import "./Projects.scss";
import { Card } from "../Card/Card";
import axios from "axios";
import { Loader } from "../../Loader/Loader";

export const Project = () => {
  const [allProperty, setAllProperty] = React.useState([] as any);
  const [spin, setSpin] = React.useState(false);

  // const handleClick = (e: any) => {
  //   const li = window.document.getElementsByClassName("myul");
  //   for (const items of li) {
  //     items.classList.remove("active");
  //   }
  //   e.target.classList.add("active");
  // };

  const getProjects = async () => {
    console.log("helo");
    setSpin(true);
    const { data } = await axios.get("/api/property/all");
    console.log(data);
    if (data.success) {
      setAllProperty([...data.allProperty]);
      setSpin(false);
    }
  };

  React.useEffect(() => {
    getProjects();
  }, []);
  return (
    <>
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
          {spin ? (
            <Loader />
          ) : (
            <div className="card-wrapper">
              {allProperty &&
                allProperty.slice(0, 6).map((property: any) => {
                  return <Card property={property} />;
                })}
            </div>
          )}
        </div>
      </div>
    </>
  );
};
