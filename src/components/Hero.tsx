"use client";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Link from "next/link";

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-glow"></div>
      <Container className="position-relative" style={{ zIndex: 1 }}>
        <Row className="align-items-center mt-5">
          <Col lg={8} className="text-center text-lg-start mx-auto mx-lg-0">
            <h1 className="display-2 fw-bold text-white mb-4" style={{ letterSpacing: "-1.5px" }}>
              Empowering Your Future with <span className="text-crystal">Premium IT Solutions</span>
            </h1>
            <p className="lead text-light mb-5 fs-4 lh-base" style={{ opacity: 0.9 }}>
              GraseCode delivers cutting-edge web development, cloud architectures, and IT consulting to scale your business to new heights.
            </p>
            <div className="d-flex gap-3 justify-content-center justify-content-lg-start">
              <Link href="#services" className="btn-crystal btn-lg text-decoration-none">Our Services</Link>
              <Link href="/contact" className="btn-outline-crystal btn-lg text-decoration-none">Contact Us</Link>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
