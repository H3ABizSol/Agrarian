"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Videocarousel = void 0;
const react_multi_carousel_1 = __importDefault(require("react-multi-carousel"));
require("react-multi-carousel/lib/styles.css");
require("./Videocarousel.scss");
const Videocarousel = ({ allVideos }) => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    };
    return (<>
      <react_multi_carousel_1.default responsive={responsive} className="carasouel" showDots={true} autoPlay={true}>
        {allVideos &&
            allVideos.map((v) => {
                return (<div className="video-slide">
                <video controls autoPlay={true} muted>
                  <source src={`http://localhost:4000/uploads/${v.video}`}></source>
                </video>
              </div>);
            })}
      </react_multi_carousel_1.default>
    </>);
};
exports.Videocarousel = Videocarousel;
