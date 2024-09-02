import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../assets/avatar.png";
import Tilt from "react-parallax-tilt";
import { AiFillGithub, AiFillFacebook, AiFillInstagram, AiFillLinkedin, AiOutlineMail } from "react-icons/ai";

const Bio = ({ resume }) => {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h3 className="section-title">
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h3>
            <p className="home-about-body">
              {resume.basics.summary.split("\n").map((text, index) => (
                <React.Fragment key={index}>
                  {text}
                  <br />
                </React.Fragment>
              ))}
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h3 className="section-title">FIND ME ON</h3>
            <p>
              Feel free to <span className="purple">connect</span> with me
            </p>
            <ul className="home-about-social-links">
              {[
                { href: resume.basics.profiles.find(profile => profile.network === "Email").url, icon: <AiOutlineMail /> },
                { href: resume.basics.profiles.find(profile => profile.network === "Github").url, icon: <AiFillGithub /> },
                { href: resume.basics.profiles.find(profile => profile.network === "LinkedIn").url, icon: <AiFillLinkedin /> },
                { href: resume.basics.profiles.find(profile => profile.network === "Instagram").url, icon: <AiFillInstagram /> },
                { href: resume.basics.profiles.find(profile => profile.network === "Facebook").url, icon: <AiFillFacebook /> }
              ].map((social, index) => (
                <li key={index} className="social-icons">
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour home-social-icons"
                  >
                    {social.icon}
                  </a>
                </li>
              ))}
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Bio;
