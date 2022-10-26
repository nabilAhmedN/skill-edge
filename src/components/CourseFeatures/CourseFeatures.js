// import React, { useRef } from 'react';
import { useRef } from 'react';
import { Card } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import { useReactToPrint } from "react-to-print";

import './CourseFeatures.css'

const CourseFeatures = () => {

    const course = useLoaderData()

    const { title, photo, about } = course;

    const componentRef = useRef();
    const handlePrint = useReactToPrint({
      content: () => componentRef.current,
      documentTitle: 'emp-data',
      onAfterPrint: () => alert('Print succes')
    })


  

    return (
      <div className="col-lg-4 col-md-12 col-sm-12" ref={componentRef}>
        <Card>
          <Card.Img variant="top" src={photo} />
          <Card.Body>
            <Card.Title className="fw-bolder">{title}</Card.Title>
            <Card.Text>{about}</Card.Text>
          </Card.Body>
        </Card>
        <div>
          <button onClick={handlePrint}>Print</button>
        </div>
      </div>
    );
};

export default CourseFeatures;