import React, { useState } from "react";
import Layout from "../../Layout/Layout";
import {
  AiOutlineInstagram,
  AiOutlineMail,
  AiOutlineTwitter,
} from "react-icons/ai";
import "./Contact.scss";
import axios from "axios";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

export const ContactPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [mailMessage, setMailMessage] = useState("");
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
    });
    if (data.success) {
      setMailMessage(data.message);
      setSpin(false);
    }
  };

  return (
    <Layout>
      <div className="contact-paralex">
        <h2>Contact us</h2>
      </div>
      <div className="contact-wrappers">
        <div className="contact-form">
          <div className="left">
            <p className="miss-call">Give a Miss Call</p>
            <a href="" className="link">
              +9111111111
            </a>
            <p className="follow">Foolow on us</p>
            <div className="social-icons">
              <AiOutlineInstagram className="icon insta" />
              <AiOutlineTwitter className="icon twiter" />
              <AiOutlineMail className="icon mail" />
              {/* <AiOutlineInstagram className="icon" /> */}
            </div>
          </div>
          <form method="post" onSubmit={handleSubmit}>
            <h3>We’d love to hear from you</h3>
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
                placeholder="enter your name"
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
                placeholder="enter your email"
                required
              />
            </div>
            <div>
              <textarea
                rows={6}
                placeholder="message"
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
      <div className="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224357.50123665962!2d77.23701437997667!3d28.522102351088325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5a43173357b%3A0x37ffce30c87cc03f!2sNoida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1694080128722!5m2!1sen!2sin"
          width="100%"
          height="350"
          //   allowfullscreen=""
          loading="lazy"
          //   referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </Layout>
  );
};
