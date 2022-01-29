import React from 'react';
import ipsumImg from '../assets/images/dino-ipsum.png';
import helpImg from '../assets/images/jurassic-foundation.png'

const Linkbar = () => {
  return (
      <>
      <div id="linkBox" className="container d-flex justify-content-center mx-auto p-2">
              <img className="linkbarImg" id="helpImg" alt="How can you help support dinosaur research? Click here!" src={helpImg} onClick={() => {window.location = "https://www.jurassicfoundation.org/"}} />
              <img className="linkbarImg" id="ipsumImg" alt="Check out this cool dinosaur API!" src={ipsumImg} onClick={() => {window.location = "https://dinoipsum.com/"}} />
      </div>
      </>
  )
};

export default Linkbar;
