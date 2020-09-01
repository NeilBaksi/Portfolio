import React from "react";
import CSSTransitionGroup from "react-addons-css-transition-group";

const Contact = props => {
	const { email } = props.info;
	const layout = { display: "flex", flexDirection: "column", alignItems: "flex-start" };
	return (
		<div className="Modal-Container bg-gray" style={{ display: "flex" }}>
			<div className="Modal-content">
				<CSSTransitionGroup
					style={layout}
					component="div"
					transitionName="slide"
					transitionEnterTimeout={5000}
					transitionLeaveTimeout={3000}>
					<h1 className="Header-name-modal">Contact:</h1>
					<a
						href="mailto:snb.1996@gmail.com.com?subject=Resume%20Inquiry"
						style={{ color: "#4a4a4a", textDecoration: "none" }}>
						<span role="img" aria-label="email">
							📧
						</span>{" "}
						: {email}
					</a>
					<a
						href="https://github.com/NeilBaksi/"
						style={{ color: "#4a4a4a", textDecoration: "none" }}
						target="_blank"
						rel="noopener noreferrer">
						<span role="img" aria-label="github">
							💻
						</span>{" "}
						: https://github.com/NeilBaksi/
					</a>
				</CSSTransitionGroup>
			</div>
		</div>
	);
};

export default Contact;
