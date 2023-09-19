import React from "react";
import axios from "axios";

import "./Login.scss";
import { Link, useNavigate } from "react-router-dom";
export const Login = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: any) => {
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
      localStorage.setItem("admin_token", data.token);
      navigate("/admin");
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
              <button>Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
