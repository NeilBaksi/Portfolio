import React from "react";
import { Container, Row, Button } from "react-bootstrap";
import Particle from "../Particle";
import { AiOutlineDownload } from "react-icons/ai";
import { Viewer, Worker } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

// Path to your PDF in the public folder
const pdfUrl = "/Supratik_Baksi_Resume.pdf";

const ResumeRender = () => {
    const defaultLayoutPluginInstance = defaultLayoutPlugin();

    return (
        <Container fluid className="resume-section">
            <Particle />
            <Row className="justify-content-center" style={{ position: "relative" }}>
                <Button
                    variant="primary"
                    href={pdfUrl}
                    target="_blank"
                    style={{ maxWidth: "23rem" }}
                >
                    <AiOutlineDownload /> &nbsp;Download CV
                </Button>
            </Row>
            <Row className="justify-content-center" style={{ position: "relative", margin: "2rem 0" }}>
                <div style={{
                    width: "100%",
                    maxWidth: 900,
                    height: "750px",
                    border: "1px solid #eee",
                    borderRadius: 8,
                    boxShadow: "0 2px 8px rgba(0,0,0,0.05)"
                }}>
                    <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
                        <Viewer
                            fileUrl={pdfUrl}
                            plugins={[defaultLayoutPluginInstance]}
                        />
                    </Worker>
                </div>
            </Row>
        </Container>
    );
};

export default ResumeRender;
