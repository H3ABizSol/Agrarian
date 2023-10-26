import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Videocarousel.scss";

export const Videocarousel = ({ allVideos }: any) => {
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
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <>
      <Carousel
        responsive={responsive}
        className="carasouel"
        showDots={true}
        arrows={false}
        autoPlay={true}
        infinite={true}
        autoPlaySpeed={3000}
      >
        {allVideos &&
          allVideos.map((v: any) => {
            return (
              <div className="video-slide">
                <video controls autoPlay={true} muted>
                  <source src={`/uploads/${v.video}`}></source>
                </video>
              </div>
            );
          })}
      </Carousel>
    </>
  );
};
