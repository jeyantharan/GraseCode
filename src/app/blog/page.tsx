import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Link from "next/link";
import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { blogPosts } from "@/data/blogData";

export const metadata: Metadata = {
  title: "Insights & Technical Perspectives | GraseCode",
  description: "Read technical insights from GraseCode. Explore articles on custom software development, Next.js, and web development strategies in Sri Lanka.",
  openGraph: {
    title: "GraseCode Blog - Web Development & Custom Software Insights",
    description: "Read technical insights from GraseCode. Explore articles on custom software development, Next.js, and web development strategies in Sri Lanka.",
    url: "https://grasecode.com/blog",
    type: "website",
  }
};

export default function BlogIndexPage() {
  return (
    <>
      <Navbar />
      <main className="grid-bg" style={{ minHeight: "100vh", paddingTop: "140px", paddingBottom: "120px" }}>
        <Container>
          <Row className="mb-5">
            <Col lg={8} className="mx-auto text-center">
              <h6 className="text-muted-custom text-uppercase fw-bold mb-3 tracking-widest" style={{ letterSpacing: "2px" }}>
                [ GRASECODE INSIGHTS ]
              </h6>
              <h1 className="display-4 fw-bold text-dark mb-4">Perspectives on Engineering & Design</h1>
              <p className="text-muted-custom lh-lg fs-5 mx-auto" style={{ maxWidth: "700px" }}>
                Deep dives into modern frontend development, scalable custom software architectures, and search engine optimization trends shaping Colombo and global tech ecosystems.
              </p>
            </Col>
          </Row>

          <Row className="g-4 justify-content-center">
            {blogPosts.map((post) => (
              <Col lg={4} md={6} xs={12} key={post.id}>
                <article className="gc-card h-100 p-4 p-lg-5 d-flex flex-column justify-content-between">
                  <div>
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <span className="small text-muted-custom fw-semibold tracking-wider font-monospace text-uppercase" style={{ fontSize: "0.75rem" }}>
                        [ {post.category} ]
                      </span>
                      <span className="small text-muted-custom text-uppercase" style={{ fontSize: "0.7rem" }}>
                        {post.readTime}
                      </span>
                    </div>
                    <h2 className="h4 text-dark mb-3 fw-bold" style={{ fontSize: "1.3rem", lineHeight: "1.4" }}>
                      <Link href={`/blog/${post.slug}`} className="text-dark text-decoration-none hover-underline">
                        {post.title}
                      </Link>
                    </h2>
                    <p className="text-muted-custom mb-4 lh-lg" style={{ fontSize: "0.9rem" }}>
                      {post.description}
                    </p>
                  </div>
                  
                  <div className="pt-3" style={{ borderTop: "1px solid var(--gc-border)" }}>
                    <div className="d-flex justify-content-between align-items-center">
                      <span className="small text-muted-custom font-monospace" style={{ fontSize: "0.75rem" }}>
                        {post.publishDate}
                      </span>
                      <Link href={`/blog/${post.slug}`} className="text-dark text-decoration-none small fw-bold text-uppercase d-flex align-items-center gap-1" style={{ letterSpacing: "1px", fontSize: "0.75rem" }}>
                        <span>Read</span>
                        <i className="bi bi-arrow-right"></i>
                      </Link>
                    </div>
                  </div>
                </article>
              </Col>
            ))}
          </Row>
        </Container>
      </main>
      <Footer />
    </>
  );
}
