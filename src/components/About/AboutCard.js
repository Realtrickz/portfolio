import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello Folks, I am <span className="purple">Real trickz </span>
            <br /> I am a skilled web, extension, and Roblox developer proficient in HTML, CSS, JavaScript, TypeScript, and Lua. I excel in frameworks like Vue, React, and Vite, and I am familiar with Vuetify, Bootstrap, and Plain Stylesheet for captivating designs.
            {/* <br />
            Additionally, I am currently employed as a software developer at
            Juspay.
            <br /> */}
            <br />
            Other than coding, i enjoy
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> UI/UX Designing
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Code your dreams into reality, for every line you write brings you closer to innovation and endless possibilities."{" "}
          </p>
          <footer className="blockquote-footer">Real trickz</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
