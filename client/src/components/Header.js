import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import dinosaurImg from "../assets/images/Dinologo1.png";
import Auth from "../utils/auth";
import "../header.css";
import audio from "../assets/audio/Dino-sounds.mp3";
import { Link } from "react-router-dom"

const Header = () => {
  const roar = new Audio(audio);

  return (
    <Navbar expand="" className="navbar justify-content-center">
      <Navbar.Toggle aria-controls="" className="logo" id="glowBox">
        <Navbar.Brand onClick={() => roar.play()}>
          <img id="mainImg" src={dinosaurImg} alt="dinosaurs" />
        </Navbar.Brand>
      </Navbar.Toggle>
      <Navbar.Collapse id="navbar">
        <Nav
          fill
          variant="tabs"
          deaultActiveKey="/"
          className="ms-auto text-center"
        >
          <Link to="/">
            <Nav.Item className="nav-item navbar-copy"><Nav.Link>Home</Nav.Link></Nav.Item>
          </Link>

          <Link to="/about">
            <Nav.Item className="nav-item navbar-copy"><Nav.Link>About</Nav.Link></Nav.Item>
          </Link>

          <Link to="/shop">
            <Nav.Item className="nav-item navbar-copy"><Nav.Link>Shop</Nav.Link></Nav.Item>
          </Link>

          <Link to="/checkout">
            <Nav.Item className="nav-item navbar-copy"><Nav.Link>Checkout</Nav.Link></Nav.Item>
          </Link>

          <Link to="/login">
            <Nav.Item className="nav-item navbar-copy"><Nav.Link>Login</Nav.Link></Nav.Item>
          </Link>

          <Link to="/" onClick={() => Auth.logout()}>
            <Nav.Item className="nav-item navbar-copy"><Nav.Link>Logout</Nav.Link></Nav.Item>
          </Link>

          <Link to="/signup">
            <Nav.Item className="nav-item navbar-copy"><Nav.Link>Sign Up</Nav.Link></Nav.Item>
          </Link>

          <Link to="/contact">
            <Nav.Item className="nav-item navbar-copy"><Nav.Link>Contact</Nav.Link></Nav.Item>
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
