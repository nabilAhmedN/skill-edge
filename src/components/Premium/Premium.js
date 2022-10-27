import React from 'react';
import { Button } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import './Premium.css'

const Premium = () => {
  const user = useLoaderData()
  const {title} = user;
    return (
      <div className="container mt-1 mb-5 ">
        <h2 className="text-center">
          Premium <span style={{ color: "#FD98A7" }}>{title}</span> Course
        </h2>
        <div className="row d-flex justify-content-center">
          <div className="col-md-4 mt-1">
            <div className="part1 text-center p-3 py-3">
              <h6 className="free mt-4">SILVER</h6>
              <span className=" amount mt-4 d-block">$10</span>
              <span className="user d-block mt-2">USD / month</span>
              <span className="information d-block mt-3">25,000 visits</span>
              <span className="information d-block mt-3">Awsome Featcher</span>
              <span className="information d-block mt-3">2 Special Video</span>
              <span className="information d-block mt-3">Free Migrations</span>
              <Button variant="primary" className="mt-4">
                Choose
              </Button>
            </div>
          </div>
          <div className="col-md-4 mt-1">
            <div className="part2 text-center p-3 py-3 text-white">
              <h6 className="free mt-4">MEDIUM</h6>
              <span className=" amount mt-4 d-block">$18.50</span>
              <span className="user d-block mt-2">USD / month</span>
              <span className="information d-block mt-3">50,000 visits</span>
              <span className="information d-block mt-3">Awsome Featcher</span>
              <span className="information d-block mt-3">5 Special Video</span>
              <span className="information d-block mt-3">Free Migrations</span>
              <Button variant="primary" className="mt-4">
                Choose
              </Button>
            </div>
          </div>
          <div className="col-md-4 mt-1">
            <div className="part3 p-3 text-dark text-center py-3">
              <h6 className="free mt-4">POPULAR</h6>
              <span className=" amount mt-4 d-block">$28.50</span>
              <span className="user d-block mt-2">USD / month</span>
              <span className="information d-block mt-3">70,000 visits</span>
              <span className="information d-block mt-3">Available</span>
              <span className="information d-block mt-3">10 Special Video</span>
              <span className="information d-block mt-3">Free Migrations</span>
              <Button variant="primary" className="mt-4">
                Choose
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Premium;