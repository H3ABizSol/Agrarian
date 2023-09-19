import React from "react";
import "./Career.scss";
import { Dashboardlayout } from "../../Dashboardlayout/Dashboardlayout";
import axios from "axios";
import { Loader } from "../../../../components/Loader/Loader";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { Modal } from "antd";

export const Admincareer = () => {
  const [ok, setOk] = React.useState(false);
  const [spin, setSpin] = React.useState(false);
  const [title, setTitle] = React.useState("");
  const [sector, setSector] = React.useState("");
  const [minage, setMinage] = React.useState("");
  const [noofopenings, setNoofopening] = React.useState("");
  const [experience, setExperience] = React.useState("");
  const [careers, setCareers] = React.useState([] as any);
  const [open, setOpen] = React.useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSpin(true);
    const { data } = await axios.post(
      "/api/career/create",
      {
        title,
        sector,
        minage,
        noofopenings,
        experience,
      },
      {
        headers: {
          token: localStorage.getItem("admin_token"),
        },
      }
    );
    if (data.success) {
      setSpin(false);
      setOk(true);
    }
  };

  const handleUpdateSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSpin(true);
    const { data } = await axios.post(
      "/api/career/create",
      {
        title,
        sector,
        minage,
        noofopenings,
        experience,
      },
      {
        headers: {
          token: localStorage.getItem("admin_token"),
        },
      }
    );
    if (data.success) {
      setSpin(false);
      setOk(true);
    }
  };

  const getCareers = async () => {
    setSpin(true);
    const { data } = await axios.get("/api/career");
    if (data.success) {
      setCareers([...data.career]);
    }
    setSpin(false);
  };

  const deleteCareers = async (c: any) => {
    const confirm = window.confirm("are you sure");
    if (confirm) {
      setSpin(true);
      const { data } = await axios.delete(`/api/career/delete/${c._id}`, {
        headers: {
          token: localStorage.getItem("admin_token"),
        },
      });
      console.log(data);
      if (data.success) {
        setSpin(false);
        setOk(true);
        alert("delete");
      }
    }
  };

  const updateCareers = async (c: any) => {
    setTitle(c.title);
    setMinage(c.minage);
    setNoofopening(c.noofopenings);
    setExperience(c.experience);
    setSector(c.sector);
  };

  React.useEffect(() => {
    getCareers();
  }, []);

  if (ok) {
    return <Admincareer />;
  }

  return (
    <Dashboardlayout>
      {spin ? (
        <Loader />
      ) : (
        <>
          <div className="create-career-container">
            <form action="" onSubmit={handleSubmit}>
              <h2>Agrarian Create Project</h2>
              <div className="form-text-field">
                <input
                  type="text"
                  name="title"
                  onChange={(e) => {
                    setTitle(e.target.value);
                  }}
                  value={title}
                  placeholder=" title"
                />
                <input
                  type="text"
                  name="sector"
                  id=""
                  onChange={(e) => {
                    setSector(e.target.value);
                  }}
                  value={sector}
                  placeholder="sector"
                  //   value={propertyDetails.price}
                />
                <input
                  type="text"
                  name="minage"
                  onChange={(e) => {
                    setMinage(e.target.value);
                  }}
                  value={minage}
                  placeholder="min age"
                  //   value={propertyDetails.location}
                />

                {/* <select name="" id="">
              <option value="">Nodia</option>
            </select> */}
              </div>
              <div className="form-text-field">
                <input
                  name="noofopening"
                  type="text"
                  placeholder="no of openings"
                  onChange={(e) => {
                    setNoofopening(e.target.value);
                  }}
                  value={noofopenings}
                />
                <input
                  type="text"
                  name="title"
                  placeholder="experience required"
                  id=""
                  onChange={(e) => {
                    setExperience(e.target.value);
                  }}
                  value={experience}
                />
              </div>
              <div className="btn-container">
                <button>Create</button>
              </div>
            </form>
            <div className="career-wrapper">
              <div className="careers-container">
                {careers &&
                  careers.map((c: any) => {
                    return (
                      <>
                        <div className="items">
                          <h2>{c.title}</h2>
                          <p>sector :-{c.sector}</p>
                          <p>Minium-age :-{c.minage}</p>
                          <p>No. Of Openings :-{c.noofopenings}</p>
                          <p>Experience Required :- {c.experience}</p>
                          <div className="btn-container">
                            <button
                              onClick={() => {
                                deleteCareers(c);
                              }}
                            >
                              {" "}
                              <AiOutlineDelete /> Delete
                            </button>
                            <button
                              onClick={() => {
                                setOpen(true);
                                updateCareers(c);
                              }}
                            >
                              <AiOutlineEdit /> Edit
                            </button>
                          </div>
                        </div>
                      </>
                    );
                  })}
              </div>
            </div>
          </div>
          <Modal
            open={open}
            footer={false}
            onCancel={() => {
              setOpen(false);
              setMinage("");
              setTitle("");
              setSector("");
              setNoofopening("");
              setExperience("");
            }}
            width={"60%"}
          >
            <div className="create-career-container">
              <form action="" onSubmit={handleUpdateSubmit}>
                <h2>Agrarian Update Project</h2>
                <div className="form-text-field">
                  <input
                    type="text"
                    name="title"
                    onChange={(e) => {
                      setTitle(e.target.value);
                    }}
                    value={title}
                    placeholder=" title"
                  />
                  <input
                    type="text"
                    name="sector"
                    id=""
                    onChange={(e) => {
                      setSector(e.target.value);
                    }}
                    value={sector}
                    placeholder="sector"
                    //   value={propertyDetails.price}
                  />
                  <input
                    type="text"
                    name="minage"
                    onChange={(e) => {
                      setMinage(e.target.value);
                    }}
                    value={minage}
                    placeholder="min age"
                    //   value={propertyDetails.location}
                  />

                  {/* <select name="" id="">
              <option value="">Nodia</option>
            </select> */}
                </div>
                <div className="form-text-field">
                  <input
                    name="noofopening"
                    type="text"
                    placeholder="no of openings"
                    onChange={(e) => {
                      setNoofopening(e.target.value);
                    }}
                    value={noofopenings}
                  />
                  <input
                    type="text"
                    name="title"
                    placeholder="experience required"
                    id=""
                    onChange={(e) => {
                      setExperience(e.target.value);
                    }}
                    value={experience}
                  />
                </div>
                <div className="btn-container">
                  <button>Update</button>
                </div>
              </form>
            </div>
          </Modal>
        </>
      )}
    </Dashboardlayout>
  );
};
