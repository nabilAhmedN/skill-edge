import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import Course from '../Course/Course';
import './Courses.css'

const Courses = () => {

  const courses = useLoaderData()
    
    return (
      <div>
        <h2 className="text-center mb-5">This is Course Page</h2>
        <Row className="mx-5 mb-3">
          <Col lg={2}>
            {courses.map((course) => (
              <p className="mt-4" key={course.id}>
                <Link
                  className="text-decoration-none text-dark course-btn"
                  to={`/courses/${course.id}`}
                >
                  {course.title}
                </Link>
              </p>
            ))}
          </Col>

          <Col lg={10}>
            <div className="row g-3">
              {courses.map((course) => (
                <Course key={course.id} course={course}></Course>
              ))}
            </div>
          </Col>
        </Row>
      </div>
    );
};

export default Courses;