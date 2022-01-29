import React from 'react';
import { useStoreContext } from '../utils/GlobalState';



const ShoppingCart = () => {

  const [state, dispatch] = useStoreContext();


  return <div>
    {state?.cart.map((cartItem) => {
      return <h1>Here is {cartItem.name}</h1>
    })}

      {/* <h1>Here is {state.cart.title}</h1> */}
    

      {/* Card component that will populate with selected Packages on checkout page
      so that user can see what they're buying. */}
      


  </div>;
};

export default ShoppingCart;
