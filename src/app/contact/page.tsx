import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Contact() {
  return (
    <>
      <Navbar />
      <main className="pt-5 mt-5">
        <section className="section-padding bg-gc-black" style={{ minHeight: "calc(100vh - 250px)", paddingBottom: "100px" }}>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="text-center mb-5">
                  <h6 className="text-crystal text-uppercase fw-bold mb-2 tracking-widest" style={{ letterSpacing: "2px" }}>Get In Touch</h6>
                  <h2 className="display-5 fw-bold text-white mb-4">Send us a message</h2>
                  <p className="text-light mx-auto" style={{ maxWidth: "600px", opacity: 0.8 }}>
                    Tell us about your project and our experts will get back to you with a comprehensive proposal and strategy.
                  </p>
                </div>
                
                <div className="gc-card p-4 p-md-5 mb-5">
                  <form>
                    <div className="row g-3">
                      <div className="col-md-6">
                        <label className="gc-form-label">Name *</label>
                        <input type="text" className="form-control gc-input" placeholder="John Doe" required />
                      </div>
                      <div className="col-md-6">
                        <label className="gc-form-label">Company Name <span style={{opacity: 0.5}}>(Optional)</span></label>
                        <input type="text" className="form-control gc-input" placeholder="Acme Corp" />
                      </div>
                      <div className="col-md-6">
                        <label className="gc-form-label">E-mail *</label>
                        <input type="email" className="form-control gc-input" placeholder="john@example.com" required />
                      </div>
                      <div className="col-md-6">
                        <label className="gc-form-label">Phone <span style={{opacity: 0.5}}>(Optional)</span></label>
                        <input type="tel" className="form-control gc-input" placeholder="+1 (555) 000-0000" />
                      </div>
                      <div className="col-12 mt-4">
                        <label className="gc-form-label">Message *</label>
                        <textarea className="form-control gc-input" rows={5} placeholder="How can we help you?" required></textarea>
                      </div>
                      <div className="col-12 mt-4 text-center">
                        <button type="submit" className="btn-crystal btn-lg px-5 w-100">Book a Call</button>
                      </div>
                    </div>
                  </form>
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
