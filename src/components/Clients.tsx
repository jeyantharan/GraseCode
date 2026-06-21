"use client";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";

const Clients = () => {
  return (
    <section className="py-5 bg-white position-relative" style={{ borderBottom: "1px solid var(--gc-border)" }}>
      <Container>
        <div className="text-center mb-4">
          <span className="hero-tag" style={{ fontSize: "0.75rem", letterSpacing: "0.15em", color: "var(--gc-text-muted)" }}>
            [ TRUSTED BY LEADING ENTERPRISES ]
          </span>
        </div>
        <Row className="justify-content-center align-items-center g-4 g-md-5">
          <Col xs={6} md={3} className="text-center">
            <div className="client-logo-wrapper d-inline-block">
              <Image
                src="/qv-final-logo.svg"
                alt="QV Trattoria premium restaurant reservation platform client logo"
                width={280}
                height={100}
                style={{
                  height: "90px",
                  width: "auto",
                  objectFit: "contain",
                  transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                  cursor: "pointer",
                }}
                className="client-logo-hover client-logo-qv"
                unoptimized
              />
            </div>
          </Col>
          <Col xs={6} md={3} className="text-center">
            <div className="client-logo-wrapper d-inline-block">
              <Image
                src="/dedev-logo.png"
                alt="DeDev luxury fashion e-commerce storefront client logo"
                width={320}
                height={120}
                style={{
                  height: "90px",
                  width: "auto",
                  objectFit: "contain",
                  transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                  cursor: "pointer",
                }}
                className="client-logo-hover client-logo-dedev"
                unoptimized
              />
            </div>
          </Col>
          <Col xs={6} md={3} className="text-center">
            <div
              className="client-logo-hover client-logo-ironwood text-dark fw-bold"
              style={{
                fontSize: "1.7rem",
                letterSpacing: "0.15em",
                fontFamily: "var(--font-outfit), sans-serif",
                transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                cursor: "pointer",
                userSelect: "none"
              }}
            >
              IRONWOOD
            </div>
          </Col>
          <Col xs={6} md={3} className="text-center">
            <div
              className="client-logo-hover client-logo-baitt text-dark font-serif fw-bold"
              style={{
                fontSize: "2.1rem",
                letterSpacing: "0.02em",
                transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                cursor: "pointer",
                userSelect: "none"
              }}
            >
              Baitt
            </div>
          </Col>
        </Row>
      </Container>
      
      {/* Inline style for hover effect to keep styling localized and premium */}
      <style>{`
        .client-logo-hover {
          opacity: 0.8;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .client-logo-hover:hover {
          opacity: 1 !important;
          transform: scale(1.05);
        }
      `}</style>
    </section>
  );
};

export default Clients;
