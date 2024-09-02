import React from "react";
import Card from "react-bootstrap/Card";
import { AiFillCaretRight } from "react-icons/ai";

const AboutCard = ({ resume }) => {
	const currentWork = resume.work.find(work => work.current);
	const { interests, hobbies} = resume.basics;
	return (
		<Card className="quote-card-view">
			<Card.Body>
				<blockquote className="blockquote mb-0">
					<p className="home-about-body">
						I am <span className="purple">{resume.basics.name}</span> from <span className="purple">{resume.basics.location.city}, {resume.basics.location.country}.</span>
						<br />
						Currently employed as a <span className="purple">{currentWork.position}</span> at <span className="purple">{currentWork.company}</span>.
						<br />
						{resume.basics.label}
						<br />
						<br />
						Key Interests:
					</p>
					<ul>
						{interests.map((interest, index) => (
							<li key={index} className="about-activity">
								<AiFillCaretRight /> {interest}
							</li>
						))}
					</ul>
					<p className="home-about-body">
						Hobbies:
					</p>
					<ul>
						{hobbies.map((hobby, index) => (
							<li key={index} className="about-activity">
								<AiFillCaretRight /> {hobby}
							</li>
						))}
					</ul>
				</blockquote>
			</Card.Body>
		</Card>
	);
};

export default AboutCard;
