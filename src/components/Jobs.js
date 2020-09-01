import React, { Component } from "react";

class Jobs extends Component {
	render() {
		const { details, colors } = this.props;
		return (
			<div className="Jobs-container" style={{ background: colors }}>
				<div className="jobs-flex">
					<a href={details.website} target="_blank" rel="noopener noreferrer" className="jobs-links">
						<h3>{details.company}</h3>
					</a>
					<div>{details.position}</div>
				</div>

				<div className="jobs-current">
					{details.current
						? `Current Job as of ${details.startDate}`
						: `${details.startDate} to ${details.endDate}`}
				</div>
				<br />

				<div className="job-summary">
					{details.summary}
					<ul className="job-highlights">
						{details.highlights.map((key, index) => {
							return <li key={index}>{details.highlights[index]}</li>;
						})}
					</ul>
					<a href={details.link} target="_blank" rel="noopener noreferrer">
						{details.link}
					</a>
				</div>
			</div>
		);
	}
}

export default Jobs;
