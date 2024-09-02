import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub, AiFillFacebook, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";

const Footer = () => {
	const year = new Date().getFullYear();

	const socialLinks = [
		{
			href: "https://github.com/NeilBaksi",
			icon: <AiFillGithub />,
		},
		{
			href: "https://au.linkedin.com/in/neil-supratik-baksi",
			icon: <AiFillLinkedin />,
		},
		{
			href: "https://www.instagram.com/neilbaksi/?hl=en",
			icon: <AiFillInstagram />,
		},
		{
			href: "https://www.facebook.com/supratik.neil.baksi/",
			icon: <AiFillFacebook />,
		},
	];

	return (
		<Container fluid className="footer">
			<Row>
				<Col md="4" className="footer-copywright">
					<h3>Made by Supratik Neil Baksi</h3>
				</Col>
				<Col md="4" className="footer-copywright">
					<h3>Copyright © {year} SNB</h3>
				</Col>
				<Col md="4" className="footer-body">
					<ul className="footer-icons">
						{socialLinks.map(({ href, icon }, index) => (
							<li className="social-icons" key={index}>
								<a href={href} style={{ color: "white" }} target="_blank" rel="noopener noreferrer">
									{icon}
								</a>
							</li>
						))}
					</ul>
				</Col>
			</Row>
		</Container>
	);
};

export default Footer;
