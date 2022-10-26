// import React, { useRef } from 'react';
import { useRef } from 'react';
import { Button, Card } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import { useReactToPrint } from "react-to-print";

import './CourseFeatures.css'

const CourseFeatures = () => {

    const course = useLoaderData()

    const { title, titleName, photo, about } = course;

    const componentRef = useRef();
    const handlePrint = useReactToPrint({
      content: () => componentRef.current,
      documentTitle: 'emp-data',
      onAfterPrint: () => alert('Print succes')
    })


  

    return (
      <div className="container mt-4" ref={componentRef}>
        <div className="d-flex justify-content-between">
          <h1>{titleName}</h1>
          <Button variant="light" onClick={handlePrint} className="me-2 ">
            Download
          </Button>
        </div>
        <Card>
          <Card.Img
            className="feat-img"
            style={{ height: "380px" }}
            variant="top"
            src={photo}
          />
          <Card.Body>
            <Card.Text className="fw-bolder">{title}</Card.Text>
            <Card.Text className="">{about}</Card.Text>
          </Card.Body>
        </Card>
      </div>
    );
};

export default CourseFeatures;