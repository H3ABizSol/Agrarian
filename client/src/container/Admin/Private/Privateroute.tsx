import axios from "axios";
import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

export const Privateroute = (): any => {
  const [ok, setOk] = useState(false);
  const navigate = useNavigate();
  const isAuthenticate = async () => {
    const { data } = await axios.get(
      "/api/auth/authenticate",

      {
        headers: {
          token: localStorage.getItem("admin_token"),
        },
      }
    );
    console.log(data);
    if (data.success) {
      setOk(true);
    } else {
      navigate("/signin");
    }
  };

  useEffect(() => {
    isAuthenticate();
  }, []);
  return ok && <Outlet />;
};
