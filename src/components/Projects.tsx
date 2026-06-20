"use client";
import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";

interface Project {
  index: string;
  title: string;
  subtitle: string;
  description: string;
  url: string;
  cleanUrl: string;
  techStack: string[];
  techSummary: string[];
  imageSrc: string;
}

const projectsData: Project[] = [
  {
    index: "01",
    title: "Qv Trattoria",
    subtitle: "Restaurant Booking & Management Platform",
    description: "Designed and delivered a beautiful website and reservation engine. The platform handles real-time bookings, table layouts, and custom menu configurations with instant page responses.",
    url: "https://qvtrattoria.com",
    cleanUrl: "qvtrattoria.com",
    techStack: ["Next.js", "Tailwind CSS", "Vercel", "GitHub"],
    techSummary: [
      "High-Performance Static Site Generation (SSG)",
      "Tailwind CSS utility framework for responsive styling",
      "Vercel Serverless Hosting with global edge caching",
      "GitHub workflows for automated CI/CD deployments"
    ],
    imageSrc: "/qv-preview.png"
  },
  {
    index: "02",
    title: "DEDEV",
    subtitle: "E-Commerce & Digital Shopping Platform",
    description: "Engineered a custom e-commerce web platform. Optimized for fast catalog browsing, instant product search filtering, and secure direct-to-customer ordering flows.",
    url: "https://dedev.lk",
    cleanUrl: "dedev.lk",
    techStack: ["Next.js", "Tailwind CSS", "Vercel", "GitHub"],
    techSummary: [
      "Dynamic Server-Side Rendering (SSR)",
      "Tailwind CSS custom theme matching high-contrast design",
      "Vercel hosting for instant, reliable scaling",
      "GitHub version control integrated with server deployment hooks"
    ],
    imageSrc: "/dedev-preview.png"
  }
];

const Projects = () => {
  const [flipped, setFlipped] = useState<{ [key: number]: boolean }>({});

  const toggleFlip = (index: number) => {
    setFlipped((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  const handleCardClick = (e: React.MouseEvent, index: number) => {
    const target = e.target as HTMLElement;
    // Don't flip the card if the user clicks a link or buttons on back face
    if (target.closest("a") || target.closest(".btn")) {
      return;
    }
    toggleFlip(index);
  };

  return (
    <section id="projects" className="section-padding grid-bg" style={{ borderTop: "1px solid var(--gc-border)" }}>
      <Container>
        <div className="text-center mb-5 pb-3">
          <h6 className="text-muted-custom text-uppercase fw-bold mb-2" style={{ letterSpacing: "2px" }}>
            [ FEATURED WORK ]
          </h6>
          <h2 className="display-4 fw-bold text-dark mb-4">Case Studies</h2>
          <p className="text-muted-custom mx-auto" style={{ maxWidth: "600px", fontSize: "1.05rem" }}>
            Click on any project card to flip it and explore the technical architecture, deployment, and repository management behind the solution.
          </p>
        </div>

        <Row className="g-5 justify-content-center">
          {projectsData.map((project, index) => (
            <Col lg={6} md={6} xs={12} key={index}>
              <div className="flip-card">
                <div 
                  className={`flip-card-inner ${flipped[index] ? "is-flipped" : ""}`}
                  onClick={(e) => handleCardClick(e, index)}
                >
                  
                  {/* FRONT FACE */}
                  <div className="flip-card-front">
                    <div>
                      <div className="d-flex justify-content-between align-items-center mb-3">
                        <span className="small text-muted-custom fw-semibold tracking-wider font-monospace">
                          [ CASE STUDY {project.index} ]
                        </span>
                        <span className="font-serif italic text-muted-custom small">{project.cleanUrl}</span>
                      </div>
                      
                      <h3 className="display-5 fw-bold text-dark mb-2">{project.title}</h3>
                      <h5 className="text-muted-custom fw-medium small mb-4 tracking-wide text-uppercase" style={{ fontSize: "0.85rem" }}>
                        {project.subtitle}
                      </h5>
                      
                      {/* CSS Mockup Browser Frame containing live website preview */}
                      <div 
                        className="my-4 position-relative overflow-hidden" 
                        style={{ 
                          height: "180px", 
                          border: "1px solid var(--gc-border)",
                          borderRadius: "0px",
                          background: "var(--gc-bg-alt)",
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "space-between"
                        }}
                      >
                        {/* Browser headbar */}
                        <div className="d-flex gap-2 p-2 px-3 align-items-center" style={{ borderBottom: "1px solid var(--gc-border)", background: "#f8f9fa" }}>
                          <div className="d-flex gap-1.5">
                            <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#ccc" }}></span>
                            <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#ccc" }}></span>
                            <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#ccc" }}></span>
                          </div>
                          <div className="mx-auto font-monospace text-muted-custom text-truncate" style={{ fontSize: "0.6rem", letterSpacing: "0.5px", maxWidth: "70%" }}>
                            https://{project.cleanUrl}
                          </div>
                        </div>
                        
                        {/* Website screenshot preview */}
                        <div className="w-100 flex-grow-1 position-relative overflow-hidden" style={{ height: "140px" }}>
                          <Image
                            src={project.imageSrc}
                            alt={`${project.title} live screenshot preview`}
                            fill
                            sizes="(max-width: 768px) 100vw, 50vw"
                            style={{
                              objectFit: "cover",
                              objectPosition: "top center"
                            }}
                            priority
                            unoptimized
                          />
                        </div>
                      </div>
                    </div>

                    <div className="d-flex justify-content-between align-items-center mt-3 pt-2" style={{ borderTop: "1px solid var(--gc-border)" }}>
                      <span className="text-dark small fw-bold text-uppercase" style={{ letterSpacing: "1px", fontSize: "0.75rem" }}>
                        View Tech Stack
                      </span>
                      <i className="bi bi-arrow-right text-dark"></i>
                    </div>
                  </div>

                  {/* BACK FACE */}
                  <div className="flip-card-back">
                    <div>
                      <div className="d-flex justify-content-between align-items-center mb-3" style={{ borderBottom: "1px solid rgba(255,255,255,0.08)", paddingBottom: "1rem" }}>
                        <span className="small text-muted text-white-50 fw-semibold tracking-wider font-monospace" style={{ fontSize: "0.75rem" }}>
                          [ TECHNICAL ARCHITECTURE ]
                        </span>
                        <span className="small text-white-50 font-monospace">{project.index} // GC</span>
                      </div>
                      
                      <h4 className="h3 fw-bold text-white mb-2">{project.title}</h4>
                      
                      {/* Tech Badges Row */}
                      <div className="d-flex gap-2 flex-wrap mb-4">
                        {project.techStack.map((tech, idx) => (
                          <span key={idx} className="tech-badge">
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Stack bullets */}
                      <ul className="list-unstyled text-white-50 small mb-4 d-flex flex-column gap-2" style={{ fontSize: "0.85rem", lineHeight: "1.4" }}>
                        {project.techSummary.map((item, idx) => (
                          <li key={idx} className="d-flex align-items-start gap-2">
                            <span className="text-white">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-3">
                      <a 
                        href={project.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="btn btn-light w-100 fw-bold text-uppercase py-2.5 rounded-0 text-decoration-none"
                        style={{ fontSize: "0.8rem", letterSpacing: "1px" }}
                      >
                        Visit Live Website <i className="bi bi-box-arrow-up-right ms-1"></i>
                      </a>
                      <div className="text-center mt-3">
                        <span className="text-white-50 small tracking-wider text-uppercase" style={{ fontSize: "0.6rem", cursor: "pointer" }}>
                          Click to Flip Back
                        </span>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Projects;
