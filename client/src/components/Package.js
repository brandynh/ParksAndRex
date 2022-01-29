/* eslint-disable react/jsx-no-undef */
import React from 'react';
import {Card, ListGroup, ListGroupItem} from 'react-bootstrap'
import {useQuery} from '@apollo/client';
import {QUERY_PACKAGES} from '../utils/queries';
import dinoTestImg from "../assets/images/dino-desktop-2.jpeg";
import dinoPark from "../assets/images/dino-desktop.jpeg";
import dinoPark2 from "../assets/images/dinosaur-desktop.jpg";
import { useStoreContext } from "../utils/GlobalState";
import { ADD_TO_CART } from '../utils/actions';


const Package = ({}) => {
  const { data, error } = useQuery(QUERY_PACKAGES);

  console.log(data);

  
  const packages = data?.packages || [];


  if (!packages) return null;


  const images = {
    dinoTestImg, dinoPark, dinoPark2
  };
  console.log(packages);

  

  return (
    <>
   {packages.map((item) => {
     const image = images[item.image];

   return (
      <Card className="pack-card" key={item} style={{ width: '18rem' }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{item.name}</Card.Title>
        <Card.Text>
          {item.description}
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroupItem>Vestibulum at eros</ListGroupItem>
        <ListGroupItem>
            {`$${item.price.toFixed(2)}`}
         </ListGroupItem>
      </ListGroup>
      <Card.Body>
        <Card.Link href="#"></Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
     )
})}
   </>
   )
};


export default Package;

