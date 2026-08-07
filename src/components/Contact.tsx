"use client";

import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <footer className="contact-section section-container" id="contact" aria-label="Contact">
      <div className="contact-container">
        <h2>Contact</h2>
        <div className="contact-flex">
          <div className="contact-box">
            <h3>Connect</h3>
            <p>
              <a
                href="https://www.linkedin.com/in/neil-supratik-baksi/"
                target="_blank"
                rel="noreferrer"
                data-cursor="disable"
              >
                LinkedIn — neil-supratik-baksi
              </a>
            </p>
            <h3>Education</h3>
            <p>
              MBA, Melbourne Business School — 2024–2026
            </p>
            <p>
              BE (Hons) Software Engineering, UNSW Sydney — 2015–2019
            </p>
          </div>
          <div className="contact-box">
            <h3>Social</h3>
            <a
              href="https://github.com/NeilBaksi"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              GitHub <MdArrowOutward />
            </a>
            <a
              href="https://www.linkedin.com/in/neil-supratik-baksi/"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              LinkedIn <MdArrowOutward />
            </a>
            <a
              href="mailto:snb.1996@gmail.com"
              data-cursor="disable"
              className="contact-social"
            >
              Email <MdArrowOutward />
            </a>
            <a
              href="https://www.instagram.com/neilbaksi"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              Instagram <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h4>
              Designed and Developed <br /> by <span>Neil Baksi</span>
            </h4>
            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;