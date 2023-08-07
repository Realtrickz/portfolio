import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.gif";
import Tilt from "react-parallax-tilt";

import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
            Hello, I'm Real trickz, a passionate full-stack developer with a knack for crafting captivating digital experiences.
              <br />
              <br />My world revolves around web development, where I weave magic with languages like <b className="purple">JavaScript</b> and <b className="purple">TypeScript</b>.
              <br />
              With a keen eye for detail, I specialize in building <b className="purple">dynamic websites</b>, <b className="purple">immersive Discord bots</b>, and <b className="purple">engaging games</b> that spark excitement.
              <br />
              My creative journey extends beyond the screen as I thrive on bringing innovative concepts to life. Leveraging the power of <b className="purple">Node.js</b> and the modern toolkit of JavaScript libraries and frameworks, such as <b className="purple">React.js</b> and <b className="purple">Next.js</b>, I transform ideas into polished, functional products that leave a lasting impact.
              Driven by an insatiable curiosity and a deep love for coding, I'm constantly exploring new avenues to push the boundaries of what's possible in the digital realm. Join me on this thrilling adventure as we transform visions into reality, one line of code at a time.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" id="pfp" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Realtrickz"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/RealtrickzYT"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              {/* <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/soumyajit4419/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li> */}
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
