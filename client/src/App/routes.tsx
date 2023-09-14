import { Routes, Route } from "react-router-dom";
import Home from "../container/Home/Home";
import { Privateroute } from "../container/Admin/Private/Privateroute";
import { Servicedetial } from "../container/Servicedetails/Servicedetial";
import { Ourproject } from "../container/Ourprojects/Ourproject";
import { ContactPage } from "../container/Contact/Contact";
import { About } from "../container/About/About";
import { Login } from "../components/Login/Login";
import { Dashboard } from "../container/Admin/Pages/Dashboard/Dashboard";
import { Createproject } from "../container/Admin/Pages/Project/createproject";
import { Video } from "../container/Admin/Pages/Video/Video";
import { Project } from "../container/Admin/Pages/Projects/Project";
import { Projectdetail } from "../container/Projectdetails/Projectdetail";

ContactPage;
const routes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signin" element={<Login />} />
      <Route path="/project" element={<Ourproject />} />
      <Route path="/projectdetails/:id" element={<Projectdetail />} />
      <Route path="/service/:name" element={<Servicedetial />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/about" element={<About />} />
      <Route path="/admin" element={<Privateroute />}>
        <Route path="" element={<Dashboard />} />
        <Route path="create" element={<Createproject />} />
        <Route path="video" element={<Video />} />
        <Route path="projects" element={<Project />} />
      </Route>
      {/* <Route path="/login" element={<h2>Login Page</h2>} /> */}
    </Routes>
  );
};

export default routes;
