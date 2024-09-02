import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import WorkCard from "./WorkCards";
import Particle from "../Particle";

const Work = ({ resume, type }) => {
	const { projects, work } = resume;
	const list = type === "Work" ? work : projects
	return (
		<Container fluid className="work-section">
			<Particle />
			<Container>
				<h1 className="work-heading">
					My Recent <strong className="purple">{type}</strong>
				</h1>
				<p style={{ color: "white" }}>Here are a few projects I've worked on recently.</p>
				{list.map((item, index) => (
					<Row style={{ justifyContent: "center", paddingBottom: "0.75rem" }}>
						<Col md={8} className="work-card">
							<WorkCard key={index} details={item} />
						</Col>
					</Row>
				))}
			</Container>
		</Container>
	);
};

export default Work;
