import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import codeai from "../../Assets/Projects/codeai.png";
import mirbx from "../../Assets/Projects/mirbx.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={codeai}
              isBlog={false}
              title="CodeAI"
              description="Your Coding ChatBot and Image Generator with Conversational Brilliance!"
              ghLink="https://github.com/Realtrickz"
              demoLink="https://codeai.aame.site"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mirbx}
              isBlog={false}
              title="MiRBX"
              description="nleash Your Imagination with MiRBX - Elevate Your Gaming Experience through Unique Style Enhancements!"
              ghLink="https://github.com/Realtrickz"
              demoLink="https://x.com/MiRBXPlugins"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
