import React from "react";
import {
  Col,
  Container,
  FloatingLabel,
  Form,
  Row,
  Button,
} from "react-bootstrap";

const Contact = () => {
  return (
    <Container>
      <p className="text-center mt-5">Contact</p>
      <h3 className="text-center">Let us handle your </h3>
      <h3 className="text-center">project, professionally.</h3>
      <div className="d-flex justify-content-center">
      <Form className="p-5" style={{width:"800px"}}>
        <Row className="mb-3">
          <Col>
            <Form.Label>First name</Form.Label>
            <Form.Control placeholder="First name" />
          </Col>
          <Col>
            <Form.Label>Last name</Form.Label>
            <Form.Control placeholder="Last name" />
          </Col>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control type="phone" placeholder="Phone Number" />
          </Form.Group>
        </Row>
        <FloatingLabel controlId="floatingTextarea2" label="Your Message">
          <Form.Control
            as="textarea"
            placeholder="Your Message"
            style={{ height: "100px" }}
          />
        </FloatingLabel>
        <div className="d-flex justify-content-center">
          <Button
            className="primary-color border-0 mt-3"
            variant="primary"
            type="submit"
          >
            Submit
          </Button>
        </div>
      </Form>
      </div>
    </Container>
  );
};

export default Contact;
