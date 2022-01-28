import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="jumbotron pt-3">
            <h1>Life, Uh, Finds a Way</h1>
            <p>
              Welcome to the world's premier dinosaur adventure safari theme park.
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
  );
};

export default Home;
