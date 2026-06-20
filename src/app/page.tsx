import React from "react";
import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Footer from "@/components/Footer";

// Lazy load components below the fold to improve initial page load times
const Projects = dynamic(() => import("@/components/Projects"), {
  ssr: true,
  loading: () => <div className="text-center py-5"><span className="spinner-border text-dark" role="status"></span></div>
});

const Reviews = dynamic(() => import("@/components/Reviews"), {
  ssr: true,
  loading: () => <div className="text-center py-5"><span className="spinner-border text-dark" role="status"></span></div>
});

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Projects />
        <section id="about" className="section-padding grid-bg" style={{ borderTop: "1px solid var(--gc-border)" }}>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 mb-5 mb-lg-0">
                <h6 className="text-muted-custom text-uppercase fw-bold mb-2 tracking-widest" style={{ letterSpacing: "2px" }}>About Us</h6>
                <h2 className="display-4 fw-bold text-dark mb-4">Innovation driven by expertise.</h2>
                <p className="text-muted-custom lh-lg mb-4" style={{ fontSize: "1rem" }}>
                  At GraseCode, we believe in the power of technology to transform businesses. Our team of expert engineers, designers, and strategists work collaboratively to build solutions that are not only aesthetically unmatched but incredibly performant. We pride ourselves on pushing the boundaries of what is possible.
                </p>
                <button className="btn-premium-outline">Learn More About Us</button>
              </div>
              <div className="col-lg-5 offset-lg-1">
                <div className="position-relative">
                  {/* Decorative stats element in high-contrast monochrome */}
                  <div className="p-5" style={{ background: "var(--gc-bg-alt)", border: "1px solid var(--gc-border)" }}>
                    <div className="text-center py-5">
                      <div className="display-1 text-dark fw-bold mb-0">4+</div>
                      <div className="text-muted-custom fs-5 mt-2 fw-medium">Years of Excellence</div>
                    </div>
                  </div>
                  <div className="position-absolute top-100 start-50 translate-middle p-3 p-md-4 text-center shadow-lg" style={{ background: "var(--gc-fg)", border: "1px solid var(--gc-fg)", whiteSpace: "nowrap" }}>
                    <div className="fs-3 text-white fw-bold">10+</div>
                    <div className="text-white-50 small text-uppercase fw-bold" style={{ letterSpacing: "1px" }}>Projects Delivered</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Reviews />
      </main>
      <Footer />
    </>
  );
}
