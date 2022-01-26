import React from "react";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import SlideImg1 from "../assets/images/slide-dinos-1.jpeg"
import SlideImg2 from "../assets/images/slide-dinos-2.jpg"
import SlideImg3 from "../assets/images/slide-dinos-3.jpg"
import SlideImg4 from "../assets/images/slide-dinos-4.jpeg"
import SlideImg5 from "../assets/images/slide-dinos-5.jpeg"


export default function Slideshow() {
  return (
    <div className="slide-container">
      <Fade>
        <div className="each-fade">
          <img src={SlideImg1} />
        </div>
        <div className="each-fade">
          <img src={SlideImg2} />
        </div>
        <div className="each-fade">
          <img src={SlideImg3} />
        </div>
        <div className="each-fade">
          <img src={SlideImg4} />
        </div>
        <div className="each-fade">
          <img src={SlideImg5} />
        </div>
      </Fade>
    </div>
  );
}
