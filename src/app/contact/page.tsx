import React from "react";
import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us | Get in Touch",
  description: "Get in touch with GraseCode to discuss your web development, software architecture, or cloud infrastructure project. Book a consultation call today.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://grasecode.com/contact",
    siteName: "GraseCode",
    title: "Contact Us | GraseCode Premium IT Solutions",
    description: "Get in touch with GraseCode to discuss your web development, software architecture, or cloud infrastructure project. Book a consultation call today.",
    images: [
      {
        url: "/grasecode-linkedin-logo.png",
        width: 800,
        height: 800,
        alt: "GraseCode Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | GraseCode Premium IT Solutions",
    description: "Discuss your next software architecture or web application project with GraseCode experts.",
    images: ["/grasecode-linkedin-logo.png"],
  },
};

export default function Contact() {
  return (
    <>
      <Navbar />
      <main>
        <section className="grid-bg" style={{ paddingTop: "180px", paddingBottom: "120px", minHeight: "calc(100vh - 100px)" }}>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="text-center mb-5">
                  <h6 className="text-muted-custom text-uppercase fw-bold mb-2 tracking-widest" style={{ letterSpacing: "2px" }}>Get In Touch</h6>
                  <h2 className="display-4 fw-bold text-dark mb-4">Send us a message</h2>
                  <p className="text-muted-custom mx-auto" style={{ maxWidth: "600px", fontSize: "1.05rem" }}>
                    Tell us about your project and our experts will get back to you with a comprehensive proposal and strategy.
                  </p>
                </div>

                {/* Render the interactive Client Contact Form component */}
                <ContactForm />

              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
