import React from 'react';

const Package = ({imgLink, title, description, cost}) => {
  return (
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

export default Package;


