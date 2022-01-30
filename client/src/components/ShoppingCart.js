import React from "react";
import { useStoreContext } from "../utils/GlobalState";
import dinoLogo3 from "../assets/images/Dinologo3.png";

const ShoppingCart = () => {
  const [state, dispatch] = useStoreContext();

  return (
    <div className="container h-100">
      <h2>Your Shopping Cart</h2>
      {state?.cart.map((cartItem) => {
        return (
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="card cart-card mb-4">
              <div className="p-4">
                <div classname="col-md-2 d-flex justify-content-center" align="center">
                <img className="checkout-img" src={dinoLogo3}></img>
                  <h3>
                    You Ordered: The {cartItem.name} (Good for 4 visitors on the date of your choosing)
                  </h3>
                  <p className="mb-4 pb-2">{cartItem.description}</p>
                  <p className="mb-4 pb-2">Cost: ${cartItem.price}</p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ShoppingCart;
