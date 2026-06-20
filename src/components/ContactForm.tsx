"use client";
import React, { useState } from "react";

interface FormData {
  name: string;
  company: string;
  email: string;
  phone: string;
  message: string;
}

export default function ContactForm() {
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
      {status === "success" ? (
        <div className="gc-card p-4 p-md-5 text-center" style={{ border: "1px solid var(--gc-fg)" }}>
          <div style={{
            width: "70px", height: "70px", borderRadius: "50%",
            background: "var(--gc-fg)", display: "flex",
            alignItems: "center", justifyContent: "center", margin: "0 auto 24px"
          }}>
            <i className="bi bi-check-lg" style={{ color: "var(--gc-bg)", fontSize: "2rem" }}></i>
          </div>
          <h4 className="text-dark fw-bold mb-2">Message Sent!</h4>
          <p className="text-muted-custom mb-4" style={{ fontSize: "1rem" }}>
            Thanks for reaching out. We&apos;ll get back to you within 24 hours.
          </p>
          <button
            className="btn-premium-solid"
            onClick={() => setStatus("idle")}
          >
            Send Another Message
          </button>
        </div>
      ) : (
        <div className="gc-card p-4 p-md-5 mb-5">
          {status === "error" && (
            <div className="alert d-flex align-items-center gap-2 mb-4" style={{
              background: "#fff5f5", border: "1px solid #ff6b7a",
              borderRadius: "0px", color: "#dc3545", padding: "12px 16px"
            }}>
              <i className="bi bi-exclamation-circle-fill"></i>
              <span className="fw-medium">{errorMsg}</span>
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="row g-4">
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
              <div className="col-12 mt-5 text-center">
                <button
                  type="submit"
                  className="btn-premium-solid btn-lg px-5 w-100"
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
    </>
  );
}
