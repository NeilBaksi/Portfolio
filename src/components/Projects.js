import React, { Component } from "react";
import Jobs from "./Jobs";

class Projects extends Component {
	render() {
		const { projects } = this.props.resumeObj;
		const bgColors = ["#4A4A4A", "#FE3B80", "#3B80FE", "#FEB93B", "#54E7C7"];
		return (
			<div className="Card-Container">
				<div className="Card-content">
					{projects.map((key, index) => {
						return <Jobs key={index} details={projects[index]} colors={bgColors[index % 4]} />;
					})}
				</div>
			</div>
		);
	}
}

export default Projects;
