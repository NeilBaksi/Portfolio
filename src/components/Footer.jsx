import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub, AiFillFacebook, AiFillInstagram, AiFillLinkedin, AiOutlineMail } from "react-icons/ai";

const Footer = ({ resume }) => {
	const year = new Date().getFullYear();

	const socialLinks = [
		{
			href: resume.basics.profiles.find(profile => profile.network === "Email").url,
			icon: <AiOutlineMail />,
		},
		{
			href: resume.basics.profiles.find(profile => profile.network === "Github").url,
			icon: <AiFillGithub />,
		},
		{
			href: resume.basics.profiles.find(profile => profile.network === "LinkedIn").url,
			icon: <AiFillLinkedin />,
		},
		{
			href: resume.basics.profiles.find(profile => profile.network === "Instagram").url,
			icon: <AiFillInstagram />,
		},
		{
			href: resume.basics.profiles.find(profile => profile.network === "Facebook").url,
			icon: <AiFillFacebook />,
		},
	];

	return (
		<Container fluid className="footer">
			<Row>
				<Col md="4" className="footer-copywright">
					<h3>Made by {resume.basics.name}</h3>
				</Col>
				<Col md="4" className="footer-copywright">
					<h3>Copyright © {year} {resume.basics.initials}</h3>
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
