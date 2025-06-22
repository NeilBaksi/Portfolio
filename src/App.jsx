import React, { useState, useEffect, Suspense, lazy, memo } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

// Lazy load route-based components
const Preloader = memo(lazy(() => import("./components/Pre")));
const Navbar = memo(lazy(() => import("./components/Navbar")));
const Home = lazy(() => import("./components/Home/Home"));
const About = lazy(() => import("./components/About/About"));
const Work = lazy(() => import("./components/Work/Work"));
const Footer = memo(lazy(() => import("./components/Footer")));
const Resume = lazy(() => import("./components/Resume/ResumeRender"));
const ScrollToTop = memo(lazy(() => import("./components/ScrollToTop")));

const App = ({ resume }) => {
  const [load, setLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoad(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Suspense fallback={<div />}>
        <Preloader load={load} />
      </Suspense>
      <div className={`App ${load ? "no-scroll" : "scroll"}`}>
        <Suspense fallback={null}>
          <Navbar brand={resume?.basics?.initials || ""} />
        </Suspense>
        <Suspense fallback={null}>
          <ScrollToTop />
        </Suspense>
        <Suspense fallback={<div className="route-loading">Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home resume={resume} />} />
            <Route path="/project" element={<Work resume={resume} type="Projects" />} />
            <Route path="/work" element={<Work resume={resume} type="Work" />} />
            <Route path="/about" element={<About resume={resume} />} />
            <Route path="/resume" element={<Resume resume={resume} />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Suspense>
        <Suspense fallback={null}>
          <Footer resume={resume} />
        </Suspense>
      </div>
    </Router>
  );
};

export default App;
