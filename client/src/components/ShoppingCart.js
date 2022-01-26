import React from 'react';
import Package from './Package'
import { loadStripe } from '@stripe/stripe-js';


const stripePromise = loadStripe('pk_test_51KLbiADzqI05yRaXSwQ31RAHdSYgaJzTkEoHtFp2x0jiVaiwMDanC4xrAKprIF97zlai7BDLybtc6DquHMYpq7PW00705RsWoQ ');

const ShoppingCart = () => {
  return <div>

      {/* Card component that will populate with selected Packages on checkout page
      so that user can see what they're buying. */}
      


  </div>;
};

export default ShoppingCart;
