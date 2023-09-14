"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Privateroute = void 0;
const axios_1 = __importDefault(require("axios"));
const react_1 = require("react");
const react_router_dom_1 = require("react-router-dom");
const Privateroute = () => {
    const [ok, setOk] = (0, react_1.useState)(false);
    const navigate = (0, react_router_dom_1.useNavigate)();
    const isAuthenticate = async () => {
        const { data } = await axios_1.default.get("http://localhost:4000/api/auth/authenticate", {
            headers: {
                token: localStorage.getItem("admin_token"),
            },
        });
        console.log(data);
        if (data.success) {
            setOk(true);
        }
        else {
            navigate("/signin");
        }
    };
    (0, react_1.useEffect)(() => {
        isAuthenticate();
    }, []);
    return ok && <react_router_dom_1.Outlet />;
};
exports.Privateroute = Privateroute;
