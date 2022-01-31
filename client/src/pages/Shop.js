import React from "react";
import Package from "../components/Package";


const Shop = () => {
  return (
    <div id="shop-container">
      <div className="row justify-content-center">
        <h1 id="shop-header">Choose One Of Our Exclusive Tour Packages</h1>
      </div>
      <div id="pack-wrapper" className="row justify-content-center">
        <Package />
      </div>
    </div>
  );
};

export default Shop;
