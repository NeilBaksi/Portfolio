import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiJavascript1, DiReact, DiNodejs, DiMongodb, DiPython, DiGit, DiJava } from "react-icons/di";
import {
	SiCss3,
	SiFirebase,
	SiNextdotjs,
	SiMysql,
	SiTypescript,
	SiGatsby,
	SiShopify,
	SiHtml5,
	SiJquery,
	SiJest,
	SiPowershell,
	SiPerl,
	SiStorybook,
	SiAmazonaws,
	SiGoogleanalytics,
	SiSalesforce,
} from "react-icons/si";
import { TbBrandRedux, TbBrandWebflow, TbBrandCypress } from "react-icons/tb";

const Techstack = () => {
	return (
		<Row style={{ justifyContent: "center", paddingBottom: "3rem" }}>
			<Col xs={4} md={2} className="tech-icons">
				<DiReact />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<DiJavascript1 />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<SiTypescript />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<DiNodejs />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<SiStorybook />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<TbBrandCypress />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<SiJest />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<TbBrandRedux />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<SiAmazonaws />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<SiGoogleanalytics />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<SiSalesforce />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<SiGatsby />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<SiNextdotjs />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<TbBrandWebflow />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<DiMongodb />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<SiShopify />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<DiGit />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<SiFirebase />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<SiHtml5 />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<SiCss3 />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<SiJquery />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<SiMysql />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<DiPython />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<DiJava />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<SiPowershell />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<SiPerl />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<SiPowershell />
			</Col>
		</Row>
	);
};

export default Techstack;
