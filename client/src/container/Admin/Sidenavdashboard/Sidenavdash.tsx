import "./sidenavdashboard.scss";
import {
  AiOutlineFundProjectionScreen,
  // AiOutlineHome,
  AiOutlineVideoCamera,
} from "react-icons/ai";
import { MdOutlineCreate, MdCropPortrait } from "react-icons/md";
import { Link } from "react-router-dom";

export const Sidenavdash = () => {
  return (
    <div className="side-nav">
      <ul>
        {/* <Link to="/admin" className="link">
          <li>
            <AiOutlineHome />
            Dashboard
          </li>
        </Link> */}
        <Link to="/admin/projects" className="link">
          <li>
            <AiOutlineFundProjectionScreen />
            Projects
          </li>
        </Link>

        <Link to="/admin/video" className="link">
          <li>
            <AiOutlineVideoCamera />
            videos
          </li>
        </Link>

        <Link to="/admin/careers" className="link">
          <li>
            <MdCropPortrait />
            Careers
          </li>
        </Link>
        <Link to="/admin/create" className="link">
          <li>
            <MdOutlineCreate />
            Create Projects
          </li>
        </Link>
      </ul>
    </div>
  );
};
