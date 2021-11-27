import Button from "@restart/ui/esm/Button";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import banner from "../../../image/Image/banner.png";

const Banner = () => {
  return (
    <div className="top-banner">
      <Container>
        <Row>
          <Col xs={12} md={5} className="my-auto">
            <h1>We Build</h1>
            <h1>Your Dream</h1>
            <p>Online Easte Agency, the mordern way to sell your own home, You can use Griffin Residential to market your property</p>
            <Link to="booking"><Button className="px-4 primary-color border-0 text-light rounded py-2">Booking</Button></Link>
          </Col>
          <Col xs={12} md={7}>
            <img className="img-fluid" src={banner} alt="" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Banner;
