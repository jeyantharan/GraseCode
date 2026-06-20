import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { blogPosts } from "@/data/blogData";

type Props = {
  params: Promise<{ slug: string }>;
};

// Generate dynamic metadata for search engines based on the slug parameter
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: "Article Not Found | GraseCode Insights",
    };
  }

  return {
    title: `${post.title} | GraseCode`,
    description: post.description,
    keywords: post.keywords,
    openGraph: {
      title: post.title,
      description: post.description,
      url: `https://grasecode.com/blog/${post.slug}`,
      type: "article",
      publishedTime: new Date(post.publishDate).toISOString(),
    },
  };
}

// Generate static params for prerendering during static build compiling
export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <main className="grid-bg" style={{ minHeight: "100vh", paddingTop: "140px", paddingBottom: "120px" }}>
        <Container>
          <Row>
            <Col lg={8} className="mx-auto">
              {/* Back Link */}
              <div className="mb-4">
                <Link href="/blog" className="text-muted-custom text-decoration-none small fw-bold text-uppercase d-inline-flex align-items-center gap-2 hover-underline">
                  <i className="bi bi-arrow-left"></i>
                  <span>Back to Insights</span>
                </Link>
              </div>

              {/* Metadata Header */}
              <div className="mb-4">
                <div className="d-flex align-items-center gap-3 mb-2 flex-wrap">
                  <span className="small text-dark fw-bold tracking-wider font-monospace text-uppercase" style={{ fontSize: "0.8rem" }}>
                    [ {post.category} ]
                  </span>
                  <span className="text-muted-custom small d-none d-sm-inline">•</span>
                  <span className="text-muted-custom small">{post.publishDate}</span>
                  <span className="text-muted-custom small">•</span>
                  <span className="text-muted-custom small">{post.readTime}</span>
                </div>
                <h1 className="display-4 fw-bold text-dark mb-4" style={{ lineHeight: "1.2", letterSpacing: "-1px" }}>
                  {post.title}
                </h1>
              </div>

              <hr className="my-4" style={{ borderColor: "var(--gc-border)" }} />

              {/* HTML Body Content */}
              <article 
                className="blog-content lh-lg text-dark" 
                style={{ fontSize: "1.05rem" }}
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              <hr className="my-5" style={{ borderColor: "var(--gc-border)" }} />

              {/* CTA section after article */}
              <div className="p-4 p-md-5 my-5 text-center" style={{ background: "var(--gc-bg-alt)", border: "1px solid var(--gc-border)" }}>
                <h3 className="fw-bold mb-3">Need elite software execution?</h3>
                <p className="text-muted-custom mx-auto mb-4" style={{ maxWidth: "500px", fontSize: "0.95rem" }}>
                  Whether you need custom software development or a dedicated Next.js developer in Sri Lanka, GraseCode delivers robust, search-optimized systems.
                </p>
                <Link href="/contact" className="btn-premium-solid text-decoration-none d-inline-block">
                  Book a Strategy Call
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </main>
      <Footer />
    </>
  );
}
