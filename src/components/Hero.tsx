"use client";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Link from "next/link";

import Image from "next/image";

const Hero = () => {
  return (
    <section id="home" className="hero-section grid-bg">
      <Container className="position-relative" style={{ zIndex: 1 }}>
        <Row className="align-items-center mt-lg-0 mt-4">
          <Col lg={10} className="text-center mx-auto">
            <span className="hero-tag">[THE FUTURE OF DIGITAL ARCHITECTURE]</span>
            <h1 className="display-1 fw-bold text-dark mb-4" style={{ letterSpacing: "-0.04em", lineHeight: 1.05 }}>
              We Build <span className="font-serif italic fw-normal text-muted-custom">Premium</span>{" "}Software &amp; IT Architectures
            </h1>
            <p className="lead text-muted-custom mb-4 fs-4 mx-auto lh-base" style={{ maxWidth: "720px", fontWeight: 400 }}>
              GraseCode delivers cutting-edge web applications, cloud infrastructure, and IT consulting to scale your business to new heights.
            </p>
            <div className="d-flex gap-3 justify-content-center">
              <Link href="#services" className="btn-premium-solid btn-lg text-decoration-none">Our Services</Link>
              <Link href="/contact" className="btn-premium-outline btn-lg text-decoration-none">Contact Us</Link>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
