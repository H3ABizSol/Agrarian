import { useState, useEffect } from "react";
import { Dashboardlayout } from "../../Dashboardlayout/Dashboardlayout";
import axios from "axios";
import "./Video.scss";
import { Loader } from "../../../../components/Loader/Loader";

export const Video = () => {
  const [video, setVideo] = useState([] as any);
  const [allVideos, setAllVideos] = useState([] as any);
  const [ok, setOk] = useState(false);
  const [spin, setSpin] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setSpin(true);
    const formData = new FormData();
    formData.append("video", video);
    const { data } = await axios.post("/api/property/uploads", formData);
    console.log(data);
    if (data.success) {
      setSpin(false);
      setOk(true);
      alert("video uploaded");
    }
  };

  const getVideos = async () => {
    setSpin(true);
    const { data } = await axios.get("/api/property/videos");
    if (data.success) {
      setAllVideos([...data.videos]);
    }
    setSpin(false);
  };

  const deleteVideo = async (v: any) => {
    const confirm = window.confirm("Are you sure");
    if (confirm) {
      setSpin(true);
      const { data } = await axios.delete(`/api/property/deletevideo/${v._id}`);
      console.log(data);
      if (data.success) {
        setSpin(false);
        setOk(true);
        alert("video deleted");
      }
    }
  };

  useEffect(() => {
    getVideos();
  }, []);
  if (ok) {
    return <Video />;
  }
  return (
    <Dashboardlayout>
      {spin ? (
        <Loader />
      ) : (
        <div className="create-video-container">
          <form action="" onSubmit={handleSubmit}>
            <h2>Agrarian Create Project</h2>
            <div className="form-text-field">
              <input
                type="file"
                accept="video/*"
                onChange={(e: any) => {
                  setVideo(e.target.files[0]);
                }}
              />

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
              allVideos.map((v: any) => {
                return (
                  <div className="video-item">
                    <video controls>
                      <source src={`/uploads/${v.video}`}></source>
                    </video>
                    <div className="btn-container">
                      <button
                        onClick={() => {
                          deleteVideo(v);
                        }}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                );
              })}
            {allVideos.length == 0 && <h3>No Video Uploaded yet</h3>}
          </div>
        </div>
      )}
    </Dashboardlayout>
  );
};
