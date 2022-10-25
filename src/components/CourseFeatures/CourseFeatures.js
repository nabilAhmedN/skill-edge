import React from 'react';
import { Card } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';

const CourseFeatures = () => {

    const course = useLoaderData()

    const { title, photo } = course;

    return (
      <div className="col-lg-4 col-md-12 col-sm-12">
        <Card>
          <Card.Img variant="top" src={photo} />
          <Card.Body>
            <Card.Title className="fw-bolder">{title}</Card.Title>
          </Card.Body>
        </Card>
      </div>
    );
};

export default CourseFeatures;