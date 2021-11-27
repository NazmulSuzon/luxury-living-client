import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import ServiceData from '../../FakeData/ServiceData.json'
import ServiceCard from "./ServiceCard";

const Services = () => {
    const [service, setService] = useState([]);
    useEffect(() => {
        setService(ServiceData);
    }, [])
  return (
    <Container>
      <p className="text-center mt-5">Service</p>
      <h3 className="text-center">We're an agency tailored to all</h3>
      <h3 className="text-center">clients' needs that always delivers</h3>
      <Row xs={1} md={2} lg={3} className="g-5 mt-5">
        {service.map((data) => {
          return <ServiceCard key={data.id} data={data}></ServiceCard>;
        })}
      </Row>
    </Container>
  );
};

export default Services;
