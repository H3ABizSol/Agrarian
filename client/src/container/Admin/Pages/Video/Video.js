"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Video = void 0;
const react_1 = require("react");
const Dashboardlayout_1 = require("../../Dashboardlayout/Dashboardlayout");
const axios_1 = __importDefault(require("axios"));
require("./Video.scss");
const Loader_1 = require("../../../../components/Loader/Loader");
const Video = () => {
    const [video, setVideo] = (0, react_1.useState)([]);
    const [allVideos, setAllVideos] = (0, react_1.useState)([]);
    const [ok, setOk] = (0, react_1.useState)(false);
    const [spin, setSpin] = (0, react_1.useState)(false);
    const handleSubmit = async (e) => {
        e.preventDefault();
        setSpin(true);
        const formData = new FormData();
        formData.append("video", video);
        const { data } = await axios_1.default.post("/api/property/uploads", formData);
        console.log(data);
        if (data.success) {
            setSpin(false);
            setOk(true);
            alert("video uploaded");
        }
    };
    const getVideos = async () => {
        setSpin(true);
        const { data } = await axios_1.default.get("/api/property/videos");
        if (data.success) {
            setAllVideos([...data.videos]);
        }
        setSpin(false);
    };
    const deleteVideo = async (v) => {
        const confirm = window.confirm("Are you sure");
        if (confirm) {
            setSpin(true);
            const { data } = await axios_1.default.delete(`/api/property/deletevideo/${v._id}`);
            console.log(data);
            if (data.success) {
                setSpin(false);
                setOk(true);
                alert("video deleted");
            }
        }
    };
    (0, react_1.useEffect)(() => {
        getVideos();
    }, []);
    if (ok) {
        return <exports.Video />;
    }
    return (<Dashboardlayout_1.Dashboardlayout>
      {spin ? (<Loader_1.Loader />) : (<div className="create-video-container">
          <form action="" onSubmit={handleSubmit}>
            <h2>Agrarian Create Project</h2>
            <div className="form-text-field">
              <input type="file" accept="video/*" onChange={(e) => {
                setVideo(e.target.files[0]);
            }}/>

              {/* <select name="" id="">
            <option value="">Nodia</option>
          </select> */}
              <div className="btn-container">
                <button>Create</button>
              </div>
            </div>
          </form>

          <div className="video-wrapper">
            {allVideos &&
                allVideos.map((v) => {
                    return (<div className="video-item">
                    <video controls>
                      <source src={`/uploads/${v.video}`}></source>
                    </video>
                    <div className="btn-container">
                      <button onClick={() => {
                            deleteVideo(v);
                        }}>
                        Delete
                      </button>
                    </div>
                  </div>);
                })}
            {allVideos.length == 0 && <h3>No Video Uploaded yet</h3>}
          </div>
        </div>)}
    </Dashboardlayout_1.Dashboardlayout>);
};
exports.Video = Video;
