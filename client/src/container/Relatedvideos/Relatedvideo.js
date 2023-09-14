"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Relatedvideo = void 0;
const react_1 = __importDefault(require("react"));
require("./Relatedvideo.scss");
const Videocarousel_1 = require("../Carousel/Videocarousel");
const axios_1 = __importDefault(require("axios"));
const Relatedvideo = () => {
    const [allVideos, setAllVideos] = react_1.default.useState([]);
    const getVideos = async () => {
        const { data } = await axios_1.default.get("/api/property/videos");
        if (data.success) {
            setAllVideos([...data.videos]);
        }
    };
    react_1.default.useEffect(() => {
        getVideos();
    }, []);
    return (<div className="related-video">
      {allVideos.length > 0 && <h2>Some Videos</h2>}
      <Videocarousel_1.Videocarousel allVideos={allVideos}/>
    </div>);
};
exports.Relatedvideo = Relatedvideo;
