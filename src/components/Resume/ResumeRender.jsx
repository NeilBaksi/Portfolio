import React, { useState, useEffect } from "react";
import { Container, Row, Button } from "react-bootstrap";
import Particle from "../Particle";
import pdf from "../../assets/../assets/Supratik_Baksi_Resume.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const ResumeRender = () => {
	const [numPages, setNumPages] = useState(null);
	const [width, setWidth] = useState(window.innerWidth);

	useEffect(() => {
		const handleResize = () => setWidth(window.innerWidth);
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	const onDocumentLoadSuccess = ({ numPages }) => {
		setNumPages(numPages);
	};

	const scale = width > 786 ? 1.2 : 0.6;

	return (
		<Container fluid className="resume-section">
			<Particle />
			<Row className="justify-content-center" style={{ position: "relative" }}>
				<Button variant="primary" href={pdf} target="_blank" style={{ maxWidth: "23rem" }}>
					<AiOutlineDownload />
					&nbsp;Download CV
				</Button>
			</Row>
			<Row className="justify-content-center" style={{ position: "relative", margin: "2rem 0" }}>
				<Document file={pdf} onLoadSuccess={onDocumentLoadSuccess} className="d-flex flex-column align-items-center">
					{Array.from(new Array(numPages), (el, index) => (
						<Page key={`page_${index + 1}`} pageNumber={index + 1} scale={scale} />
					))}
				</Document>
			</Row>

			<Row className="justify-content-center" style={{ position: "relative" }}>
				<Button variant="primary" href={pdf} target="_blank" style={{ maxWidth: "23rem" }}>
					<AiOutlineDownload />
					&nbsp;Download CV
				</Button>
			</Row>
		</Container>
	);
};

export default ResumeRender;
