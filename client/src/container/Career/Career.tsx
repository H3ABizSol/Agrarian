// import React from "react";
import "./Career.scss";
import Layout from "../../Layout/Layout";
// import axios from "axios";
// import { Loader } from "../../components/Loader/Loader";
// import { Modal } from "antd";

export const Career = () => {
  // const [ok, setOk] = React.useState(false);
  // const [spin, setSpin] = React.useState(false);
  // const [careers, setCareers] = React.useState([] as any);
  // const [open, setOpen] = React.useState(false);
  // const [details, setDetails] = React.useState({} as any);
  // const [resume, setResume] = React.useState("");
  // const [mailMessage, setMailMessage] = React.useState("");

  // const [formDetails, setFormDetails] = React.useState({
  //   firstname: "",
  //   lastname: "",
  //   email: "",
  //   mobile: "",
  //   housenumber: "",
  //   pincode: "",
  //   street: "",
  //   state: "",
  //   city: "",
  //   country: "",
  // });

  // const handleSubmit = async (e: any) => {
  //   e.preventDefault();
  //   const formData = new FormData();
  //   formData.append("firstname", formDetails.firstname);
  //   formData.append("lastname", formDetails.lastname);
  //   formData.append("email", formDetails.email);
  //   formData.append("mobile", formDetails.mobile);
  //   formData.append("housenumber", formDetails.housenumber);
  //   formData.append("resume", resume);
  //   await axios.post("/api/auth/applyjob", formData);
  //   setMailMessage("Apply successfully");
  // };

  // const handleChange = (e: any) => {
  //   setFormDetails({
  //     ...formDetails,
  //     [e.target.name]: e.target.value,
  //   });
  // };

  // const getCareers = async () => {
  //   setSpin(true);
  //   const { data } = await axios.get("/api/career");
  //   if (data.success) {
  //     setCareers([...data.career]);
  //   }
  //   setSpin(false);
  // };

  // React.useEffect(() => {
  //   getCareers();
  // }, []);

  return (
    <Layout>
      <div className="assistant">
        <h2>Comming Soon</h2>
      </div>
      {/* {spin ? (
        <Loader />
      ) : (
        <div className="career-wrapper">
          <div className="paralex"></div>
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
                      <p>Experience Required :- {c.experience} years</p>
                      <p>Qualification :- {c.qualification}</p>
                      <p>salary :- {c.salary}</p>
                      <p>location :- {c.location}</p>
                      <div className="btn-container">
                        <button
                          onClick={() => {
                            setOpen(true);
                            setDetails(c);
                          }}
                        >
                          Apply now
                        </button>
                      </div>
                    </div>
                  </>
                );
              })}
          </div>
          <Modal
            open={open}
            width={"80%"}
            onCancel={() => {
              setOpen(false);
            }}
            footer={false}
          >
            <div className="modal-wrapper">
              <div className="left">
                <h3>Job Details</h3>
                <h2>{details?.title}</h2>
                <p>No. Of Openings :-{details?.noofopenings}</p>
                <p>Experience Required :- {details?.experience}</p>
                <p>Qualification :- {details.qualification}</p>
                <p>Salary :- {details.salary}</p>
                <p>Location :- {details.location}</p>
              </div>
              <form action="" onSubmit={handleSubmit}>
                {mailMessage && (
                  <p
                    style={{
                      textAlign: "center",
                      fontSize: "1.6rem",
                      color: "green",
                    }}
                  >
                    {mailMessage}
                  </p>
                )}
                <div className="input-area">
                  <input
                    type="text"
                    name="firstname"
                    onChange={(e) => {
                      handleChange(e);
                    }}
                    placeholder="First Name"
                    value={formDetails.firstname}
                  />
                  <input
                    type="text"
                    name="lastname"
                    id=""
                    onChange={(e) => {
                      handleChange(e);
                    }}
                    placeholder="Last Name"
                    value={formDetails.lastname}
                  />
                </div>
                <div className="input-area">
                  <input
                    type="text"
                    name="email"
                    id=""
                    onChange={(e) => {
                      handleChange(e);
                    }}
                    placeholder="Email"
                    value={formDetails.email}
                  />
                  <input
                    type="text"
                    name="mobile"
                    id=""
                    onChange={(e) => {
                      handleChange(e);
                    }}
                    placeholder="Mobile Number"
                    value={formDetails.mobile}
                  />
                </div>
                <div className="input-area">
                  <input
                    type="text"
                    name="housenumber"
                    id=""
                    onChange={(e) => {
                      handleChange(e);
                    }}
                    placeholder="House Number"
                    value={formDetails.housenumber}
                  />
                  <input
                    type="text"
                    name="pincode"
                    id=""
                    onChange={(e) => {
                      handleChange(e);
                    }}
                    placeholder="Pin Code"
                    value={formDetails.pincode}
                  />
                </div>
                <div className="input-area">
                  <input
                    type="text"
                    name="street"
                    id=""
                    onChange={(e) => {
                      handleChange(e);
                    }}
                    placeholder="Street"
                    value={formDetails.street}
                  />
                  <input
                    type="text"
                    name="state"
                    id=""
                    onChange={(e) => {
                      handleChange(e);
                    }}
                    placeholder="State"
                    value={formDetails.state}
                  />
                </div>
                <div className="input-area">
                  <input
                    type="text"
                    name="city"
                    id=""
                    onChange={(e) => {
                      handleChange(e);
                    }}
                    placeholder="City"
                    value={formDetails.city}
                  />
                  <input
                    type="text"
                    name="country"
                    id=""
                    onChange={(e) => {
                      handleChange(e);
                    }}
                    placeholder="Country"
                  />
                </div>
                <div className="input-area">
                  <input
                    type="file"
                    onChange={(e: any) => {
                      setResume(e.target.files[0]);
                    }}
                  />
                  <button>Submit</button>
                </div>
              </form>
            </div>
          </Modal>
        </div>
      )} */}
    </Layout>
  );
};
