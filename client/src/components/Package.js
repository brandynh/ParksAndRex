/* eslint-disable react/jsx-no-undef */
import React from 'react';
<<<<<<< HEAD
=======
import {Card, ListGroup, ListGroupItem} from 'react-bootstrap'
import {useQuery} from '@apollo/client';
import {QUERY_PACKAGES} from '../utils/queries';


const Package = ({imgLink}) => {
  const { data, error } = useQuery(QUERY_PACKAGES);

  console.log(data);

  
  const packages = data?.packages || [];

  if (!packages) return null;

  console.log(packages);

  
>>>>>>> main

const Package = ({imgLink, title, description, cost}) => {
  return (
<<<<<<< HEAD
    <div className="col-md-6 col-lg-4 mb-5">
      <div className="mx-auto">
        <div className="d-flex h-100 w-100">
          <div>
            <h2 align="center">{title}</h2>
            <a target="_blank">
            <img className="img-fluid project-img" src={imgLink}></img>
            </a>
            <p align="center">
              {description}
            <p>
              <ul className="list-unstyled list-inline text-center">
                <li>
                  <em>Cost:</em>{cost}
                </li>
                  <li>
                  <button>Buy This Tour Package</button>
                  </li>
              </ul>
            </p>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
};
=======
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

>>>>>>> main

export default Package;


