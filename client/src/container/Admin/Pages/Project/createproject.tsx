import { useState } from "react";
import { Dashboardlayout } from "../../Dashboardlayout/Dashboardlayout";
import "./createproject.scss";
import axios from "axios";
import { Loader } from "../../../../components/Loader/Loader";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ourservices = [
  {
    id: "1",
    name: "Property Bazzar",
    subservie: ["Residental", "commercial"],
  },
  {
    id: "2",
    name: "Agragian Landcraft",
    subservie: ["Plotting & Land Development"],
  },
  {
    id: "3",
    name: "Agragian Homes",
    subservie: ["Dream Homes Construction"],
  },
  {
    id: "4",
    name: "Agragian Infrastructure",
    subservie: ["Building nation"],
  },
];
const num = [1, 2, 3, 4, 5];

export const Createproject = () => {
  const [propertyDetails, setPropertyDetails] = useState({
    title: "",
    desc: "",
    price: "",
    location: "",
    service: "",
    subservice: "",
    bedrooms: "",
    washrooms: "",
    parking: "",
  } as any);
  const [image, setImages] = useState([]);
  const [subService, setSubService] = useState([] as any);
  const [showInput, setShowInput] = useState(false);
  const [type, setType] = useState("");
  const [ok, setOk] = useState(false);
  const [spin, setSpin] = useState(false);

  const handleChange = (e: any) => {
    setPropertyDetails({
      ...propertyDetails,
      [e.target.name]: e.target.value,
    });
  };

  const chagneService = (e: any) => {
    setPropertyDetails({
      ...propertyDetails,
      service: e.target.value,
    });
    const filter = ourservices.filter((s) => {
      return s.name.toLocaleLowerCase() === e.target.value.toLowerCase();
    });
    setSubService([...filter[0].subservie]);
  };

  const changeSubService = (e: any) => {
    setPropertyDetails({
      ...propertyDetails,
      subservice: e.target.value,
    });
    if (e.target.value.toLowerCase() === "residental") {
      setShowInput(true);
    } else {
      setShowInput(false);
    }
  };

  const handleSubmit = async (e: any) => {
    setSpin(true);
    e.preventDefault();
    const formData = new FormData();
    for (const img of image) {
      formData.append("img", img);
    }
    formData.append("title", propertyDetails.title);
    formData.append("desc", propertyDetails.desc);
    formData.append("price", propertyDetails.price);
    formData.append("location", propertyDetails.location);
    formData.append("service", propertyDetails.service);
    formData.append("subservice", propertyDetails.subservice);
    formData.append("type", type);
    formData.append("bedrooms", propertyDetails.bedrooms);
    formData.append("washrooms", propertyDetails.washrooms);
    formData.append("parking", propertyDetails.parking);

    const { data } = await axios.post("/api/property/create", formData, {
      headers: {
        token: localStorage.getItem("admin_token"),
      },
    });
    if (data.success) {
      setSpin(false);
      setOk(true);
      toast("👌 create successfully!", {
        position: "bottom-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };
  if (ok) {
    return <Createproject />;
  }
  return (
    <Dashboardlayout>
      <ToastContainer />
      {spin ? (
        <Loader />
      ) : (
        <div className="create-project-container">
          <form action="" onSubmit={handleSubmit}>
            <h2>Agrarian Create Project</h2>
            <div className="form-text-field">
              <input
                type="text"
                name="title"
                id=""
                onChange={handleChange}
                placeholder="Project title"
                value={propertyDetails.title}
              />
              <input
                type="text"
                name="price"
                id=""
                onChange={handleChange}
                placeholder="Project Price"
                value={propertyDetails.price}
              />
              <input
                type="text"
                name="location"
                onChange={handleChange}
                placeholder="Location"
                value={propertyDetails.location}
              />

              {/* <select name="" id="">
              <option value="">Nodia</option>
            </select> */}
            </div>
            <div className="form-text-field">
              <textarea
                name="desc"
                rows={10}
                placeholder="project description"
                value={propertyDetails.desc}
                onChange={handleChange}
              />
            </div>
            <div className="form-text-field">
              <select
                onChange={(e) => {
                  chagneService(e);
                }}
              >
                <option value="">Our Services</option>
                {ourservices.map((s) => {
                  return <option value={s.name}>{s.name}</option>;
                })}
              </select>
              <select
                name=""
                id=""
                onChange={(e) => {
                  changeSubService(e);
                }}
              >
                <option value="">Sub-Service</option>
                {subService.map((s: any) => {
                  return <option value={s}>{s}</option>;
                })}
              </select>
              {propertyDetails.subservice.toLowerCase() === "residental" && (
                <select
                  name=""
                  onChange={(e) => {
                    setType(e.target.value);
                  }}
                >
                  <option value="">select type</option>
                  <option value="flats">Flats</option>
                  <option value="villas">villas</option>
                  <option value="appartments">appartments</option>
                  <option value="floors">floors</option>
                </select>
              )}
              {propertyDetails.subservice.toLowerCase() === "commercial" && (
                <select
                  name=""
                  id=""
                  onChange={(e) => {
                    setType(e.target.value);
                  }}
                >
                  <option>select type</option>
                  <option value="shop">shop</option>
                  <option value="offices">offices</option>
                  <option value="foodcourt">food-court</option>
                </select>
              )}
              {propertyDetails.subservice.toLowerCase() ===
                "plotting & land development" && (
                <select
                  name=""
                  id=""
                  onChange={(e) => {
                    setType(e.target.value);
                  }}
                >
                  <option>select type</option>
                  <option value="plots">Plots</option>
                  <option value="farm house">Farm House</option>
                </select>
              )}
              {propertyDetails.subservice.toLowerCase() ===
                "dream home construction" && (
                <select
                  name=""
                  id=""
                  onChange={(e) => {
                    setType(e.target.value);
                  }}
                >
                  <option>select type</option>
                  <option value="flat">flat</option>
                  <option value="floors">floors</option>
                  <option value="appartment">Appartment</option>
                  <option value="villa">villa</option>
                </select>
              )}
              {propertyDetails.subservice.toLowerCase() ===
                "building nation" && (
                <select
                  name=""
                  id=""
                  onChange={(e) => {
                    setType(e.target.value);
                  }}
                >
                  <option>select type</option>
                  <option value="roads">roads</option>
                  <option value="bridges">bridges</option>
                  <option value="hospitals">hospitals</option>
                  <option value="hotels">hotels</option>
                </select>
              )}
              <input
                type="file"
                name="title"
                multiple
                id=""
                onChange={(e: any) => {
                  setImages(e.target.files);
                }}
              />
            </div>
            {showInput && (
              <div className="form-text-field">
                <select
                  name="subservices"
                  id=""
                  onChange={(e) => {
                    setPropertyDetails({
                      ...propertyDetails,
                      bedrooms: e.target.value,
                    });
                  }}
                >
                  <option value="">Bed Rooms</option>
                  {num.map((n) => {
                    return <option value={n}>{n}</option>;
                  })}
                </select>
                <select
                  name="=subservices"
                  id=""
                  onChange={(e) => {
                    setPropertyDetails({
                      ...propertyDetails,
                      washrooms: e.target.value,
                    });
                  }}
                >
                  <option value="">WASH ROOMS</option>
                  {num.map((n) => {
                    return <option value={n}>{n}</option>;
                  })}
                </select>
                <select
                  name="subservices"
                  id=""
                  onChange={(e) => {
                    setPropertyDetails({
                      ...propertyDetails,
                      parking: e.target.value,
                    });
                  }}
                >
                  <option value="">PARKING</option>
                  <option value="yes">YES</option>
                  <option value="no">NO</option>
                </select>
              </div>
            )}
            <div className="btn-container">
              <button>Create</button>
            </div>
          </form>
        </div>
      )}
    </Dashboardlayout>
  );
};
