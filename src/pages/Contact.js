import React from "react";
import CSSTransitionGroup from "react-addons-css-transition-group";

const Contact = (props) => {
	const { email, profiles } = props.info;
	const layout = { display: "flex", flexDirection: "column", alignItems: "flex-start" };
	return (
		<div className="modal-container bg-gray" style={{ display: "flex" }}>
			<div className="modal-content">
				<CSSTransitionGroup style={layout} component="div" transitionName="slide" transitionEnterTimeout={5000} transitionLeaveTimeout={3000}>
					<h1 className="header-name-modal">Contact:</h1>
					<a href="mailto:snb.1996@gmail.com.com?subject=Resume%20Inquiry" style={{ color: "#4a4a4a", textDecoration: "none" }}>
						<span role="img" aria-label="email">
							📧
						</span>{" "}
						: {email}
					</a>
					{profiles.map((key, index) => {
						return (
							<a href={key.url} key={index} style={{ color: "#4a4a4a", textDecoration: "none" }} target="_blank" rel="noopener noreferrer">
								<span role="img" aria-label={key.network}>
									{key.emoji}
								</span>{" "}
								: {key.url}
							</a>
						);
					})}
				</CSSTransitionGroup>
			</div>
		</div>
	);
};

export default Contact;
