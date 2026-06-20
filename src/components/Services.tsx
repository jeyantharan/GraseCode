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
    title: "Mobile App Development",
    description: "Native and cross-platform mobile apps for iOS and Android—polished UX, solid performance, and maintainable code.",
    icon: "bi-phone",
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
    <section id="services" className="section-padding bg-gc-bg-alt position-relative" style={{ borderTop: "1px solid var(--gc-border)" }}>
      <Container>
        <div className="text-center mb-5 pb-3">
          <h6 className="text-muted-custom text-uppercase fw-bold mb-2" style={{ letterSpacing: "2px" }}>What We Do</h6>
          <h2 className="display-4 fw-bold text-dark mb-4">Our Expertise</h2>
        </div>
        <Row className="g-4">
          {servicesDetails.map((service, index) => (
            <Col md={6} lg={4} key={index}>
              <div className="gc-card h-100 p-4 p-lg-5">
                <div className="d-flex justify-content-between align-items-start">
                  <div className="gc-icon-wrapper">
                    <i className={`bi ${service.icon}`}></i>
                  </div>
                  <div className="gc-index-num">{String(index + 1).padStart(2, '0')}</div>
                </div>
                <h4 className="text-dark mb-3 fw-bold">{service.title}</h4>
                <p className="text-muted-custom m-0 lh-lg" style={{ fontSize: "0.95rem" }}>
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
