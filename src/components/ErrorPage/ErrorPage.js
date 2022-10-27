import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './ErrorPage.css'

const ErrorPage = () => {
    return (
      <section className="d-flex align-items-center vh-100">
        <div className="d-flex flex-column align-items-center justify-content-center px-5 mx-auto ">
          <h2 className="mb-3 font-extrabold fw-bolder header">
            <span>Ooops</span>!
          </h2>
          
          <div className="max-w-md text-center">
            <h2 className="mb-4 fw-bolder error">
              <span>404</span>
            </h2>
            <p className="fs-2 fw-bold md-fs-1 mb-5">
              You've found a page that doesn't exist
            </p>

            <Button variant="outline-secondary">
              <Link to="/" variant="outline-secondary" className="btn">
                Back to Home Page
              </Link>
            </Button>
          </div>
        </div>
      </section>
    );
};

export default ErrorPage;