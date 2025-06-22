import React from "react";
import { Row } from "react-bootstrap";

const Github = () => (
  <Row style={{ justifyContent: "center", paddingBottom: "0.75rem" }}>
    <h1 className="work-heading" style={{ paddingBottom: "1.25rem" }}>
      Days I <strong className="purple">Code</strong>
    </h1>
    <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
      <img
        src="https://ghchart.rshah.org/NeilBaksi"
        alt="NeilBaksi's GitHub contribution chart"
        style={{ width: "100%", maxWidth: 800, background: "#fff", borderRadius: 8, boxShadow: "0 2px 8px rgba(0,0,0,0.05)" }}
      />
    </div>
  </Row>
);

export default Github;
