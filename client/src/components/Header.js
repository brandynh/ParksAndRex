/* eslint-disable jsx-a11y/heading-has-content */
import React, { useState } from "react";
import { Navbar, } from "react-bootstrap";
import { GiDinosaurBones } from 'react-icons/gi'
import Links from './Links'
import dinosaurImg from "../assets/images/Dinologo1.png";
import audio from '../assets/audio/Dino-sounds.mp3'
import '../Header.css';



const Header = () => {
   const [toggle, setToggle] = useState('hide')
   const roar = new Audio(audio);

   return (
      <> 
      <div className="flex row justify-content-center">
         <h3 id="top-line" className="rule"></h3>
      </div>
         <Navbar expand="false" className="navbar justify-content-center">
                 <i className="skelly" id="left-skelly">{<GiDinosaurBones size="32px"/>}</i>
                    <h3 id="rule-left" className="rule"></h3>
                 <i className="skelly" id="far-left-skelly">{<GiDinosaurBones size="32px"/>}</i>
           <button aria-controls="" className="logo" id="glowBox">
             <Navbar.Brand onClick={() => {
                  setToggle('show')
                  roar.play()
                }}>
               <img id="mainImg" src={dinosaurImg} alt="dinosaurs" />
             </Navbar.Brand>
           </button>
           <i className="skelly" id="far-right-skelly">{<GiDinosaurBones size="32px"/>}</i>
                    <h3 id="rule-right" className="rule"></h3>
           <i className="skelly" id="right-skelly">{<GiDinosaurBones size="32px"/>}</i>
         </Navbar>

         <Links className={toggle} />
    </>
  );
};

export default Header;
