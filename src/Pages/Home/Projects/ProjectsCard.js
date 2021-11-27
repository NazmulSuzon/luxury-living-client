import React from "react";
import { Card, Col } from "react-bootstrap";

const ProjectsCard = (props) => {
    console.log(props.data)
    const {img, title, location} = props.data;
  return (
    <>
      <Col>
        <Card
          className="border-0"
          style={{
            minHeight: "400px",
          }}
        >
          <Card.Img
            className="card-img"
            style={{ height: "300px" }}
            variant="top"
            src={img}
          />
          <Card.Body className="text-center mt-2">
            <Card.Title>{title}</Card.Title>
            <Card.Text>{location}</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

export default ProjectsCard;
