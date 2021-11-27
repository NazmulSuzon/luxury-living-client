import React from "react";
import { Container, Nav, Navbar,Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from '../../../image/Image/logo.png'
import './NavigationBar.css'

const NavigationBar = () => {
  return (
    <div className="fw-bold top-banner pb-5">
      <Navbar collapseOnSelect expand="lg">
        <Container>
          {/* <Navbar.Brand>React-Bootstrap</Navbar.Brand> */}
          <img style={{width:'125px', height:'51px'}} src={logo} alt="" />
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">
              <Link to="home">Home</Link>
              <Link to="about">About Us</Link>
              <Link to="projects">Projects</Link>
            </Nav>
            <Nav>
              <Link to="login" className="border-0"><Button className="px-4 primary-color border-0">Login</Button></Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavigationBar;
