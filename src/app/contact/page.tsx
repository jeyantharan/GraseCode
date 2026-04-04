"use client";
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface FormData {
  name: string;
  company: string;
  email: string;
  phone: string;
  message: string;
}

export default function Contact() {
  const [form, setForm] = useState<FormData>({
    name: "", company: "", email: "", phone: "", message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Something went wrong");
      setStatus("success");
      setForm({ name: "", company: "", email: "", phone: "", message: "" });
    } catch (err: unknown) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Failed to send. Please try again.");
    }
  };

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

                {/* Success State */}
                {status === "success" ? (
                  <div className="gc-card p-4 p-md-5 text-center">
                    <div style={{
                      width: "70px", height: "70px", borderRadius: "50%",
                      background: "rgba(61,219,225,0.15)", display: "flex",
                      alignItems: "center", justifyContent: "center", margin: "0 auto 24px"
                    }}>
                      <i className="bi bi-check-lg" style={{ color: "#3ddbe1", fontSize: "2rem" }}></i>
                    </div>
                    <h4 className="text-white fw-bold mb-2">Message Sent!</h4>
                    <p className="text-light mb-4" style={{ opacity: 0.7 }}>
                      Thanks for reaching out. We&apos;ll get back to you within 24 hours.
                    </p>
                    <button
                      className="btn-crystal"
                      onClick={() => setStatus("idle")}
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <div className="gc-card p-4 p-md-5 mb-5">
                    {/* Error banner */}
                    {status === "error" && (
                      <div className="alert d-flex align-items-center gap-2 mb-4" style={{
                        background: "rgba(220,53,69,0.1)", border: "1px solid rgba(220,53,69,0.3)",
                        borderRadius: "8px", color: "#ff6b7a", padding: "12px 16px"
                      }}>
                        <i className="bi bi-exclamation-circle-fill"></i>
                        <span>{errorMsg}</span>
                      </div>
                    )}

                    <form onSubmit={handleSubmit}>
                      <div className="row g-3">
                        <div className="col-md-6">
                          <label className="gc-form-label">Name *</label>
                          <input
                            type="text" name="name" value={form.name}
                            onChange={handleChange}
                            className="form-control gc-input" placeholder="John Doe" required
                          />
                        </div>
                        <div className="col-md-6">
                          <label className="gc-form-label">Company Name <span style={{ opacity: 0.5 }}>(Optional)</span></label>
                          <input
                            type="text" name="company" value={form.company}
                            onChange={handleChange}
                            className="form-control gc-input" placeholder="Acme Corp"
                          />
                        </div>
                        <div className="col-md-6">
                          <label className="gc-form-label">E-mail *</label>
                          <input
                            type="email" name="email" value={form.email}
                            onChange={handleChange}
                            className="form-control gc-input" placeholder="john@example.com" required
                          />
                        </div>
                        <div className="col-md-6">
                          <label className="gc-form-label">Phone <span style={{ opacity: 0.5 }}>(Optional)</span></label>
                          <input
                            type="tel" name="phone" value={form.phone}
                            onChange={handleChange}
                            className="form-control gc-input" placeholder="+1 (555) 000-0000"
                          />
                        </div>
                        <div className="col-12 mt-4">
                          <label className="gc-form-label">Message *</label>
                          <textarea
                            name="message" value={form.message}
                            onChange={handleChange}
                            className="form-control gc-input" rows={5}
                            placeholder="How can we help you?" required
                          />
                        </div>
                        <div className="col-12 mt-4 text-center">
                          <button
                            type="submit"
                            className="btn-crystal btn-lg px-5 w-100"
                            disabled={status === "loading"}
                            style={{ opacity: status === "loading" ? 0.7 : 1, cursor: status === "loading" ? "not-allowed" : "pointer" }}
                          >
                            {status === "loading" ? (
                              <span className="d-flex align-items-center justify-content-center gap-2">
                                <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                Sending...
                              </span>
                            ) : "Send Message"}
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
