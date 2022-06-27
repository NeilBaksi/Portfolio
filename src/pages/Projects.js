import React, { Component } from "react";
import { List } from "./Jobs";

class Projects extends Component {
	render() {
		const { projects, basics } = this.props.resumeObj;

		return (
			<div className="card-container">
				<div className="card-content">
					{projects.map((key, index) => {
						return <List id={key} key={index} details={projects[index]} colors={basics.pallete[index % 9]} />;
					})}
				</div>
			</div>
		);
	}
}

export default Projects;
