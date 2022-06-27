import React, { Component } from "react";
import logo from "../logo.svg";

class Header extends Component {
	render() {
		const { basics } = this.props.resumeObj;

		return (
			<div className="header-container">
				<div className="header-content">
					<h2 className="header-name">{basics.name}</h2>
					<h4 className="header-label">{basics.label}</h4>
					<h4 className="header-label">Currently in {basics.location.city} 🐨</h4>
					<br></br>
					<p className="header-desc header-text">{basics.summary}</p>
					<p className="header-text">Key Interests – {basics.interests}</p>
					<p className="header-text">Hobbies – {basics.extraInterests}</p>
					<div className="made-with-react">
						<a href="https://github.com/NeilBaksi/Portfolio" target="_blank" rel="noopener noreferrer">
							made with
							<img src={logo} className="App-logo" alt="Made With React Logo" />
						</a>
						<a href="https://goo.gl/aNfKUK" target="_blank" rel="noopener noreferrer">
							<button className="chips blue" style={{ fontSize: "16px" }}>
								View Resume
							</button>
						</a>
					</div>
					<div className="made-with-react-mob">
						<a href="https://goo.gl/aNfKUK" target="_blank" rel="noopener noreferrer">
							<button className="chips blue" style={{ fontSize: "16px" }}>
								View Resume
							</button>
						</a>
					</div>
				</div>
				<div className="scroll-prompt">
					<span>⬇️</span>
					<span>⬇️</span>
				</div>
			</div>
		);
	}
}

export default Header;
