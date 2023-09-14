import "./sidenavdashboard.scss";
import { AiOutlineFundProjectionScreen, AiOutlineHome } from "react-icons/ai";
import { MdOutlineCreate } from "react-icons/md";
import { Link } from "react-router-dom";

export const Sidenavdash = () => {
  return (
    <div className="side-nav">
      <ul>
        <Link to="/admin" className="link">
          <li>
            <AiOutlineHome />
            Dashboard
          </li>
        </Link>
        <Link to="/admin/projects" className="link">
          <li>
            <AiOutlineFundProjectionScreen />
            Projects
          </li>
        </Link>

        <Link to="/admin/video" className="link">
          <li>
            <MdOutlineCreate />
            videos
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
