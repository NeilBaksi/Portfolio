import React, { Suspense, lazy } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Tilt from "react-parallax-tilt";
import Aboutcard from "./AboutCard";
import laptopImg from "../../assets/about.png";

const Github = lazy(() => import("./Github"));
const Techstack = lazy(() => import("./Techstack"));
const Toolstack = lazy(() => import("./Toolstack"));

const rowStyle = { padding: "0.75rem" };
const col7Style = { paddingTop: "2rem", paddingBottom: "3rem" };
const col5Style = { paddingTop: "11.25rem", paddingBottom: "3rem" };
const headingStyle = { fontSize: "2.1em", paddingBottom: "1.25rem" };

const About = ({ resume }) => (
  <Container fluid className="about-section">
    <Particle />
    <Container>
      <Row className="justify-content-center" style={rowStyle}>
        <Col md={7} className="d-flex flex-column justify-content-center" style={col7Style}>
          <h1 style={headingStyle}>
            Know Who <strong className="purple">I AM</strong>
          </h1>
          <Aboutcard resume={resume} />
        </Col>
        <Col md={5} className="about-img" style={col5Style}>
          <blockquote className="blockquote mb-0">
            <Tilt>
              <picture>
                <source srcSet="/assets/about.avif" type="image/avif" />
                <source srcSet="/assets/about.webp" type="image/webp" />
                <img src={laptopImg} alt="Person at laptop" className="img-fluid" loading="lazy" />
              </picture>
            </Tilt>
            <br />
            <br />
            <p className="quote-text">"Don't count the days, make the days count."</p>
            <footer className="blockquote-footer">Muhammad Ali</footer>
          </blockquote>
        </Col>
      </Row>
      <h1 className="work-heading">
        Professional <strong className="purple">Skillset </strong>
      </h1>
      <Suspense fallback={<div>Loading skills...</div>}>
        <Techstack />
      </Suspense>
      <h1 className="work-heading">
        <strong className="purple">Tools</strong> I use
      </h1>
      <Suspense fallback={<div>Loading tools...</div>}>
        <Toolstack />
      </Suspense>
      <Suspense fallback={<div>Loading GitHub info...</div>}>
        <Github />
      </Suspense>
    </Container>
  </Container>
);

export default About;
