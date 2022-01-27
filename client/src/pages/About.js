import React from "react";
import {Link} from "react-router-dom"
import Slideshow from "../components/Slideshow"

const About = () => {
  return (
      <div className="container about-container">
        <div align="center" className="slideshow">
                      <Slideshow className="slideshow"/ >
                      </div>

        <div className="row justify-content-md-center align-center">
          <div className="mbr-white col-md-10">
            <h1 className="mbr-section-subtitle pb-3 display-4" align="center">
              ABOUT PARKS AND REX
            </h1>
            <p align="center">

              Have you ever wondered what it would be like to go back to a time where the trivialities of modern life were nonexistent? We all try to escape the mundane day-to-day through beach vacations and new experiences, but as the world has grown, truly unique experiences have all but disappeared. Five brave men have made it their life's mission to transport you not only to a unique place, but also to a time we have only seen through the remanants of fossils and stones. Parks and Rex is the culmination of decades of genetic manipulation to bring the wonders of the Mesozoic Era to our time. You heard that right: Dinosaurs! We five Dino Boiz have curated the premier safari experience with creatures once lost to time, and it is our pleasure to bring this experience to you! But be warned! Once you step back in time with us here at Parks and Rex, you might never want (or be able) to return home!

            </p>
            <div align="center">
            <Link to="/shop">
            <button>Book Your Visit Now</button>
          </Link>
            </div>
          </div>
        </div>
      </div>
  );
};

export default About;
