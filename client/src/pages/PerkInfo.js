import React from "react";
import Perks from "../components/Perks";


const PerksInfo = () => {
    return(
        <div className="container">
        <div className="row justify-content-center">
          <h1>Peek-A-Perk</h1>
        </div>
        <div className="row justify-content-center">
          <Perks />
        </div>
      </div>
    )
};

export default PerksInfo;