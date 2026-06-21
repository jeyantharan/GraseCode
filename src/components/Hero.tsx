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

            {/* Embedded client logos below CTAs */}
            <div className="mt-lg-5 mt-4 pt-lg-5 pt-2">
              <div className="text-dark mb-3 font-serif italic" style={{ fontSize: "1.5rem", fontWeight: 500 }}>
                Connecting Ideas, Businesses, and Markets Worldwide.
              </div>
              <div className="client-logo-hero-wrapper d-flex gap-5 justify-content-center align-items-center flex-wrap">
                <Image
                  src="/qv-final-logo.svg"
                  alt="QV Trattoria premium restaurant reservation platform client logo"
                  width={280}
                  height={100}
                  style={{
                    height: "90px",
                    width: "auto",
                    objectFit: "contain",
                    transition: "all 0.3s ease",
                    cursor: "pointer",
                  }}
                  className="client-logo-hero client-logo-qv"
                  unoptimized
                />
                <Image
                  src="/logo.jpg"
                  alt="DeDev luxury fashion e-commerce storefront client logo"
                  width={320}
                  height={120}
                  style={{
                    height: "140px",
                    width: "auto",
                    objectFit: "contain",
                    transition: "all 0.3s ease",
                    cursor: "pointer",
                  }}
                  className="client-logo-hero client-logo-jpg"
                  unoptimized
                />

                {/* Typographic logo for Ironwood */}
                <div
                  className="client-logo-hero client-logo-ironwood text-dark fw-bold"
                  style={{
                    fontSize: "1.7rem",
                    letterSpacing: "0.15em",
                    fontFamily: "var(--font-outfit), sans-serif",
                    transition: "all 0.3s ease",
                    cursor: "pointer",
                    userSelect: "none"
                  }}
                >
                  IRONWOOD
                </div>

                {/* Typographic logo for Baitt */}
                <div
                  className="client-logo-hero client-logo-baitt text-dark font-serif fw-bold"
                  style={{
                    fontSize: "2.1rem",
                    letterSpacing: "0.02em",
                    transition: "all 0.3s ease",
                    cursor: "pointer",
                    userSelect: "none"
                  }}
                >
                  Baitt
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      <style>{`
        .client-logo-hero {
          opacity: 0.95;
        }
        .client-logo-hero:hover {
          transform: scale(1.05);
          opacity: 1 !important;
        }
      `}</style>
    </section>
  );
};

export default Hero;
