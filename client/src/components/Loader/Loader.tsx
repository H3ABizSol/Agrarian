import logo from "../../assets/agrarianlogo.jpeg";
import "./Loader.scss";

export const Loader = () => {
  return (
    <div className="loader-container">
      <div className="loader-img">
        <img src={logo} alt="" />
        <h3>Loading....</h3>
      </div>
    </div>
  );
};
