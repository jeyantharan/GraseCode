import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <section id="about" className="section-padding bg-gc-black" style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 mb-5 mb-lg-0">
                <h6 className="text-crystal text-uppercase fw-bold mb-2 tracking-widest" style={{ letterSpacing: "2px" }}>About Us</h6>
                <h2 className="display-5 fw-bold text-white mb-4">Innovation driven by expertise.</h2>
                <p className="text-light lh-lg mb-4" style={{ opacity: 0.8 }}>
                  At GraseCode, we believe in the power of technology to transform businesses. Our team of expert engineers, designers, and strategists work collaboratively to build solutions that are not only aesthetically unmatched but incredibly performant. We pride ourselves on pushing the boundaries of what is possible.
                </p>
                <button className="btn-outline-crystal">Learn More About Us</button>
              </div>
              <div className="col-lg-5 offset-lg-1">
                <div className="position-relative">
                  {/* Decorative element since we have no images yet */}
                  <div className="p-5" style={{ background: "rgba(61,219,225,0.1)", borderRadius: "20px", border: "1px solid rgba(61,219,225,0.2)" }}>
                    <div className="text-center py-5">
                      <div className="display-1 text-crystal fw-bold mb-0">4+</div>
                      <div className="text-white fs-5 mt-2">Years of Excellence</div>
                    </div>
                  </div>
                  <div className="position-absolute top-100 start-50 translate-middle p-3 p-md-4 text-center shadow" style={{ background: "var(--gc-dark)", borderRadius: "10px", border: "1px solid var(--gc-crystal)", whiteSpace: "nowrap" }}>
                    <div className="fs-3 text-white fw-bold">10+</div>
                    <div className="text-crystal small text-uppercase">Projects Delivered</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
