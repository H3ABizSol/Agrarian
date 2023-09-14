"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Slider = void 0;
require("./Slider.scss");
const react_multi_carousel_1 = __importDefault(require("react-multi-carousel"));
require("react-multi-carousel/lib/styles.css");
const ai_1 = require("react-icons/ai");
const react_1 = require("react");
const Slider = ({ Image }) => {
    const [scrollVal, setScrollVal] = (0, react_1.useState)(false);
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 1,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    };
    const scrollBar = () => {
        if (window.scrollY > 250) {
            setScrollVal(true);
        }
        else {
            setScrollVal(false);
        }
    };
    (0, react_1.useEffect)(() => {
        window.document.addEventListener("scroll", scrollBar);
        // return window.document.removeEventListener("scroll", scrollBar);
    }, []);
    return (<>
      <div className="slider-wrapper">
        <react_multi_carousel_1.default responsive={responsive} swipeable={true} draggable={true} autoPlay={true} autoPlaySpeed={6000} infinite={true} className="cara-style">
          {Image.map((img) => {
            return (<figure>
                <img src={img} alt=""/>
              </figure>);
        })}
        </react_multi_carousel_1.default>
        <div className="search-wrapper-container">
          <div className={scrollVal ? "search-wrapper fix-scroll" : "search-wrapper"}>
            <input type="search" name="" id="" placeholder="Search"/>
            <div className="icon">
              <ai_1.AiOutlineSearch size={30} color="#ff55a4d3"/>
            </div>
          </div>
        </div>
      </div>
    </>);
};
exports.Slider = Slider;
