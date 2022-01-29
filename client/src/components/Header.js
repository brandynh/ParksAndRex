import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import dinosaurImg from "../assets/images/Dinologo1.png";
import Auth from "../utils/auth";
import '../header.css';
import audio from '../assets/audio/Dino-sounds.mp3';
import { Link } from "react-router-dom";

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
          <Link className="navbar-copy" to="/">Home</Link>
          <Link className="navbar-copy" to="/about">About</Link>
          <Link className="navbar-copy" to="/shop">Visit</Link>
          <Link className="navbar-copy" to="/checkout">Checkout</Link>
          <Link className="navbar-copy"to="/login">Login</Link>
          <Link className="navbar-copy"to="/" onClick={() => Auth.logout()}>
            Logout
          </Link>
          <Link className="navbar-copy" to="/signup">Sign Up</Link>
          <Link className="navbar-copy" to="/contact">Contact</Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
