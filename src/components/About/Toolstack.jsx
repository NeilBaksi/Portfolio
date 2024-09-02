import React from "react";
import { Col, Row } from "react-bootstrap";
import { SiVisualstudiocode, SiPostman, SiSlack, SiMacos, SiFigma, SiAdobexd, SiMiro, SiJira, SiSquarespace, SiWix, SiWordpress, SiTrello, SiAsana, SiBigcommerce } from "react-icons/si";

const Toolstack = () => {
	return (
		<Row style={{ justifyContent: "center", paddingBottom: "3rem" }}>
			<Col xs={4} md={2} className="tech-icons">
				<SiMacos />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<SiVisualstudiocode />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<SiPostman />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<SiSlack />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<SiFigma />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<SiAdobexd />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<SiJira />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<SiMiro />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<SiSquarespace />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<SiWix />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<SiWordpress />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<SiTrello />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<SiAsana />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<SiBigcommerce />
			</Col>
		</Row>
	);
};

export default Toolstack;
