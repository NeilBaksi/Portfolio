import React, { Component } from "react";
import logo from "../logo.svg";

class Header extends Component {
	render() {
		const { basics } = this.props.resumeObj;

		return (
			<div className="Header-Container">
				<div className="Header-content">
					<h2 className="Header-name">{basics.name}</h2>
					<h4 className="Header-label">{basics.label}</h4>
					<h4 className="Header-label">Currently in {basics.location.city} 🐨</h4>
					<br></br>
					<p className="Header-desc Header-Text">{basics.summary}</p>
					<p className="Header-Text">{basics.interests}</p>
					<p className="Header-Text">Hobbies – {basics.extraInterests}</p>
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
			</div>
		);
	}
}

export default Header;
