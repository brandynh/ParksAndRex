import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="jumbotron pt-5 ">
         <div className="container">
            <h1>Life, Uh... <br /> Finds a Way</h1>
            <p>
              Welcome to the world's <em>premier</em> <br />
              dinosaur adventure safari theme park.
            </p>
            <div className="row">
              <Link to="/about">
                <button className="homeBtn">Learn More</button>
              </Link>
              <Link to="/shop">
                <button className="homeBtn">Book Your Visit Now</button>
              </Link>
            </div>
         </div>
    </div>
  );
};

export default Home;
