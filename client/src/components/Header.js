import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import dinosaurImg from "../assets/images/Dinologo1.png";
import Auth from "../utils/auth";

const Header = () => {
  return (
    <Navbar expand="false" className="navbar justify-content-center">
      <Navbar.Toggle aria-controls="basic-navbar-nav" className="logo">
        <Navbar.Brand>
          <img className="img-fluid" src={dinosaurImg} alt="dinosaurs" />
        </Navbar.Brand>
      </Navbar.Toggle>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto text-center">
          <Nav.Link className="navbar-copy" href="/">Home</Nav.Link>
          <Nav.Link href="/about">About</Nav.Link>
          <Nav.Link href="/shop">Visit</Nav.Link>
          <Nav.Link href="/checkout">Checkout</Nav.Link>
          <Nav.Link href="/login">Login</Nav.Link>
          <Nav.Link href="/" onClick={() => Auth.logout()}>
            Logout
          </Nav.Link>
          <Nav.Link href="/signup">Sign Up</Nav.Link>
          <Nav.Link href="/contact">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
