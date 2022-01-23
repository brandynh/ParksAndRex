import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
      <Navbar className="justify-content-center">
        <Navbar.Brand href="/">
          <h1>PARKS AND REX LOGO</h1>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Nav className="me-auto">
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/shop">Visit</Nav.Link>
            <Nav.Link href="/login">Login</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Navbar.Collapse>
        </Nav>
      </Navbar>
  );
};

export default Header;
