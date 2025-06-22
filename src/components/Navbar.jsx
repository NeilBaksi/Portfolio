import React, { useState, useEffect, useCallback } from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { CgGitFork, CgFileDocument } from "react-icons/cg";
import {
  AiFillStar,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
  AiOutlineLaptop,
} from "react-icons/ai";

const ICON_STYLE = { marginBottom: "0.375rem" };

const NavBar = ({ brand }) => {
  const [expanded, setExpanded] = useState(false);
  const [navColour, setNavColour] = useState(false);

  // Scroll event handler for sticky navbar color
  useEffect(() => {
    const handleScroll = () => setNavColour(window.scrollY >= 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Toggle and close handlers, memoized for performance
  const toggleNavbar = useCallback(() => setExpanded((prev) => !prev), []);
  const closeNavbar = useCallback(() => setExpanded(false), []);

  return (
    <Navbar
      expanded={expanded}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
      role="navigation"
      aria-label="Main navigation"
      data-bs-theme="light"
    >
      <Container>
        <Navbar.Brand as={Link} to="/" className="d-flex" tabIndex={0}>
          {brand}
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={toggleNavbar}
          aria-expanded={expanded}
          aria-label={expanded ? "Close navigation" : "Open navigation"}
        >
          <span />
          <span />
          <span />
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" as="ul">
            <Nav.Item as="li">
              <Nav.Link
                as={Link}
                to="/"
                onClick={closeNavbar}
                aria-label="Home"
              >
                <AiOutlineHome style={ICON_STYLE} aria-hidden="true" /> Home
              </Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link
                as={Link}
                to="/about"
                onClick={closeNavbar}
                aria-label="About"
              >
                <AiOutlineUser style={ICON_STYLE} aria-hidden="true" /> About
              </Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link
                as={Link}
                to="/work"
                onClick={closeNavbar}
                aria-label="Work"
              >
                <AiOutlineLaptop style={ICON_STYLE} aria-hidden="true" /> Work
              </Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link
                as={Link}
                to="/project"
                onClick={closeNavbar}
                aria-label="Projects"
              >
                <AiOutlineFundProjectionScreen style={ICON_STYLE} aria-hidden="true" /> Projects
              </Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link
                as={Link}
                to="/resume"
                onClick={closeNavbar}
                aria-label="Resume"
              >
                <CgFileDocument style={ICON_STYLE} aria-hidden="true" /> Resume
              </Nav.Link>
            </Nav.Item>
            <Nav.Item as="li" className="fork-btn">
              <Button
                href="https://github.com/NeilBaksi/Portfolio"
                target="_blank"
                rel="noopener noreferrer"
                className="fork-btn-inner"
                aria-label="View source code on GitHub"
              >
                <CgGitFork style={{ fontSize: "1.2em" }} aria-hidden="true" />{" "}
                <AiFillStar style={{ fontSize: "1.1em" }} aria-hidden="true" />
                <span className="visually-hidden">GitHub Repository</span>
              </Button>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
