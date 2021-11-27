import React from "react";
import { Card, Col } from "react-bootstrap";
import './ServiceCard.css'

const ServiceCard = (props) => {
  const { img, title, price, details } = props.data;
  return (
    <>
      <Col>
        <Card
          className=" items-card"
          style={{
            minHeight: "300px",
          }}
        >
          <Card.Img
            className="card-img mx-auto mt-3"
            style={{ height: "90px", width:"90px" }}
            variant="top"
            src={img}
          />
          <Card.Body className="text-center mt-2">
            <Card.Title>{title}</Card.Title>
            <p>$ {price}</p>
            <Card.Text>{details}</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

export default ServiceCard;
