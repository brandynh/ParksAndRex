import React from 'react';
import {useQuery} from '@apollo/client';
import {QUERY_PACKAGES} from '../utils/queries';
import dinoTestImg from "../assets/images/dino-desktop-2.jpeg";
import dinoPark from "../assets/images/dino-desktop.jpeg";
import dinoPark2 from "../assets/images/dinosaur-desktop.jpg";
import { useStoreContext } from "../utils/GlobalState";
import { ADD_TO_CART } from '../utils/actions';

const Package = () => {
  const [state, dispatch] = useStoreContext();
  const { data, error } = useQuery(QUERY_PACKAGES);
  const packages = data?.packages || [];

  if (!packages) return null;

  const images = {
    dinoTestImg, dinoPark, dinoPark2
  };

  const addToCart = (item) => {
    dispatch({ 
      type: ADD_TO_CART, 
      product: { ...item, purchaseQuantity: 1 }
    });
  }

  return (
    <>
   {packages.map((item, i) => {
     const image = images[item.image];
     return (
         <div className="col-md-6 col-lg-4 mb-5" key={i}>
           <div className="mx-auto">
             <div className="d-flex h-100 w-100">
               <div>
                 <h2 align="center">{item.name}</h2>
                 <a target="_blank">
                 <img className="img-fluid project-img" src={image}></img>
                 </a>
                 <p align="center">
                   {item.description}
                 <p>
                   <ul className="list-unstyled list-inline text-center">
                     <li>
                       <em>Cost:</em>${item.price}
                     </li>
                       <li>
                       <button onClick={() => addToCart(item)}>Buy This Tour Package</button>
                       </li>
                   </ul>
                 </p>
                 </p>
               </div>
             </div>
           </div>
         </div>
     )
})}
   </>
   )
};


export default Package;


