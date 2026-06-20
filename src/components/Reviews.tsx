"use client";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const reviewsData = [
  {
    quote: "GraseCode designed and delivered a beautiful website and reservation engine for Qv Trattoria. The system is elegant, the reservation flow is fast, and our restaurant table bookings in Canada have scaled beautifully.",
    author: "Kirish",
    role: "Founder, Qv Trattoria",
    location: "Canada 🇨🇦",
    initials: "K",
  },
  {
    quote: "GraseCode designed and delivered an exceptional e-commerce platform for DEDEV. The online shopping experience is seamless, page loads are instant, and our sales in Sri Lanka have scaled beautifully.",
    author: "Deah Dev",
    role: "Founder, DEDEV",
    location: "Sri Lanka 🇱🇰",
    initials: "DD",
  },
  {
    quote: "GraseCode created a premium website for our personal activity management, booking, and reminder platform. The interface is clean, reminders are seamless, and calendar scheduling is effortless. Truly exceptional work.",
    author: "Francescoliv",
    role: "Founder, Ironwood & Baitt",
    location: "Italy 🇮🇹",
    initials: "F",
  },
];

const Reviews = () => {
  return (
    <section id="reviews" className="section-padding bg-gc-bg-alt position-relative" style={{ borderTop: "1px solid var(--gc-border)" }}>
      <Container>
        <div className="text-center mb-5 pb-3">
          <h6 className="text-muted-custom text-uppercase fw-bold mb-2" style={{ letterSpacing: "2px" }}>
            [ TESTIMONIALS ]
          </h6>
          <h2 className="display-4 fw-bold text-dark mb-4">What Our Clients Say</h2>
        </div>
        
        <Row 
          className="g-4 flex-nowrap reviews-row" 
          style={{ 
            overflowX: "auto", 
            scrollSnapType: "x mandatory", 
            WebkitOverflowScrolling: "touch",
            paddingBottom: "1rem"
          }}
        >
          {reviewsData.map((review, index) => (
            <Col 
              lg={4} 
              md={6} 
              xs={10} 
              key={index} 
              style={{ 
                scrollSnapAlign: "start", 
                flexShrink: 0 
              }}
            >
              <div className="gc-card h-100 p-4 p-lg-5 bg-white position-relative overflow-hidden d-flex flex-column justify-content-between">
                
                {/* Large decorative quotation mark */}
                <div 
                  className="font-serif position-absolute" 
                  style={{ 
                    fontSize: "8rem", 
                    color: "rgba(0, 0, 0, 0.03)", 
                    top: "-15px", 
                    right: "15px",
                    lineHeight: 1,
                    userSelect: "none"
                  }}
                >
                  “
                </div>
                
                <div className="position-relative" style={{ zIndex: 1 }}>
                  <p className="text-dark lh-lg mb-5" style={{ fontSize: "0.98rem", fontStyle: "italic", fontWeight: 400 }}>
                    "{review.quote}"
                  </p>
                </div>
                
                <div className="d-flex align-items-center mt-auto position-relative" style={{ zIndex: 1 }}>
                  {/* Minimalist Monospaced Initial Avatar */}
                  <div 
                    className="d-flex align-items-center justify-content-center fw-bold me-3 text-white"
                    style={{
                      width: "48px",
                      height: "48px",
                      background: "var(--gc-fg)",
                      borderRadius: "0px",
                      fontSize: "1rem",
                      letterSpacing: "0px"
                    }}
                  >
                    {review.initials}
                  </div>
                  <div>
                    <h5 className="text-dark mb-0 fw-bold" style={{ fontSize: "1rem" }}>{review.author}</h5>
                    <p className="text-muted-custom mb-0 small fw-medium" style={{ letterSpacing: "0.02em" }}>
                      {review.role} &middot; <span className="text-uppercase" style={{ fontSize: "0.75rem", letterSpacing: "0.05em" }}>{review.location}</span>
                    </p>
                  </div>
                </div>
                
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Reviews;
