"use client";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-gc-dark pt-5 pb-3" style={{ borderTop: "1px solid rgba(61, 219, 225, 0.1)" }}>
      <Container>
        <Row className="gy-4 mb-5 mt-4">
          <Col lg={4} className="mb-4 mb-lg-0">
            <div className="mb-4 d-flex align-items-center">
              <div className="gc-logo-wrapper me-3">
                <Image
                  src="/grasecode-logo.svg"
                  alt="GraseCode Logo"
                  width={160}
                  height={45}
                  style={{ width: 'auto', height: '40px', objectFit: 'contain' }}
                  unoptimized
                />
              </div>
              <div className="text-white fw-bold fs-3" style={{ letterSpacing: "-1px" }}>GraseCode</div>
            </div>
            <p className="text-light lh-lg" style={{ opacity: 0.7 }}>
              Building the future of technology, one elegant solution at a time. Partner with us to accelerate your digital transformation.
            </p>
          </Col>
          <Col lg={4} className="px-lg-5">
            <h5 className="text-white fw-bold mb-4">Quick Links</h5>
            <ul className="list-unstyled">
              <li className="mb-3"><Link href="/" className="text-light text-decoration-none" style={{ opacity: 0.7 }}>Home</Link></li>
              <li className="mb-3"><Link href="/#services" className="text-light text-decoration-none" style={{ opacity: 0.7 }}>Services</Link></li>
              <li className="mb-3"><Link href="/#about" className="text-light text-decoration-none" style={{ opacity: 0.7 }}>About Us</Link></li>
              <li className="mb-3"><Link href="/contact" className="text-light text-decoration-none" style={{ opacity: 0.7 }}>Contact</Link></li>
            </ul>
          </Col>
          <Col lg={4}>
            <h5 className="text-white fw-bold mb-4">Contact Us</h5>
            <ul className="list-unstyled text-light" style={{ opacity: 0.7 }}>
              <li className="mb-3"><i className="bi bi-envelope me-3 text-crystal"></i> hello@grasecode.com</li>
              <li className="mb-3"><i className="bi bi-geo-alt me-3 text-crystal"></i> Colombo, Sri Lanka</li>
            </ul>
          </Col>
        </Row>
        <hr style={{ borderColor: "rgba(255,255,255,0.1)" }} />
        <div className="text-center text-light mt-4" style={{ opacity: 0.6 }}>
          <small>&copy; {new Date().getFullYear()} GraseCode. All Rights Reserved.</small>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
