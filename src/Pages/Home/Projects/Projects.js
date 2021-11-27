import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import ProjectData from "../../../FakeData/ProjectsData.json";
import ProjectsCard from "./ProjectsCard";

const Projects = () => {
  const [project, setProject] = useState([]);
  useEffect(() => {
    setProject(ProjectData);
  }, []);
//   console.log(project);
  return (
    <Container className="mt-5">
      <p className="text-center">Projects</p>
      <h3 className="text-center">Discover the latest Interior Design</h3>
      <h3 className="text-center">available today</h3>
      <Row xs={1} md={2} lg={3} className="g-5 mt-5">
        {project.map((data) => {
          return <ProjectsCard key={data.id} data={data}></ProjectsCard>;
        })}
      </Row>
    </Container>
  );
};

export default Projects;
