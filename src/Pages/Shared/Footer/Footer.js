import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <div className="primary-color mt-5 text-light">
      <Container className="py-5">
        <Row>
          <Col xs={6} md={6} lg={3}>
            <h2 className="text-center">Location</h2>
            <hr />
            <p>House No 26, Road No 02</p>
            <p>Shekhertek, Mohammadpur, Dhaka, Bangladesh</p>
          </Col>
          <Col xs={6} md={6} lg={3}>
            <div>
              <h2 className="text-center">Company</h2>
              <hr />
              <ul className="me-5">
                <ol>About</ol>
                <ol>Project</ol>
                <ol>Our Team</ol>
                <ol>Terms Conditions</ol>
                <ol>Submit Listing</ol>
              </ul>
            </div>
          </Col>
          <Col xs={6} md={6} lg={3}>
            <div>
              <h2 className="text-center">Quick Links</h2>
              <hr />
              <ul className="me-5">
                <ol>Quick Links</ol>
                <ol>Rentals</ol>
                <ol>Sales</ol>
                <ol>Contact</ol>
                <ol>Our blog</ol>
              </ul>
            </div>
          </Col>
          <Col xs={6} md={6} lg={3}>
            <div>
              <h2 className="text-center">About Us</h2>
              <hr />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Tempore, ratione quae praesentium nulla recusandae odio quisquam
                in eaque sed quam?
              </p>
            </div>
          </Col>
        </Row>
        <p className="text-center mt-4">CopyRight 2021 By Nazmul Suzon</p>
      </Container>
    </div>
  );
};

export default Footer;
