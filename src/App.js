import React, { Component } from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import "./App.css";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import Header from "./pages/Header";
import Projects from "./pages/Projects";
import SkillList from "./pages/SkillList";
import Jobs from "./pages/Jobs";
import School from "./pages/School";
import Contact from "./pages/Contact";

class App extends Component {
	render() {
		const resume = this.props.resumeJson;
		const particleOptions = {
			background: {
				color: {
					value: "#ffffff",
				},
				opacity: 0.1,
			},
			fpsLimit: 120,
			interactivity: {
				events: {
					onClick: {
						enable: true,
						mode: "push",
					},
					onHover: {
						enable: true,
						mode: "repulse",
					},
					resize: true,
				},
				modes: {
					push: {
						quantity: 4,
					},
					repulse: {
						distance: 200,
						duration: 0.4,
					},
				},
			},
			particles: {
				color: {
					value: "#ffffff",
				},
				links: {
					color: "#ffffff",
					distance: 150,
					enable: true,
					opacity: 0.3,
					width: 1,
				},
				collisions: {
					enable: true,
				},
				move: {
					direction: "none",
					enable: true,
					outModes: {
						default: "bounce",
					},
					random: false,
					speed: 2,
					straight: false,
				},
				number: {
					density: {
						enable: true,
						area: 800,
					},
					value: 80,
				},
				opacity: {
					value: 0.3,
				},
				shape: {
					type: "circle",
				},
				size: {
					value: { min: 1, max: 5 },
				},
			},
			detectRetina: true,
		};
		const activeStyle = {
			fontWeight: "bold",
			boxShadow: "1px 0px 0px #03045e",
			backgroundColor: "#fff",
			color: "#03045e",
		};

		const particlesInit = async (main) => {
			await loadFull(main);
		};

		const particlesLoaded = (container) => {
			console.log(container);
		};

		return (
			<Router>
				<div className="App">
					<div style={{ position: "absolute" }}>
						<Particles id="tsparticles" init={particlesInit} loaded={particlesLoaded} options={particleOptions} />
					</div>
					<ul className="App__pages">
						<NavLink exact to={"/"} activeStyle={activeStyle} className="chips blue">
							Work
						</NavLink>
						<NavLink exact to={"/📖"} activeStyle={activeStyle} className="chips blue">
							Projects
						</NavLink>
						<NavLink exact to={"/💻"} activeStyle={activeStyle} className="chips blue">
							Skills
						</NavLink>
						<NavLink exact to={"/🎒"} activeStyle={activeStyle} className="chips blue">
							Education
						</NavLink>
						<NavLink exact to={"/📧"} activeStyle={activeStyle} className="chips blue">
							Contact
						</NavLink>
					</ul>
					<Header resumeObj={resume} className="Left" />
					<Route exact path={"/"} render={({ match }) => <Jobs resumeObj={resume} />} />
					<Route exact path={"/📖"} render={({ match }) => <Projects resumeObj={resume} />} />
					<Route exact path={"/💻"} render={({ match }) => <SkillList resumeObj={resume} />} />
					<Route exact path={"/🎒"} render={({ match }) => <School education={resume.education[0]} />} />
					<Route exact path={"/📧"} render={({ match }) => <Contact info={resume.basics} />} />
				</div>
			</Router>
		);
	}
}

export default App;
