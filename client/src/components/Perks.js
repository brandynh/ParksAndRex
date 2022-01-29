/* eslint-disable react/jsx-no-undef */
import React from 'react';
import {Card, ListGroup, ListGroupItem} from 'react-bootstrap'
import {useQuery} from '@apollo/client';
import {QUERY_PACKAGES} from '../utils/queries';
import { Link } from "react-router-dom"


const Perks = () => {
  const { data, error } = useQuery(QUERY_PACKAGES);
  const packages = data?.packages || [];


  if (!packages) return null;

  console.log(packages);
  console.log(error);
  

  return (
    <>
   {packages.map((item) => {

   return (
      <Card className="pack-card" key={item} style={{ width: '18rem', minWidth: '0%' }}>
      <Card.Body>
        <Card.Title>{item.name}</Card.Title>
        <Card.Text>
          {item.description}
        </Card.Text>
        
        <Card.Text>
        {item.perks.map((subitem) => {
                return (

                  <Link to="/">
                  <p>[{subitem.name}]</p>
                  </Link>
                )
              })}
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
        <Link to="/checkout">
        </Link>
      </Card.Body>
    </Card>
     )
})}
   </>
   )
};


export default Perks;


