/* eslint-disable react/jsx-no-undef */
import React from 'react';
import {Card, ListGroup, ListGroupItem} from 'react-bootstrap'
import {useQuery} from '@apollo/client';
import {QUERY_PACKAGES} from '../utils/queries';
import dinoTestImg from "../assets/images/Jurassic_park_raptors.jpg";
import dinoPark from "../assets/images/jurassic-world-dominion-rex.jpg";
import dinoPark2 from "../assets/images/brontosaurus-img.jpg";
import { useStoreContext } from "../utils/GlobalState";
import { ADD_TO_CART } from '../utils/actions';
import { Link } from "react-router-dom"


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

  console.log(error);
  

  return (
    <>
   {packages.map((item) => {
     const image = images[item.image];
     console.log(state.cart)

   return (
      <Card className="pack-card" key={item._id} style={{ width: '22rem', minWidth: '30%' }}>
      <Card.Img id="card-img" variant="top" src={image} />
      <Card.Body>
        <Card.Title id= "packages-title">{item.name}</Card.Title>
        <Card.Text id= "packages">
          {item.description}
        </Card.Text>
      <ListGroup className= "list-group-flush">
        <ListGroupItem id="package-includes">Package Includes:</ListGroupItem>
      </ListGroup>
        
        <Card.Text className="perk-card">
        {item.perks.map((subitem) =>  (

              <Link to="/perks" class ="list-group-items" id= "packages-link">
                <ul class="perk-list">
                <li key={subitem.id} id="packages-link">{subitem.name}</li>
                </ul>
              </Link>
                )
              )}
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        {/* <ListGroupItem>Vestibulum at eros</ListGroupItem> */}
        {/* <ListGroupItem className="price-bar"> */}
        <ListGroupItem id="package-price">
            {item.price}
         </ListGroupItem>
      </ListGroup>
      <Card.Body id="package-btn" className="flex">
        <Card.Link href="#"></Card.Link>
        <Link to="/checkout">
        <Card.Link  href="#" onClick={() => addToCart(item)}>CLICK HERE TO BUY</Card.Link>
        </Link>
      </Card.Body>
    </Card>
     )
})}
   </>
   )
};


export default Package;


