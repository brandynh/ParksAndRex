import React from 'react';
import helpImg from '../assets/images/jurassic-foundation.png';
import ipsumImg from '../assets/images/dino-ipsum.png';

const Linkbar = () => {
  return (

   <div id="linkBox" className="container  d-flex justify-content-center mx-auto p-2">
      <img className="footerImg" id="helpImg" alt="How can you help support dinosaur research? Click here!" src={helpImg} onClick={() => {window.location = "https://www.jurassicfoundation.org/"}} />
      <img className="footerImg" id="ipsumImg" alt="Do you like dinosaurs?! Click here!" src={ipsumImg} onClick={() => {window.location = "https://dinoipsum.com/"}} />
   </div>
   
   );
};

export default Linkbar;
