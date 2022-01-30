import React from "react";
import ShoppingCart from "../components/ShoppingCart";
import { Link } from "react-router-dom";
import Auth from "../utils/auth"
// import Cart from "../components/Cart"

const Checkout = () => {
  return (
    <div>
      <ShoppingCart /* specific props somewhere in here */ />
      <div className="justify-content-center" align="center">
      <Link to="/shop">
          <button className="homeBtn">Continue Shopping for Tour Packages</button>
      </Link>
      {Auth.loggedIn() ?  ( <Link to="/thanks">
              <button>Complete Your Purchase</button>
              </Link> )   :  ( <Link to="/login">
              <button>You must log in to complete your purchase</button>
              </Link>
            )}      
            </div>
    </div>
    
  );
};

export default Checkout;
