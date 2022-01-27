import React from "react";
import Package from "../components/Package";
import dinoTestImg from "../assets/images/dino-desktop-2.jpeg";
import dinoPark from "../assets/images/dino-desktop.jpeg";
import dinoPark2 from "../assets/images/dinosaur-desktop.jpg";

const Shop = () => {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <h1>Choose One Of Our Exclusive Tour Packages</h1>
      </div>
      {/* Feature basic tours/packages/tickets for purchase. Use Package component for each item. Start with 3, add more
    —and possibly other pages for gift shop, etc.—as we progress. */}
      <div className="row justify-content-center">
        <Package
          title="DINO PACK 1"
          imgLink={dinoTestImg}
          description="this package freaking rules man let me tell you all about it here dino ipsum bla bla bla "
          cost="$55,000"
        />

        <Package
          title="DINO PACK 2"
          imgLink={dinoPark}
          description="this package freaking rules man let me tell you all about it here dino ipsum bla bla bla "
          cost="$1 million"
        />

        <Package
          title="DINO PACK 3"
          imgLink={dinoPark2}
          description="this package freaking rules man let me tell you all about it here dino ipsum bla bla bla "
          cost="$350,000"
        />
      </div>
    </div>
  );
};

export default Shop;
