import React from 'react';
import { Link } from 'react-router-dom';
import { BsFacebook } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";
const Footer = () => {
    return (
      <div>
        <footer className="bg-dark text-center text-white">
          <div className="container p-4">
            <section className="mb-4">
              <Link
                className="btn btn-outline-light btn-floating m-1"
                to="https://www.facebook.com/nabilAhmedNahid2/"
                role="button"
              >
                <BsFacebook />
              </Link>
              <Link
                className="btn btn-outline-light btn-floating m-1"
                to="https://github.com/nabilAhmedN"
                role="button"
              >
                <BsGithub />
              </Link>
              <Link
                className="btn btn-outline-light btn-floating m-1"
                to="https://twitter.com/NabilahmedNahi1"
                role="button"
              >
                <FaTwitter />
              </Link>
            </section>
            <section className="mb-4">
              <h2>Skill Edge</h2>
              <p>Discover our course to develop your skills.</p>
            </section>
          </div>

          <div
            className="text-center p-3"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.2" }}
          >
            © 2022 Copyright Sill Edge Co.
          </div>
        </footer>
      </div>
    );
};

export default Footer;