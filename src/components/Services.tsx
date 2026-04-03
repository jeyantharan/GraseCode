"use client";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const servicesDetails = [
  {
    title: "Web Development",
    description: "Custom, responsive, and blazing-fast web applications built with modern frameworks to engage your audience.",
    icon: "bi-laptop",
  },
  {
    title: "Cloud Solutions",
    description: "Scalable and secure cloud architectures designed to optimize your operations and reduce costs.",
    icon: "bi-cloud-arrow-up",
  },
  {
    title: "IT Consulting",
    description: "Strategic technology guidance to align your IT infrastructure with your broader business objectives.",
    icon: "bi-lightbulb",
  },
  {
    title: "Cybersecurity",
    description: "Robust security protocols and audits to protect your company's most sensitive data from emerging threats.",
    icon: "bi-shield-check",
  },
  {
    title: "AI Integrations",
    description: "Leverage the power of generative AI and machine learning to automate operations and gain insights.",
    icon: "bi-robot",
  },
  {
    title: "UI/UX Design",
    description: "Premium user interfaces with a focus on seamless user experiences, deeply aligned with your brand identity.",
    icon: "bi-palette",
  },
];

const Services = () => {
  return (
    <section id="services" className="section-padding bg-gc-black position-relative" style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
      <Container>
        <div className="text-center mb-5 pb-3">
          <h6 className="text-crystal text-uppercase fw-bold mb-2" style={{ letterSpacing: "2px" }}>What We Do</h6>
          <h2 className="display-5 fw-bold text-white mb-4">Our Expertise</h2>
        </div>
        <Row className="g-4">
          {servicesDetails.map((service, index) => (
            <Col md={6} lg={4} key={index}>
              <div className="gc-card h-100 p-4 p-lg-5">
                <div className="gc-icon-wrapper">
                  <i className={`bi ${service.icon}`}></i>
                </div>
                <h4 className="text-white mb-3 fw-bold">{service.title}</h4>
                <p className="text-light m-0 lh-lg" style={{ opacity: 0.7 }}>
                  {service.description}
                </p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Services;
