import { Spin } from "antd";
import "./Contact.scss";
import { LoadingOutlined } from "@ant-design/icons";
import React from "react";
import axios from "axios";

export const Contact = () => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [interest, setInterest] = React.useState("");
  const [mailMessage, setMailMessage] = React.useState("");
  const [spin, setSpin] = React.useState(false);
  const antIcon = (
    <LoadingOutlined style={{ fontSize: 24, color: "black" }} spin />
  );
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setSpin(true);
    const { data } = await axios.post("/api/auth/sendemail", {
      name,
      email,
      message,
      interest,
    });
    if (data.success) {
      setMailMessage(data.message);
      setSpin(false);
    }
  };

  return (
    <div className="contact-wrapper">
      <div className="form-container">
        <div className="left">
          <h2>We help you buy or sell your property quickly</h2>
        </div>
        <div className="right">
          <form action="" onSubmit={handleSubmit}>
            <h2>Get In Touch</h2>
            <p>
              Fill out this form and one of our agents will be in touch with you
              in latest 1 hour from your inquiry.
            </p>
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
            <div>
              <input
                type="text"
                name="name"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                placeholder="Enter Your Name"
                required
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                placeholder="Enter Your Email"
                required
              />
            </div>
            <div>
              <select
                name=""
                id=""
                onChange={(e) => {
                  setInterest(e.target.value);
                }}
              >
                <option value="">Interest</option>
                <option value="residential">Residential</option>
                <option value="commercial">Commercial</option>
              </select>
            </div>
            <div>
              <textarea
                rows={6}
                placeholder="Message"
                required
                value={message}
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
              />
            </div>
            <div>
              <button>Submit {spin && <Spin indicator={antIcon} />}</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
