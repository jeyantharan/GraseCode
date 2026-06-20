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
        <Row className="justify-content-center align-items-center g-5">
          <Col xs={6} md={3} className="text-center">
            <div className="client-logo-wrapper d-inline-block">
              <Image
                src="/QV Final Logo.svg"
                alt="QV Logo"
                width={180}
                height={60}
                style={{
                  height: "56px",
                  width: "auto",
                  objectFit: "contain",
                  transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                  cursor: "pointer",
                }}
                className="client-logo-hover"
                unoptimized
              />
            </div>
          </Col>
          <Col xs={6} md={3} className="text-center">
            <div className="client-logo-wrapper d-inline-block">
              <Image
                src="/logo.jpg"
                alt="Client Logo"
                width={180}
                height={60}
                style={{
                  height: "64px",
                  width: "auto",
                  objectFit: "contain",
                  transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                  cursor: "pointer",
                }}
                className="client-logo-hover"
                unoptimized
              />
            </div>
          </Col>
        </Row>
      </Container>
      
      {/* Inline style for hover effect to keep styling localized and premium */}
      <style>{`
        .client-logo-hover {
          opacity: 0.9;
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
