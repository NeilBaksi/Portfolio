import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../assets/about.png";
import Toolstack from "./Toolstack";
import Tilt from "react-parallax-tilt";

const About = ({ resume }) => (
	<Container fluid className="about-section">
		<Particle />
		<Container>
			<Row className="justify-content-center" style={{ padding: "0.75rem" }}>
				<Col md={7} className="d-flex flex-column justify-content-center" style={{ paddingTop: "2rem", paddingBottom: "3rem" }}>
					<h1 style={{ fontSize: "2.1em", paddingBottom: "1.25rem" }}>
						Know Who <strong className="purple">I AM</strong>
					</h1>
					<Aboutcard resume={resume} />
				</Col>
				<Col md={5} className="about-img" style={{ paddingTop: "11.25rem", paddingBottom: "3rem" }}>
					<blockquote className="blockquote mb-0">
						<Tilt>
							<img src={laptopImg} alt="about" className="img-fluid" />
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
			<Techstack />
			<h1 className="work-heading">
				<strong className="purple">Tools</strong> I use
			</h1>
			<Toolstack />
			<Github />
		</Container>
	</Container>
);

export default About;
