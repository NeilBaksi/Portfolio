import React, { Component } from "react";
import Jobs from "./Jobs";

class Card extends Component {
	render() {
		const { work } = this.props.resumeObj;
		const bgColors = ["#4A4A4A", "#FE3B80", "#3B80FE", "#FEB93B", "#54E7C7"];

		return (
			<div className="Card-Container">
				<div className="Card-content">
					{work.map((key, index) => {
						return <Jobs key={index} details={work[index]} colors={bgColors[index % 4]} />;
					})}
				</div>
			</div>
		);
	}
}

export default Card;
