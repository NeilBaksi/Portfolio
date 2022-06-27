import React, { Component } from "react";

class Jobs extends Component {
	render() {
		const { work, basics } = this.props.resumeObj;

		return (
			<div className="card-container">
				<div className="card-content">
					{work.map((key, index) => {
						console.log(basics.pallete[index % 9]);
						return <List id={key} key={index} details={work[index]} colors={basics.pallete[index % 9]} />;
					})}
				</div>
			</div>
		);
	}
}

export const List = (props) => {
	const { details, colors } = props;
	return (
		<div className="jobs-container" style={{ background: colors }}>
			<div className="jobs-flex">
				<span className="jobs-links">
					<a href={details.website} target="_blank" rel="noopener noreferrer">
						<h3>{details.company}</h3>
					</a>
					{/* eslint-disable-next-line */}
					<span className="link-icon">🔗</span>
				</span>
				<div>{details.position}</div>
			</div>

			<div className="jobs-current">{details.current ? `Current Job as of ${details.startDate}` : `${details.startDate} to ${details.endDate}`}</div>
			<br />

			<div className="job-summary">
				{details.summary}
				<ul className="job-highlights">
					{details.highlights.map((key, index) => {
						return <li key={index}>{details.highlights[index]}</li>;
					})}
				</ul>
				{details.link && (
					<a className="links" href={details.link} target="_blank" rel="noopener noreferrer">
						Click
					</a>
				)}
			</div>
		</div>
	);
};

export default Jobs;
