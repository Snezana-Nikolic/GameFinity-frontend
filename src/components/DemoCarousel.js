import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { makeStyles } from "@material-ui/core/styles";
import * as img1 from "../assets/images/img1.jpg";
import * as img2 from "../assets/images/img2.jpg";
import * as img3 from "../assets/images/img3.jpg";

const useStyles = makeStyles({
  root: {
    width: "100%",
    height: "100%",
  },
  slider: {
    backgroundColor: "#151a30",
    width: "100vw",
  },
});

export const DemoCarousel = () => {
  const classes = useStyles();

  const images = [img1, img2, img3];

  const titles = [
    "Call of Duty: Warzone",
    "Super Mario 3D World",
    "Little Nightmares II",
  ];

  return (
    <Carousel
      className={classes.slider}
      infiniteLoop
      useKeyboardArrows
      autoPlay
    >
      {images.map((image, index) => (
        <div key={index} className={classes.root}>
          <img src={image.default} alt="games" />
          <p className="legend">{titles[index]}</p>
        </div>
      ))}
    </Carousel>
  );
};
