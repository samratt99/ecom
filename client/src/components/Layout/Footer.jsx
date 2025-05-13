import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4 mt-5">
      <div className="container text-center">
      <h5 className="mb-3 fw-medium" style={{ letterSpacing: '0.5px' }}>
  All Rights Reserved &copy;  <span className="fw-bold text-warning">Plexora</span> | Built by <span className="text-light">Sahil Tiwari</span>
</h5>

        <div className="d-flex justify-content-center gap-3 flex-wrap">
          <Link to="/about" className="text-light text-decoration-none footer-link">
            About
          </Link>
          <span className="text-light">|</span>
          <Link to="/contact" className="text-light text-decoration-none footer-link">
            Contact
          </Link>
          <span className="text-light">|</span>
          <Link to="/policy" className="text-light text-decoration-none footer-link">
            Policy
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
