
import { useRef } from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import { useReactToPrint } from "react-to-print";


const CourseFeatures = () => {

    const course = useLoaderData()

    const { id, title, titleName,name, photo, about } = course;

    const componentRef = useRef();
    const handlePrint = useReactToPrint({
      content: () => componentRef.current,
      documentTitle: "skill-edge",
      onAfterPrint: () => alert("Print successfully"),
    });


  

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
            <Card.Text className="fw-bolder">
              <h3>{title}</h3>
            </Card.Text>
            <Card.Text className="">
              <h4 className="fw-light">{name}</h4>
              <p>{about}</p>
              <Button>
                <Link
                  className="text-decoration-none text-light"
                  to={`/premium/${id}`}
                >
                  Go to Premium
                </Link>
              </Button>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    );
};

export default CourseFeatures;