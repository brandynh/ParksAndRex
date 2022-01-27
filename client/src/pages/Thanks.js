import React, { useEffect } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_ORDER } from '../utils/mutations';
import { idbPromise } from '../utils/helpers';

function Thanks (params) {
  const [addOrder] = useMutation(ADD_ORDER);

  useEffect(() => {
    async function saveOrder() {
      const cart = await idbPromise('cart', 'get');
      const products = cart.map((item) => item._id);

      if (products.length) {
        const { data } = await addOrder({variables: { products } });
        const packageData = data.addOrder.packages;

        packageData.forEach((item) => {
          idbPromise('cart', 'delete', item);
        });
      }

      setTimeout(() => {
        window.location.assign('/');
      }, 3000);
    }

    saveOrder();
  }, [addOrder]);

  return ( 
    <div>
      <h1>Congrats! You have booked your tickets to Parks and Rex.</h1>
  {/* Page that will render after user successfully completes order on Checkout page. Something that says "thanks, that worked," and provides link back to home page. */}
    </div>
  )
};

export default Thanks;
