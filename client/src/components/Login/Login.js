"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Login = void 0;
const react_1 = __importDefault(require("react"));
const axios_1 = __importDefault(require("axios"));
require("./Login.scss");
const react_router_dom_1 = require("react-router-dom");
const Login = () => {
    const [email, setEmail] = react_1.default.useState("");
    const [password, setPassword] = react_1.default.useState("");
    const navigate = (0, react_router_dom_1.useNavigate)();
    const handleSubmit = async (e) => {
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
        const { data } = await axios_1.default.post("http://localhost:4000/api/auth/login", formData, config);
        console.log(data);
        if (data.success) {
            localStorage.setItem("admin_token", data.token);
            navigate("/admin");
        }
    };
    return (<div className="login-form-container">
      <div className="login-wrapper">
        <div className="left">
          <h2>Welcomet to Agrairn</h2>
          <p>Best Real Estate </p>
        </div>
        <div className="right">
          <form action="" onSubmit={handleSubmit}>
            <h2>Sign in</h2>
            <div>
              <input type="text" name="email" placeholder="enter your email" value={email} onChange={(e) => {
            setEmail(e.target.value);
        }}/>
            </div>
            <div>
              <input type="password" name="password" value={password} onChange={(e) => {
            setPassword(e.target.value);
        }} placeholder="enter your password"/>
            </div>
            <div className="forgot-password">
              <react_router_dom_1.Link to="/" className="forgot">
                forgot password
              </react_router_dom_1.Link>
            </div>
            <div>
              <button>Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>);
};
exports.Login = Login;
