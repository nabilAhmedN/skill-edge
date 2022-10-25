import React from 'react';
import { Button } from 'react-bootstrap';
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from 'react-router-dom';

const Header = () => {
    return (
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand>
            <Link
              className="items-center text-decoration-none text-dark"
              to="/"
            >
              Dragon News
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link>
                <Link
                  className="items-center text-decoration-none text-dark"
                  to="/"
                >
                  Home
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link
                  className="items-center text-decoration-none text-dark"
                  to="/courses"
                >
                  Courses
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link
                  className="items-center text-decoration-none text-dark"
                  to="/faq"
                >
                  FAQ
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link
                  className="items-center text-decoration-none text-dark"
                  to="/blog"
                >
                  Blog
                </Link>
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link>
                <Button variant="outline-primary">
                  <Link
                    className="items-center text-decoration-none text-dark"
                    to="/login"
                  >
                    Login
                  </Link>
                </Button>
              </Nav.Link>
              <Nav.Link>
                <Link to="/register">Register</Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default Header;