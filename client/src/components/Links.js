import React from 'react';
import { Nav } from 'react-bootstrap'
import Auth from '../utils/auth'

const Links = () => {

   

  return(
   <>
   <div id="nav-box-main">
      <div id="nav-box-left">
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
        <Nav.Link className="navbar-copy" href="/contact">Contact</Nav.Link>
      </Nav.Item>
      </div>
      <div id="nav-box-right">
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
           <Nav.Link className="navbar-copy" href="/checkout">Checkout</Nav.Link>
      </Nav.Item>
   </div>
   </div>
   </>


   );
};

export default Links;

