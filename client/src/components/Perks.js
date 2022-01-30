/* eslint-disable react/jsx-no-undef */
import React from 'react';
import {Card, ListGroup, ListGroupItem} from 'react-bootstrap'
import {useQuery} from '@apollo/client';
import {QUERY_PERKS} from '../utils/queries';
import { Link } from "react-router-dom"


const Perks = () => {
  const { data, error } = useQuery(QUERY_PERKS);
  const perks = data?.perks || [];


  if (!perks) return null;

  console.log(perks);
  

  return (
    <>
   {perks.map((item) => {

   return (
      <Card className="pack-card" key={item} style={{ width: '18rem', minWidth: '20%' }}>
      <Card.Body>
        <Card.Title>{item.name}</Card.Title>
        <Card.Text>
          {item.description}
        </Card.Text>
      </Card.Body>
    </Card>
     )
})}
   </>
   )
};


export default Perks;


