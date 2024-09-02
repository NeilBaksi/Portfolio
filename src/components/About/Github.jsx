import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

const Github = () => {
	return (
		<Row style={{ justifyContent: "center", paddingBottom: "0.75rem" }}>
			<h1 className="work-heading" style={{ paddingBottom: "1.25rem" }}>
				Days I <strong className="purple">Code</strong>
			</h1>
			<GitHubCalendar username="NeilBaksi" blockSize={15} blockMargin={5} color="#c084f5" fontSize={16} />
		</Row>
	);
};

export default Github;
