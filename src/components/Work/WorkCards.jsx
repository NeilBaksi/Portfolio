import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { FaExternalLinkAlt } from "react-icons/fa";
import { AiFillCaretRight } from "react-icons/ai";

const WorkCards = (props) => {
	const { details } = props;
	return (
		<Card className="work-card-view">
			<Card.Body>
				<Card.Title>{details.company}</Card.Title>
				<Card.Text style={{ textAlign: "center", fontSize: "0.8rem" }}>
					{details.current ? `Current Job as of ${details.startDate}` : `${details.startDate} to ${details.endDate}`}
				</Card.Text>
				<Card.Text style={{ textAlign: "center", fontSize: "1.25rem", fontWeight: 700 }}>{details.summary}</Card.Text>
				<p style={{ textAlign: "center", fontSize: "0.8rem" }}>Highlights:</p>
				<ul className="highlights">
					{details.highlights.map((highlight, index) => (
						<li key={index}>
							<AiFillCaretRight />
							{highlight}
						</li>
					))}
				</ul>
				<Button variant="primary" href={details.website} target="_blank">
					<FaExternalLinkAlt />
				</Button>
			</Card.Body>
		</Card>
	);
};
export default WorkCards;
