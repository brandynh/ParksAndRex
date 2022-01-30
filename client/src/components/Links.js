import React from 'react';
import { Nav } from 'react-bootstrap'
import Auth from '../utils/auth'
import { Link } from 'react-router-dom'

const Links = () => {

   

  return(
   <>
   <div id="nav-box-main">
      <div id="nav-box-left">

      <Link to="/">
      <Nav.Item className="nav-item">
           <Nav.Link className="navbar-copy" href="/">Home</Nav.Link>
      </Nav.Item>
      </Link>

      <Link to="/about">
      <Nav.Item className="nav-item">
           <Nav.Link className="navbar-copy" href="/about">About</Nav.Link>
      </Nav.Item>
      </Link>

      <Link to="/shop">
      <Nav.Item className="nav-item">
           <Nav.Link className="navbar-copy" href="/shop">Visit</Nav.Link>
      </Nav.Item>
      </Link>
      
      <Link to="/perks">
      <Nav.Item className="nav-item">
        <Nav.Link className="navbar-copy" href="/perks">Perks</Nav.Link>
      </Nav.Item>
      </Link>

      <Link to="/contact">
      <Nav.Item className="nav-item">
        <Nav.Link className="navbar-copy" href="/contact">Contact</Nav.Link>
      </Nav.Item>
      </Link>

      </div>
      <div id="nav-box-right">

      <Link to="/login">
      <Nav.Item className="nav-item">
           <Nav.Link className="navbar-copy"href="/login">Login</Nav.Link>
      </Nav.Item>
      </Link>

      <Link to="/">
      <Nav.Item className="nav-item">
           <Nav.Link className="navbar-copy"href="/" onClick={() => Auth.logout()}>
        Logout
           </Nav.Link>
      </Nav.Item>
      </Link>

      <Link to="/signup">
      <Nav.Item className="nav-item">
           <Nav.Link className="navbar-copy" href="/signup">Sign Up</Nav.Link>
      </Nav.Item>
      </Link>

      <Link to="/checkout">
      <Nav.Item className="nav-item">
           <Nav.Link className="navbar-copy" href="/checkout">Checkout</Nav.Link>
      </Nav.Item>
      </Link>
   </div>
   </div>
   </>


   );
};

export default Links;

