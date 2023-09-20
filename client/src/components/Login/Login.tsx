import React from "react";
import axios from "axios";

import "react-toastify/dist/ReactToastify.css";
import "./Login.scss";
import { Link, useNavigate } from "react-router-dom";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

export const Login = () => {
  const [email, setEmail] = React.useState("");
  const [error, setError] = React.useState("");
  const [spin, setSpin] = React.useState(false);
  const antIcon = (
    <LoadingOutlined style={{ fontSize: 24, color: "beige" }} spin />
  );

  const [password, setPassword] = React.useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: any) => {
    setSpin(true);
    e.preventDefault();
    const formData = {
      email,
      password,
    };
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.post("/api/auth/login", formData, config);
    console.log(data);
    if (data.success) {
      setSpin(false);
      localStorage.setItem("admin_token", data.token);
      navigate("/admin");
    } else {
      setError(data.message);
      setSpin(false);
    }
  };

  return (
    <div className="login-form-container">
      <div className="login-wrapper">
        <div className="left">
          <h2>Welcomet to Agrairn</h2>
          <p>Best Real Estate </p>
        </div>
        <div className="right">
          <form action="" onSubmit={handleSubmit}>
            <h2>Sign in</h2>
            {error && (
              <p
                style={{
                  textAlign: "center",
                  color: "red",
                  fontSize: "1.3rem",
                }}
              >
                {error}
              </p>
            )}
            <div>
              <input
                type="text"
                name="email"
                placeholder="enter your email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <div>
              <input
                type="password"
                name="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                placeholder="enter your password"
              />
            </div>
            <div className="forgot-password">
              <Link to="/" className="forgot">
                forgot password
              </Link>
            </div>
            <div>
              <button>
                Login {spin && <Spin size="default" indicator={antIcon} />}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
