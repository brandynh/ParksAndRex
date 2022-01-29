import React from "react";
import { Nav, Navbar, } from "react-bootstrap";
import dinosaurImg from "../assets/images/Dinologo1.png";
import { GiDinosaurBones } from 'react-icons/gi'
import Auth from "../utils/auth";
import audio from '../assets/audio/Dino-sounds.mp3'
import '../Header.css';



const Header = () => {

   const roar = new Audio(audio);

   return (
      <> 
      <div className="flex row justify-content-center">
         <h3 id="top-line" className="rule"></h3>
      </div>
         <Navbar expand="false" className="navbar justify-content-center">
                 <i className="skelly" id="left-skelly">{<GiDinosaurBones size="32px"/>}</i>
                    <h3 className="rule"></h3>
                 <i className="skelly" id="far-left-skelly">{<GiDinosaurBones size="32px"/>}</i>
           <Navbar.Toggle aria-controls="" className="logo" id="glowBox">
             <Navbar.Brand onClick={() => roar.play()}>
               <img id="mainImg" src={dinosaurImg} alt="dinosaurs" />
             </Navbar.Brand>
           </Navbar.Toggle>
           <i className="skelly" id="far-right-skelly">{<GiDinosaurBones size="32px"/>}</i>
                    <h3 className="rule"></h3>
           <i className="skelly" id="right-skelly">{<GiDinosaurBones size="32px"/>}</i>


           <Navbar.Collapse id="navbar">
             <Nav fill variant ="tabs" defaultActiveKey='/'className="ms-auto text-center">
               <Nav.Item className="nav-item">
                    <Nav.Link className="navbar-copy" href="/">Home</Nav.Link>
               </Nav.Item>
               <Nav.Item className="nav-item">
                    <Nav.Link className="navbar-copy" href="/about">About</Nav.Link>
               </Nav.Item>
               <Nav.Item className="nav-item">
                    <Nav.Link className="navbar-copy" href="/shop">Visit</Nav.Link>
               </Nav.Item>
               <Nav.Item className="nav-item">
                    <Nav.Link className="navbar-copy" href="/checkout">Checkout</Nav.Link>
               </Nav.Item>
               <Nav.Item className="nav-item">
                    <Nav.Link className="navbar-copy"href="/login">Login</Nav.Link>
               </Nav.Item>
               <Nav.Item className="nav-item">
                    <Nav.Link className="navbar-copy"href="/" onClick={() => Auth.logout()}>
                 Logout
                    </Nav.Link>
               </Nav.Item>
               <Nav.Item className="nav-item">
                    <Nav.Link className="navbar-copy" href="/signup">Sign Up</Nav.Link>
               </Nav.Item>
               <Nav.Item className="nav-item">
                 <Nav.Link className="navbar-copy" href="/contact">Contact</Nav.Link>
               </Nav.Item>
             </Nav>
           </Navbar.Collapse>
         </Navbar>
    </>
  );
};

export default Header;
