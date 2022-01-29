import React from "react";
import ShoppingCart from "../components/ShoppingCart";
import { Link } from "react-router-dom";
// import Cart from "../components/Cart"

const Checkout = () => {
  return (
    <div>
      <h1>YOU ARE ON THE CHECKOUT PAGE NOW</h1>
      {/* This will be our payment page with the Stripe boilerplate and form for taking buyer's info.
    Should include functional "shopping cart" showing what user has purchased so far.*/}

      <ShoppingCart /* specific props somewhere in here */ />

      <Link to="/shop">
          <button className="homeBtn">Back to Shop</button>
      </Link>
    </div>
    
  );
};

export default Checkout;
