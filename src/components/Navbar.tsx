"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Container, Nav, Navbar as BootstrapNavbar } from "react-bootstrap";
import Image from "next/image";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <BootstrapNavbar
      expand="lg"
      fixed="top"
      expanded={expanded}
      onToggle={setExpanded}
      className={`gc-navbar py-3 ${scrolled ? "shadow-sm" : ""}`}
    >
      <Container>
        <BootstrapNavbar.Brand>
          <Link href="/" className="navbar-brand d-flex align-items-center" onClick={() => setExpanded(false)}>
            <div className="gc-logo-wrapper me-2">
              <Image
                src="/grasecode-logo.svg"
                alt="GraseCode Logo"
                width={160}
                height={45}
                style={{ width: 'auto', height: '52px', objectFit: 'contain', filter: 'invert(0)' }}
                priority
                unoptimized
              />
            </div>
            <div className="text-dark fw-bold fs-3 d-inline-flex align-items-center" style={{ letterSpacing: "-1px", height: '52px' }}>GraseCode</div>
          </Link>
        </BootstrapNavbar.Brand>
        <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" style={{ border: "1px solid rgba(0,0,0,0.1)" }} />
        <BootstrapNavbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link as={Link} href="/" onClick={() => setExpanded(false)}>
              Home
            </Nav.Link>
            <Nav.Link as={Link} href="/#services" onClick={() => setExpanded(false)}>
              Services
            </Nav.Link>
            <Nav.Link as={Link} href="/#projects" onClick={() => setExpanded(false)}>
              Projects
            </Nav.Link>
            <Nav.Link as={Link} href="/#about" onClick={() => setExpanded(false)}>
              About Us
            </Nav.Link>
            <Nav.Link as={Link} href="/contact" onClick={() => setExpanded(false)}>
              Contact
            </Nav.Link>
          </Nav>
          <div className="d-flex">
            <Link href="/contact" className="btn-premium-solid text-decoration-none" style={{ display: 'inline-block' }} onClick={() => setExpanded(false)}>Book a Call</Link>
          </div>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  );
};

export default Navbar;
