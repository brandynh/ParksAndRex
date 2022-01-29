import React from "react";
import Package from "../components/Package";


const Shop = () => {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <h1>Choose One Of Our Exclusive Tour Packages</h1>
      </div>
      <div className="row justify-content-center">
        <Package />
      </div>
    </div>
  );
};

export default Shop;
