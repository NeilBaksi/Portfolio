import React, { Component } from "react";

class SkillList extends Component {
	render() {
		const { skills } = this.props.resumeObj;

		return (
			<div className="modal-container bg-gray" style={{ display: "flex" }}>
				<div className="modal-content">
					<div className="skills-container">
						<h1 className="header-name-modal">Skill Set:</h1>
						<ul className="skills-list">
							{skills.keywords.map((key, index) => (
								<li key={key} className="chips blue">
									{skills.keywords[index]}
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		);
	}
}

export default SkillList;
