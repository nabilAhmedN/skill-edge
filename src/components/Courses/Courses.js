import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import Course from '../Course/Course';

const Courses = () => {

  const courses = useLoaderData()
    return (
      <div>
        <h2 className="text-center mb-5">This is Course Page</h2>
        <Row className="mx-5">
          <Col lg={3}>
            {courses.map((course) => (
              <p className="mt-4" key={course.id_}>
                {course.title}
              </p>
            ))}
          </Col>

          <Col lg={9}>
            <div className="row g-3">
              {courses.map((course) => (
                <Course key={course.id_} course={course}></Course>
              ))}
            </div>
          </Col>
        </Row>
      </div>
    );
};

export default Courses;