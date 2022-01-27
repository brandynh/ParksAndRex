import React from 'react';
import {useQuery} from '@apollo/client';
import {QUERY_PACKAGES} from '../utils/queries';

const Package = ({imgLink,}) => {
  const { data, error } = useQuery(QUERY_PACKAGES);

  console.log(data);
  
  const packages = data.packages;

  console.log(packages);
  console.log(error);

  return (
    <>
    {packages.map((item) => (
    <div className="col-md-6 col-lg-4 mb-5">
      <div className="mx-auto">
        <div className="d-flex h-100 w-100">
          <div>
            <h2 align="center">{item.name}</h2>
            <a target="_blank">
            <img className="img-fluid project-img" src={imgLink}></img>
            </a>
            <p align="center">
              {item.description}
            <p>
              <ul className="list-unstyled list-inline text-center">
                <li>
                  <em>Cost:</em>{item.price}
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
   ) )}
   </>
   )};


export default Package;


