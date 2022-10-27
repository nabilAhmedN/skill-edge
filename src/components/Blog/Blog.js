import React from 'react';
import { Accordion } from 'react-bootstrap';

const Blog = () => {
    return (
      <div className="container my-5">
        <div className="d-flex flex-column align align-items-center mb-5">
          <h1>Blog</h1>
        </div>
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>what is cors?</Accordion.Header>
            <Accordion.Body>
              In ReactJS, Cross-Origin Resource Sharing (CORS) refers to the
              method that allows you to make requests to the server deployed at
              a different domain. As a reference, if the frontend and backend
              are at two different domains, we need CORS there.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>
              Why are you using firebase? What other options do you have to
              implement authentication?
            </Accordion.Header>
            <Accordion.Body>
              Firebase is great for quick projects: it's easy to set up, fast,
              in many cases requires only front-end logic. It lets you focus on
              your app instead of implementing custom authentication, web
              sockets or database connections. <br />
              Auth0, MongoDB, Passport and Okta are the most popular
              alternatives and competitors to Firebase Authentication.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>
              How does the private route work?
            </Accordion.Header>
            <Accordion.Body>
              The private route component is similar to the public route, the
              only change is that redirect URL and authenticate condition. If
              the user is not authenticated he will be redirected to the login
              page and the user can only access the authenticated routes If he
              is authenticated (Logged in)
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>
              What is Node? How does Node work?
            </Accordion.Header>
            <Accordion.Body>
              Node.js is an open-source, cross-platform JavaScript runtime
              environment and library for running web applications outside the
              client's browser. Developersuse Node.js to create server-side web
              applications, and it is perfect for data-intensive applications
              since it uses an asynchronous, event-driven model. <br />
              Node.js accepts the request from the clients and sends the
              response, while working with the request node.js handles them with
              a single thread. To operate I/O operations or requests node.js use
              the concept of threads. Thread is a sequence of instructions that
              the server needs to perform. It runs parallel on the server to
              provide the information to multiple clients. Node.js is an event
              loop single-threaded language. It can handle concurrent requests
              with a single thread without blocking it for one request. Node.js
              basically works on two concept Asynchronous Non-blocking I/O
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    );
};

export default Blog;