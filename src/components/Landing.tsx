"use client";

import { PropsWithChildren } from "react";
import "./styles/Landing.css";

const Landing = ({ children }: PropsWithChildren) => {
  return (
    <>
      <section className="landing-section" id="landingDiv" aria-label="Introduction">
        <div className="landing-container">
          <div className="landing-intro">
            <h2>Hello! I'm</h2>
            <h1>
              NEIL
              <br />
              <span>BAKSI</span>
            </h1>
          </div>
          <div className="landing-info">
            <h3>Product Engineer · MBA</h3>
            <h2 className="landing-info-h2">
              <div className="landing-h2-1">Product</div>
              <div className="landing-h2-2">Engineering</div>
            </h2>
            <h2>
              <div className="landing-h2-info">MBA</div>
              <div className="landing-h2-info-1">Strategy</div>
            </h2>
          </div>
        </div>
        {children}
      </section>
    </>
  );
};

export default Landing;