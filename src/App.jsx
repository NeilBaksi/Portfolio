import React, { useState, useEffect } from "react";
import Preloader from "./components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Work from "./components/Work/Work";
import Footer from "./components/Footer";
import Resume from "./components/Resume/ResumeRender";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

const App = ({ resume }) => {
	const [load, setLoad] = useState(true);

	useEffect(() => {
		const timer = setTimeout(() => setLoad(false), 1200);
		return () => clearTimeout(timer);
	}, []);

	return (
		<Router>
			<Preloader load={load} />
			<div className={`App ${load ? "no-scroll" : "scroll"}`}>
				<Navbar brand={resume.basics.initials} />
				<ScrollToTop />
				<Routes>
					<Route path="/" element={<Home resume={resume} />} />
					<Route path="/project" element={<Work resume={resume} type="Projects" />} />
					<Route path="/work" element={<Work resume={resume} type="Work" />} />
					<Route path="/about" element={<About resume={resume} />} />
					<Route path="/resume" element={<Resume resume={resume} />} />
					<Route path="*" element={<Navigate to="/" />} />
				</Routes>
				<Footer resume={resume} />
			</div>
		</Router>
	);
};

export default App;
