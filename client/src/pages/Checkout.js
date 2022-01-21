import React from "react";
import ShoppingCart from "../components/ShoppingCart";

const Checkout = () => {
  return (
    <div>
      {/* This will be our payment page with the Stripe boilerplate and form for taking buyer's info.
    Should include functional "shopping cart" showing what user has purchased so far.*/}

      <ShoppingCart /* specific props somewhere in here */ />
    </div>
  );
};

export default Checkout;
