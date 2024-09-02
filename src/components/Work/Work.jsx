import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import WorkCard from "./WorkCards";
import Particle from "../Particle";
import Tilt from "react-parallax-tilt";

const Work = ({ resume, type }) => {
	const { projects, work } = resume;
	const list = type === "Work" ? work : projects
	const text = type === "Work" ? "My work history." : "Here are a few projects I've worked on recently."
	return (
		<Container fluid className="work-section">
			<Particle />
			<Container>
				<h1 className="work-heading">
					My Recent <strong className="purple">{type}</strong>
				</h1>
				<p style={{ color: "white" }}>{text}</p>
				{list.map((item, index) => (
					<Row style={{ justifyContent: "center", paddingBottom: "0.75rem" }}>
						<Col md={8} className="work-card">
							<Tilt>
							<WorkCard key={index} details={item} />
							</Tilt>
						</Col>
					</Row>
				))}
			</Container>
		</Container>
	);
};

export default Work;
