"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Createproject = void 0;
const react_1 = require("react");
const Dashboardlayout_1 = require("../../Dashboardlayout/Dashboardlayout");
require("./createproject.scss");
const axios_1 = __importDefault(require("axios"));
const Loader_1 = require("../../../../components/Loader/Loader");
const react_toastify_1 = require("react-toastify");
require("react-toastify/dist/ReactToastify.css");
const ourservices = [
    {
        id: "1",
        name: "Property Bazzar",
        subservie: ["Residental", "commercial"],
    },
    {
        id: "2",
        name: "Agrarian Landcraft",
        subservie: ["Plot", "Land Development"],
    },
    {
        id: "3",
        name: "Agrarian Home",
        subservie: ["Dream Home Construction"],
    },
    {
        id: "4",
        name: "Agrarian Infrastructure",
        subservie: ["Building Wallion"],
    },
];
const num = [1, 2, 3, 4, 5];
const Createproject = () => {
    const [propertyDetails, setPropertyDetails] = (0, react_1.useState)({
        title: "",
        desc: "",
        price: "",
        location: "",
        service: "",
        subservice: "",
        bedrooms: "",
        washrooms: "",
        parking: "",
    });
    const [image, setImages] = (0, react_1.useState)([]);
    const [subService, setSubService] = (0, react_1.useState)([]);
    const [showInput, setShowInput] = (0, react_1.useState)(false);
    const [ok, setOk] = (0, react_1.useState)(false);
    const [spin, setSpin] = (0, react_1.useState)(false);
    const handleChange = (e) => {
        setPropertyDetails({
            ...propertyDetails,
            [e.target.name]: e.target.value,
        });
    };
    const chagneService = (e) => {
        setPropertyDetails({
            ...propertyDetails,
            service: e.target.value,
        });
        const filter = ourservices.filter((s) => {
            return s.name.toLocaleLowerCase() === e.target.value.toLowerCase();
        });
        setSubService([...filter[0].subservie]);
    };
    const changeSubService = (e) => {
        setPropertyDetails({
            ...propertyDetails,
            subservice: e.target.value,
        });
        if (e.target.value.toLowerCase() === "residental") {
            setShowInput(true);
        }
        else {
            setShowInput(false);
        }
    };
    const handleSubmit = async (e) => {
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
        formData.append("bedrooms", propertyDetails.bedrooms);
        formData.append("washrooms", propertyDetails.washrooms);
        formData.append("parking", propertyDetails.parking);
        const { data } = await axios_1.default.post("/api/property/create", formData, {
            headers: {
                token: localStorage.getItem("admin_token"),
            },
        });
        if (data.success) {
            setSpin(false);
            setOk(true);
            (0, react_toastify_1.toast)("👌 create successfully!", {
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
        return <exports.Createproject />;
    }
    return (<Dashboardlayout_1.Dashboardlayout>
      <react_toastify_1.ToastContainer />
      {spin ? (<Loader_1.Loader />) : (<div className="create-project-container">
          <form action="" onSubmit={handleSubmit}>
            <h2>Agrarian Create Project</h2>
            <div className="form-text-field">
              <input type="text" name="title" id="" onChange={handleChange} placeholder="Project title" value={propertyDetails.title}/>
              <input type="text" name="price" id="" onChange={handleChange} placeholder="Project Price" value={propertyDetails.price}/>
              <input type="text" name="location" onChange={handleChange} placeholder="Location" value={propertyDetails.location}/>

              {/* <select name="" id="">
            <option value="">Nodia</option>
          </select> */}
            </div>
            <div className="form-text-field">
              <textarea name="desc" rows={10} placeholder="project description" value={propertyDetails.desc} onChange={handleChange}/>
            </div>
            <div className="form-text-field">
              <select onChange={(e) => {
                chagneService(e);
            }}>
                <option value="">Our Services</option>
                {ourservices.map((s) => {
                return <option value={s.name}>{s.name}</option>;
            })}
              </select>
              <select name="" id="" onChange={(e) => {
                changeSubService(e);
            }}>
                <option value="">Sub-Service</option>
                {subService.map((s) => {
                return <option value={s}>{s}</option>;
            })}
              </select>
              <input type="file" name="title" multiple id="" onChange={(e) => {
                setImages(e.target.files);
            }}/>
            </div>
            {showInput && (<div className="form-text-field">
                <select name="subservices" id="" onChange={(e) => {
                    setPropertyDetails({
                        ...propertyDetails,
                        bedrooms: e.target.value,
                    });
                }}>
                  <option value="">Bed Rooms</option>
                  {num.map((n) => {
                    return <option value={n}>{n}</option>;
                })}
                </select>
                <select name="=subservices" id="" onChange={(e) => {
                    setPropertyDetails({
                        ...propertyDetails,
                        washrooms: e.target.value,
                    });
                }}>
                  <option value="">WASH ROOMS</option>
                  {num.map((n) => {
                    return <option value={n}>{n}</option>;
                })}
                </select>
                <select name="subservices" id="" onChange={(e) => {
                    setPropertyDetails({
                        ...propertyDetails,
                        parking: e.target.value,
                    });
                }}>
                  <option value="">PARKING</option>
                  <option value="yes">YES</option>
                  <option value="no">NO</option>
                </select>
              </div>)}
            <div className="btn-container">
              <button>Create</button>
            </div>
          </form>
        </div>)}
    </Dashboardlayout_1.Dashboardlayout>);
};
exports.Createproject = Createproject;
