"use client";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Link from "next/link";
import { blogPosts } from "@/data/blogData";

const BlogSection = () => {
  return (
    <section id="blog" className="section-padding bg-gc-bg-alt position-relative" style={{ borderTop: "1px solid var(--gc-border)" }}>
      <Container>
        <div className="text-center mb-5 pb-3">
          <h6 className="text-muted-custom text-uppercase fw-bold mb-2" style={{ letterSpacing: "2px" }}>Insights & News</h6>
          <h2 className="display-4 fw-bold text-dark mb-4">Latest Articles</h2>
        </div>
        <Row className="g-4">
          {blogPosts.map((post) => (
            <Col md={6} lg={4} key={post.id}>
              <div className="gc-card h-100 p-4 p-lg-5 d-flex flex-column justify-content-between">
                <div>
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <span className="small text-muted-custom fw-semibold tracking-wider font-monospace text-uppercase" style={{ fontSize: "0.75rem" }}>
                      [ {post.category} ]
                    </span>
                    <span className="small text-muted-custom text-uppercase" style={{ fontSize: "0.7rem" }}>
                      {post.readTime}
                    </span>
                  </div>
                  <h4 className="text-dark mb-3 fw-bold" style={{ fontSize: "1.25rem", lineHeight: "1.4" }}>
                    <Link href={`/blog/${post.slug}`} className="text-dark text-decoration-none">
                      {post.title}
                    </Link>
                  </h4>
                  <p className="text-muted-custom mb-4 lh-lg" style={{ fontSize: "0.9rem" }}>
                    {post.description}
                  </p>
                </div>
                
                <div className="pt-3" style={{ borderTop: "1px solid var(--gc-border)" }}>
                  <Link href={`/blog/${post.slug}`} className="text-dark text-decoration-none small fw-bold text-uppercase d-flex align-items-center justify-content-between" style={{ letterSpacing: "1px", fontSize: "0.75rem" }}>
                    <span>Read Article</span>
                    <i className="bi bi-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default BlogSection;
