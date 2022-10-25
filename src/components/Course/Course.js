import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Course = ({course}) => {
    const { title, photo, subscribe, duration, titleName } = course;

    return (
      <div className="col-lg-4 col-md-12 col-sm-12">
        <Card>
          <Card.Img variant="top" src={photo} />
          <Card.Body>
            <div className="d-flex justify-content-between pb-2">
              <span>{subscribe} students</span>
              <span>{duration}m</span>
            </div>
            <Card.Title className="fw-bolder">{title}</Card.Title>
            <Card.Text>{titleName}</Card.Text>
            <Button variant="primary">
              <Link
                className="text-decoration-none text-light"
                to={`/courses/${course.id}`}
              >
                Features
              </Link>
            </Button>
          </Card.Body>
        </Card>
      </div>
    );
};

export default Course;