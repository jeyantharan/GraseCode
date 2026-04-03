"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Container, Nav, Navbar as BootstrapNavbar } from "react-bootstrap";
import Image from "next/image";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <BootstrapNavbar
      expand="lg"
      fixed="top"
      className={`gc-navbar py-3 ${scrolled ? "shadow" : ""}`}
    >
      <Container>
        <BootstrapNavbar.Brand>
          <Link href="/" className="navbar-brand d-flex align-items-center">
            <div className="gc-logo-wrapper me-3">
              <Image
                src="/grasecode-logo.svg"
                alt="GraseCode Logo"
                width={160}
                height={45}
                style={{ width: 'auto', height: '36px', objectFit: 'contain', transform: 'scale(3.0)' }}
                priority
              />
            </div>
            <div className="text-white fw-bold fs-3" style={{ letterSpacing: "-1px" }}>GraseCode</div>
          </Link>
        </BootstrapNavbar.Brand>
        <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" style={{ backgroundColor: "rgba(255,255,255,0.1)", filter: "invert(1) grayscale(100%) brightness(200%)" }} />
        <BootstrapNavbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link as={Link} href="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} href="/#services">
              Services
            </Nav.Link>
            <Nav.Link as={Link} href="/#about">
              About Us
            </Nav.Link>
            <Nav.Link as={Link} href="/contact">
              Contact
            </Nav.Link>
          </Nav>
          <div className="d-flex">
            <Link href="/contact" className="btn-crystal text-decoration-none" style={{ display: 'inline-block' }}>Book a Call</Link>
          </div>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  );
};

export default Navbar;
