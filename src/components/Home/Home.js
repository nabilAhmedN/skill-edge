import React from 'react';
import { Button, Col, Row } from "react-bootstrap";
import { Link } from 'react-router-dom';
import homePhoto from '../../assets/images/photo1.jpg'
import './Home.css'

const Home = () => {
    return (
      <div className="home">
        <Row className="mx-5 mb-3">
          <Col lg={6}>
            <h1 className="header-title">
              Enhance your website and business abilities for nothing with Skill
              Edge.
            </h1>

            <h4 className="header-descrip">
              With free online training from specialists in the field, you may
              improve your abilities and expand your business. Become a member
              and begin your first course right now.
            </h4>

            <Button className="home-btn">
              <Link className="text-decoration-none text-light" to="/login">
                Get Started
              </Link>
            </Button>
          </Col>

          <Col lg={6}>
            <img className="img" src={homePhoto} alt="" />
          </Col>
        </Row>
      </div>
    );
};

export default Home;