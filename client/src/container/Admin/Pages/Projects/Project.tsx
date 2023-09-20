import React, { useState } from "react";
import { Dashboardlayout } from "../../Dashboardlayout/Dashboardlayout";
import "./Project.scss";
import axios from "axios";
import { AiOutlineDelete } from "react-icons/ai";
import { Loader } from "../../../../components/Loader/Loader";
import { Modal } from "antd";
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

export const Project = () => {
  const [updatePropertyDetails, setUpdatePropertyDetails] = useState({
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

  const [allProperty, setAllProperty] = React.useState([] as any);
  const [open, setOpen] = useState(false);
  const [image, setImages] = useState([]);
  const [subService, setSubService] = useState([] as any);
  const [showInput, setShowInput] = useState(false);
  const [ok, setOk] = useState(false);
  const [spin, setSpin] = useState(false);
  const [updateId, setUpdateId] = useState();

  const handleChange = (e: any) => {
    setUpdatePropertyDetails({
      ...updatePropertyDetails,
      [e.target.name]: e.target.value,
    });
  };

  const chagneService = (e: any) => {
    setUpdatePropertyDetails({
      ...updatePropertyDetails,
      service: e.target.value,
    });
    const filter = ourservices.filter((s) => {
      return s.name.toLocaleLowerCase() === e.target.value.toLowerCase();
    });
    setSubService([...filter[0].subservie]);
  };

  const changeSubService = (e: any) => {
    setUpdatePropertyDetails({
      ...updatePropertyDetails,
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

    const { data } = await axios.put(
      `/api/property/update/${updateId}`,
      formData,
      {
        headers: {
          token: localStorage.getItem("admin_token"),
        },
      }
    );
    console.log(data);
    if (data.success) {
      setSpin(false);
      setOk(true);
      alert("project cerated");
    }
  };

  const getProjects = async () => {
    setSpin(true);
    const { data } = await axios.get("/api/property/all");
    if (data.success) {
      setAllProperty([...data.allProperty]);
      setSpin(false);
    }
  };

  const updateProject = (p: any) => {
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

  const deleteProject = async (p: any) => {
    const confirm = window.confirm("Are you sure");
    if (confirm) {
      setSpin(true);
      const { data } = await axios.delete(`/api/property/delete/${p._id}`, {
        headers: {
          token: localStorage.getItem("admin_token"),
        },
      });
      console.log(data);
      if (data.success) {
        setSpin(false);
        toast("👌 delete successfully!", {
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

  React.useEffect(() => {
    getProjects();
  }, []);
  if (ok) {
    return <Project />;
  }
  return (
    <Dashboardlayout>
      {spin ? (
        <Loader />
      ) : (
        <div className="admin-project-wrapper">
          <h2>Projects</h2>
          <div className="project-item">
            {allProperty &&
              allProperty.map((p: any) => {
                return (
                  <div>
                    <div className="items">
                      <figure>
                        <img src={`/uploads/${p.img[0]}`} alt="" />
                      </figure>
                      <h4>{p.title}</h4>
                      <p>Rs {p.price}</p>
                      <p>{p.location}</p>
                    </div>
                    <div className="btn-container">
                      <button
                        onClick={() => {
                          updateProject(p);
                        }}
                      >
                        Edit
                        <AiOutlineDelete />
                      </button>
                      <button
                        className="delete"
                        onClick={() => {
                          deleteProject(p);
                        }}
                      >
                        Dlete
                        <AiOutlineDelete />
                      </button>
                    </div>
                  </div>
                );
              })}
          </div>
          {allProperty.length === 0 && <h3>No Properties</h3>}
        </div>
      )}
      {open && (
        <div className="modal">
          <Modal
            open={open}
            footer={false}
            onCancel={() => {
              setOpen(false);
            }}
            width={"80%"}
          >
            <div className="update-project-container">
              <form action="" onSubmit={handleSubmit}>
                <h2>Agrarian Update Project</h2>
                <div className="form-text-field">
                  <input
                    type="text"
                    name="title"
                    id=""
                    onChange={handleChange}
                    placeholder="Project title"
                    value={updatePropertyDetails.title}
                  />
                  <input
                    type="text"
                    name="price"
                    id=""
                    onChange={handleChange}
                    placeholder="Project Price"
                    value={updatePropertyDetails.price}
                  />
                  <input
                    type="text"
                    name="location"
                    onChange={handleChange}
                    placeholder="Location"
                    value={updatePropertyDetails.location}
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
                    value={updatePropertyDetails.desc}
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
                  <input
                    type="file"
                    name="title"
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
                        setUpdatePropertyDetails({
                          ...updatePropertyDetails,
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
                        setUpdatePropertyDetails({
                          ...updatePropertyDetails,
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
                        setUpdatePropertyDetails({
                          ...updatePropertyDetails,
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
                  <button>Update</button>
                </div>
              </form>
            </div>
          </Modal>
        </div>
      )}
      <ToastContainer />
    </Dashboardlayout>
  );
};
