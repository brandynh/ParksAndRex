/* eslint-disable react/jsx-no-undef */
import React from 'react';
import {Card, ListGroup, ListGroupItem} from 'react-bootstrap'
import {useQuery} from '@apollo/client';
import {QUERY_PACKAGES} from '../utils/queries';


const Package = ({imgLink}) => {
  const { data, error } = useQuery(QUERY_PACKAGES);

  console.log(data);

  
  const packages = data?.packages || [];

  if (!packages) return null;

  console.log(packages);

  

  return (
    <>
   {packages.map((item) => {

   return (
      <Card className="pack-card" key={item} style={{ width: '18rem' }}>
      <Card.Img variant="top" src={item.image} />
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


