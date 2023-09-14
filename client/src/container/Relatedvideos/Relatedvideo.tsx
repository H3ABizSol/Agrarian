import React from "react";
import "./Relatedvideo.scss";
import { Videocarousel } from "../Carousel/Videocarousel";
import axios from "axios";

export const Relatedvideo = () => {
  const [allVideos, setAllVideos] = React.useState([] as any);

  const getVideos = async () => {
    const { data } = await axios.get(
      "http://localhost:4000/api/property/videos"
    );
    if (data.success) {
      setAllVideos([...data.videos]);
    }
  };

  React.useEffect(() => {
    getVideos();
  }, []);
  return (
    <div className="related-video">
      {allVideos.length > 0 && <h2>Some Videos</h2>}
      <Videocarousel allVideos={allVideos} />
    </div>
  );
};
