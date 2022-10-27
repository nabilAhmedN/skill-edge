import React from 'react';
import { Accordion } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const FAQ = () => {
    return (
      <div className="container my-5">
        <div className="d-flex flex-column align align-items-center mb-5">
          <h1>Frequently Asked Questions</h1>
        </div>
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>What does SkillEdge cost?</Accordion.Header>
            <Accordion.Body>
              All you need to get started is an email address. Become a member
              of skilledge to have complete access to the hundreds of classes as
              well as additional services like offline watching, subtitles,
              transcripts, and more. For additional information about membership
              costs in your area,<Link to="/register">create an account.</Link>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>
              How do I purchase a How do I purchase a SkillEdge membership?
              membership?
            </Accordion.Header>
            <Accordion.Body>
              To enroll in a membership, create a SkillEdge account. When you
              sign up, you'll have unlimited access to all SkillEdge programs,
              as well as other features like offline watching, and your
              subscription will help teachers you admire. You can cancel at any
              time throughout your subscription.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    );
};

export default FAQ;