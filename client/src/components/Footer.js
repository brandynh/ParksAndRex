import React from "react";
import helpImg from '../assets/images/jurassic-foundation.png';

const Footer = () => {
  return (
      <footer className="page-footer font-small special-color-dark pt-5">
        <div className="container">
          <ul className="list-unstyled list-inline text-center">
            <li className="list-inline-item">
              <a rel="noreferrer"
                href="https://github.com/brandynh/Project3"
                target="_blank"
                className="btn-floating mx-1"
              >
                <i id="builtBy">© Built By The Darkside Dino Boiz</i>
              </a>
            </li>
          </ul>
        </div>
      </footer>
  );
};

export default Footer;
