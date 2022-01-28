import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import dinosaurImg from "../assets/images/Dinologo1.png";
import Auth from "../utils/auth";
import '../header.css';
import audio from '../assets/audio/Dino-sounds.mp3'

const Header = () => {

   const roar = new Audio(audio);

   return (
    <Navbar expand="false" className="navbar justify-content-center">
      <Navbar.Toggle aria-controls="basic-navbar-nav" className="logo" id="glowBox">
        <Navbar.Brand onClick={() => roar.play()}>
          <img id="mainImg" src={dinosaurImg} alt="dinosaurs" />
        </Navbar.Brand>
      </Navbar.Toggle>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto text-center">
          <Nav.Link className="navbar-copy" href="/">Home</Nav.Link>
          <Nav.Link className="navbar-copy" href="/about">About</Nav.Link>
          <Nav.Link className="navbar-copy" href="/shop">Visit</Nav.Link>
          <Nav.Link className="navbar-copy" href="/checkout">Checkout</Nav.Link>
          <Nav.Link className="navbar-copy"href="/login">Login</Nav.Link>
          <Nav.Link className="navbar-copy"href="/" onClick={() => Auth.logout()}>
            Logout
          </Nav.Link>
          <Nav.Link className="navbar-copy" href="/signup">Sign Up</Nav.Link>
          <Nav.Link className="navbar-copy" href="/contact">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
