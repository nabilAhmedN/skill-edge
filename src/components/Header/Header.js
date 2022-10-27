import React, { useContext } from 'react';
import { Button, Image } from 'react-bootstrap';
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';
import './Header.css'
import { FaUser } from "react-icons/fa";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import photo from '../../assets/images/logo.png'

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
     logOut()
       .then(() => {})
       .catch((error) => console.error(error));
  }
    return (
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Link className="text-decoration-none text-dark" to="/">
            <img
              alt=""
              src={photo}
              width="30"
              height="30"
              className="d-inline-block me-2 align-top"
            />
          </Link>
          <Navbar.Brand>
            <Link
              className="items-center text-decoration-none text-dark fw-bolder"
              to="/"
            >
              Skill Edge
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
                  to="/home"
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
            <div className="d-flex mb-2">
              <div className="form-check form-switch ms-auto mt-3 me-3">
                <label className="form-check-label ms-3" htmlFor="lightSwitch">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    fill="currentColor"
                    className="bi bi-brightness-high"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z" />
                  </svg>
                </label>
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="lightSwitch"
                />
              </div>
            </div>
            <Nav>
              <Nav.Link eventKey={2}>
                {user?.photoURL ? (
                  <Tippy content={user?.displayName}>
                    <Image
                      style={{ height: "40px" }}
                      roundedCircle
                      src={user?.photoURL}
                    ></Image>
                  </Tippy>
                ) : (
                  <FaUser />
                )}
              </Nav.Link>
              <Nav.Link>
                {user?.uid ? (
                  <>
                    <span className="me-2 mt-4">{user?.displayName}</span>
                    <Button variant="outline-primary" onClick={handleLogOut}>
                      <Link className="items-center text-decoration-none text-dark">
                        LogOut
                      </Link>
                    </Button>
                  </>
                ) : (
                  <>
                    <Button variant="outline-primary">
                      <Link
                        className="items-center text-decoration-none text-dark"
                        to="/login"
                      >
                        Login
                      </Link>
                    </Button>
                    {/* <Link to="/register">Register</Link> */}
                  </>
                )}
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default Header;