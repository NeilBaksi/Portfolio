import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../assets/home-main.svg";
import Particle from "../Particle";
import Bio from "./Bio";
import Type from "./Type";
import Tilt from "react-parallax-tilt";

const Home = ({ resume }) => {
	return (
		<section>
			<Container fluid className="home-section" id="home">
				<Particle />
				<Container className="home-content">
					<Row>
						<Col md={7} className="home-header">
							<h1 className="heading" style={{ paddingBottom: "1rem" }}>
								{resume.basics.salutation}{" "}
								<span className="wave" role="img" aria-labelledby="wave">
									👋🏻
								</span>
							</h1>
							<h2 className="heading-name">
								I am <strong className="main-name">{resume.basics.name}</strong>
							</h2>
							<div style={{ padding: "3rem", textAlign: "left" }}>
								<Type labels={resume.basics.labels} />
							</div>
						</Col>
						<Col md={5} className="home-logo">
            				<Tilt>
								<img src={homeLogo} alt="home" className="img-fluid" style={{ maxHeight: "30rem" }} />
							</Tilt>
						</Col>
					</Row>
				</Container>
			</Container>
			<Bio resume={resume} />
		</section>
	);
};

export default Home;
