import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import dinosaurImg from "../assets/images/j-park.jpeg"; 

const Header = () => {
  return (
    <Navbar expand="false" className="justify-content-center">
      <Navbar.Toggle aria-controls="basic-navbar-nav">
        <Navbar.Brand>
        <img src={dinosaurImg} alt="dinosaurs"/>
        </Navbar.Brand>
      </Navbar.Toggle>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto text-center">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/about">About</Nav.Link>
          <Nav.Link href="/shop">Visit</Nav.Link>
          <Nav.Link href="/login">Login</Nav.Link>
          <Nav.Link href="/contact">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
