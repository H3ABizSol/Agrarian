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
exports.Project = void 0;
const react_1 = __importStar(require("react"));
const Dashboardlayout_1 = require("../../Dashboardlayout/Dashboardlayout");
require("./Project.scss");
const axios_1 = __importDefault(require("axios"));
const ai_1 = require("react-icons/ai");
const Loader_1 = require("../../../../components/Loader/Loader");
const antd_1 = require("antd");
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
const Project = () => {
    const [updatePropertyDetails, setUpdatePropertyDetails] = (0, react_1.useState)({
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
    const [allProperty, setAllProperty] = react_1.default.useState([]);
    const [open, setOpen] = (0, react_1.useState)(false);
    const [image, setImages] = (0, react_1.useState)([]);
    const [subService, setSubService] = (0, react_1.useState)([]);
    const [showInput, setShowInput] = (0, react_1.useState)(false);
    const [ok, setOk] = (0, react_1.useState)(false);
    const [spin, setSpin] = (0, react_1.useState)(false);
    const [updateId, setUpdateId] = (0, react_1.useState)();
    const handleChange = (e) => {
        setUpdatePropertyDetails({
            ...updatePropertyDetails,
            [e.target.name]: e.target.value,
        });
    };
    const chagneService = (e) => {
        setUpdatePropertyDetails({
            ...updatePropertyDetails,
            service: e.target.value,
        });
        const filter = ourservices.filter((s) => {
            return s.name.toLocaleLowerCase() === e.target.value.toLowerCase();
        });
        setSubService([...filter[0].subservie]);
    };
    const changeSubService = (e) => {
        setUpdatePropertyDetails({
            ...updatePropertyDetails,
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
        console.log(updatePropertyDetails);
        console.log(image);
        formData.append("title", updatePropertyDetails.title);
        formData.append("desc", updatePropertyDetails.desc);
        formData.append("price", updatePropertyDetails.price);
        formData.append("location", updatePropertyDetails.location);
        formData.append("service", updatePropertyDetails.service);
        formData.append("subservice", updatePropertyDetails.subservice);
        formData.append("bedrooms", updatePropertyDetails.bedrooms);
        formData.append("washrooms", updatePropertyDetails.washrooms);
        formData.append("parking", updatePropertyDetails.parking);
        const { data } = await axios_1.default.put(`/api/property/update/${updateId}`, formData, {
            headers: {
                token: localStorage.getItem("admin_token"),
            },
        });
        console.log(data);
        if (data.success) {
            setSpin(false);
            setOk(true);
            alert("project cerated");
        }
    };
    const getProjects = async () => {
        setSpin(true);
        const { data } = await axios_1.default.get("/api/property/all");
        if (data.success) {
            setAllProperty([...data.allProperty]);
            setSpin(false);
        }
    };
    const updateProject = (p) => {
        setOpen(true);
        setImages(p.img);
        setUpdateId(p._id);
        setUpdatePropertyDetails({
            title: p.title,
            desc: p.desc,
            price: p.price,
            location: p.location,
            service: p.ourservices.name,
            subservice: p.ourservices.subservice,
            bedrooms: p.properyDetails?.bedrooms,
            washrooms: p.properyDetails?.washrooms,
            parking: p.properyDetails?.parking,
        });
    };
    const deleteProject = async (p) => {
        const confirm = window.confirm("Are you sure");
        if (confirm) {
            setSpin(true);
            const { data } = await axios_1.default.delete(`/api/property/delete/${p._id}`, {
                headers: {
                    token: localStorage.getItem("admin_token"),
                },
            });
            console.log(data);
            if (data.success) {
                setSpin(false);
                (0, react_toastify_1.toast)("👌 delete successfully!", {
                    position: "bottom-center",
                    autoClose: 1000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
                setTimeout(() => {
                    getProjects();
                }, 2000);
            }
        }
    };
    react_1.default.useEffect(() => {
        getProjects();
    }, []);
    if (ok) {
        return <exports.Project />;
    }
    return (<Dashboardlayout_1.Dashboardlayout>
      <react_toastify_1.ToastContainer />
      {spin ? (<Loader_1.Loader />) : (<div className="admin-project-wrapper">
          <h2>Projects</h2>
          <div className="project-item">
            {allProperty &&
                allProperty.map((p) => {
                    return (<div>
                    <div className="items">
                      <figure>
                        <img src={`/uploads/${p.img[0]}`} alt=""/>
                      </figure>
                      <h4>{p.title}</h4>
                      <p>Rs {p.price}</p>
                      <p>{p.location}</p>
                    </div>
                    <div className="btn-container">
                      <button onClick={() => {
                            updateProject(p);
                        }}>
                        Edit
                        <ai_1.AiOutlineDelete />
                      </button>
                      <button className="delete" onClick={() => {
                            deleteProject(p);
                        }}>
                        Dlete
                        <ai_1.AiOutlineDelete />
                      </button>
                    </div>
                  </div>);
                })}
          </div>
          {allProperty.length === 0 && <h3>No Properties</h3>}
        </div>)}
      {open && (<div className="modal">
          <antd_1.Modal open={open} footer={false} onCancel={() => {
                setOpen(false);
            }} width={"60%"}>
            <div className="update-project-container">
              <form action="" onSubmit={handleSubmit}>
                <h2>Agrarian Update Project</h2>
                <div className="form-text-field">
                  <input type="text" name="title" id="" onChange={handleChange} placeholder="Project title" value={updatePropertyDetails.title}/>
                  <input type="text" name="price" id="" onChange={handleChange} placeholder="Project Price" value={updatePropertyDetails.price}/>
                  <input type="text" name="location" onChange={handleChange} placeholder="Location" value={updatePropertyDetails.location}/>

                  {/* <select name="" id="">
        <option value="">Nodia</option>
      </select> */}
                </div>
                <div className="form-text-field">
                  <textarea name="desc" rows={10} placeholder="project description" value={updatePropertyDetails.desc} onChange={handleChange}/>
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
                  <input type="file" name="title" id="" onChange={(e) => {
                setImages(e.target.files);
            }}/>
                </div>
                {showInput && (<div className="form-text-field">
                    <select name="subservices" id="" onChange={(e) => {
                    setUpdatePropertyDetails({
                        ...updatePropertyDetails,
                        bedrooms: e.target.value,
                    });
                }}>
                      <option value="">Bed Rooms</option>
                      {num.map((n) => {
                    return <option value={n}>{n}</option>;
                })}
                    </select>
                    <select name="=subservices" id="" onChange={(e) => {
                    setUpdatePropertyDetails({
                        ...updatePropertyDetails,
                        washrooms: e.target.value,
                    });
                }}>
                      <option value="">WASH ROOMS</option>
                      {num.map((n) => {
                    return <option value={n}>{n}</option>;
                })}
                    </select>
                    <select name="subservices" id="" onChange={(e) => {
                    setUpdatePropertyDetails({
                        ...updatePropertyDetails,
                        parking: e.target.value,
                    });
                }}>
                      <option value="">PARKING</option>
                      <option value="yes">YES</option>
                      <option value="no">NO</option>
                    </select>
                  </div>)}
                <div className="btn-container">
                  <button>Update</button>
                </div>
              </form>
            </div>
          </antd_1.Modal>
        </div>)}
    </Dashboardlayout_1.Dashboardlayout>);
};
exports.Project = Project;
