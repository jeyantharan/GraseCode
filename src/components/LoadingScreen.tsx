"use client";
import React, { useEffect, useState } from "react";

const LoadingScreen = () => {
  const [visible, setVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const [progress, setProgress] = useState(0);
  const [textVisible, setTextVisible] = useState(false);
  const [taglineVisible, setTaglineVisible] = useState(false);

  useEffect(() => {
    // Start progress bar
    const progressTimer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressTimer);
          return 100;
        }
        // Ease-in-out: fast start, slows in middle, fast at end
        const increment = prev < 30 ? 4 : prev < 70 ? 2 : 3;
        return Math.min(prev + increment, 100);
      });
    }, 40);

    // Show brand text after logo animates in
    const textTimer = setTimeout(() => setTextVisible(true), 500);
    // Show tagline after brand text
    const taglineTimer = setTimeout(() => setTaglineVisible(true), 900);

    // Begin fade-out
    const fadeTimer = setTimeout(() => setFadeOut(true), 2200);
    // Remove from DOM
    const removeTimer = setTimeout(() => setVisible(false), 2800);

    return () => {
      clearInterval(progressTimer);
      clearTimeout(textTimer);
      clearTimeout(taglineTimer);
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <>
      <style>{`
        @keyframes gc-logo-pop {
          0%   { transform: scale(0.4) rotate(-10deg); opacity: 0; }
          60%  { transform: scale(1.08) rotate(2deg); opacity: 1; }
          80%  { transform: scale(0.97) rotate(-1deg); }
          100% { transform: scale(1) rotate(0deg); opacity: 1; }
        }
        @keyframes gc-slide-up {
          0%   { transform: translateY(20px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
        @keyframes gc-glow-pulse {
          0%, 100% { box-shadow: 0 0 30px rgba(61, 219, 225, 0.3), 0 0 60px rgba(61, 219, 225, 0.1); }
          50%       { box-shadow: 0 0 50px rgba(61, 219, 225, 0.6), 0 0 100px rgba(61, 219, 225, 0.2); }
        }
        @keyframes gc-orbit {
          from { transform: rotate(0deg) translateX(70px) rotate(0deg); }
          to   { transform: rotate(360deg) translateX(70px) rotate(-360deg); }
        }
        @keyframes gc-orbit-reverse {
          from { transform: rotate(0deg) translateX(90px) rotate(0deg); }
          to   { transform: rotate(-360deg) translateX(90px) rotate(360deg); }
        }
        @keyframes gc-dot-blink {
          0%, 100% { opacity: 0.2; transform: scale(0.8); }
          50%       { opacity: 1;   transform: scale(1.2); }
        }
        @keyframes gc-bar-fill {
          from { width: 0%; }
        }
        @keyframes gc-tag-slide {
          0%   { letter-spacing: 8px; opacity: 0; }
          100% { letter-spacing: 2px; opacity: 1; }
        }
      `}</style>

      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 9999,
          backgroundColor: "#050505",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          transition: "opacity 0.6s ease, visibility 0.6s ease",
          opacity: fadeOut ? 0 : 1,
          visibility: fadeOut ? "hidden" : "visible",
          overflow: "hidden",
        }}
      >
        {/* Background radial glow */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "600px",
            height: "600px",
            background:
              "radial-gradient(circle, rgba(61,219,225,0.08) 0%, transparent 70%)",
            borderRadius: "50%",
            pointerEvents: "none",
          }}
        />

        {/* Orbiting dots */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            width: 0,
            height: 0,
          }}
        >
          <div
            style={{
              position: "absolute",
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              backgroundColor: "#3ddbe1",
              animation: "gc-orbit 3s linear infinite",
              opacity: 0.7,
            }}
          />
          <div
            style={{
              position: "absolute",
              width: "5px",
              height: "5px",
              borderRadius: "50%",
              backgroundColor: "#3ddbe1",
              animation: "gc-orbit-reverse 4s linear infinite",
              opacity: 0.4,
            }}
          />
        </div>

        {/* Logo icon */}
        <div
          style={{
            width: "90px",
            height: "90px",
            borderRadius: "20px",
            backgroundColor: "#ffffff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            animation: "gc-logo-pop 0.7s cubic-bezier(0.34,1.56,0.64,1) forwards, gc-glow-pulse 2s ease-in-out 0.7s infinite",
            marginBottom: "28px",
            flexShrink: 0,
          }}
        >
          <svg
            width="56"
            height="36"
            viewBox="0 0 56 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <text
              x="4"
              y="26"
              fontFamily="'Inter', 'Segoe UI', system-ui, sans-serif"
              fontWeight="800"
              fontSize="24"
              fill="#050505"
              letterSpacing="-1"
            >
              GR
            </text>
          </svg>
        </div>

        {/* Brand name */}
        <div
          style={{
            transition: "opacity 0.5s ease, transform 0.5s ease",
            opacity: textVisible ? 1 : 0,
            transform: textVisible ? "translateY(0)" : "translateY(12px)",
            marginBottom: "10px",
          }}
        >
          <span
            style={{
              color: "#ffffff",
              fontSize: "2rem",
              fontWeight: 700,
              fontFamily: "'Inter', 'Segoe UI', system-ui, sans-serif",
              letterSpacing: "-0.5px",
            }}
          >
            Grase
          </span>
          <span
            style={{
              color: "#3ddbe1",
              fontSize: "2rem",
              fontWeight: 700,
              fontFamily: "'Inter', 'Segoe UI', system-ui, sans-serif",
              letterSpacing: "-0.5px",
            }}
          >
            Code
          </span>
        </div>

        {/* Tagline */}
        <div
          style={{
            transition: "opacity 0.5s ease",
            opacity: taglineVisible ? 1 : 0,
            animation: taglineVisible ? "gc-tag-slide 0.5s ease forwards" : "none",
            marginBottom: "48px",
          }}
        >
          <span
            style={{
              color: "rgba(255,255,255,0.45)",
              fontSize: "0.7rem",
              fontFamily: "'Inter', 'Segoe UI', system-ui, sans-serif",
              fontWeight: 500,
              letterSpacing: "2px",
              textTransform: "uppercase",
            }}
          >
            Premium IT Solutions
          </span>
        </div>

        {/* Loading dots */}
        <div style={{ display: "flex", gap: "8px", marginBottom: "24px" }}>
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              style={{
                width: "6px",
                height: "6px",
                borderRadius: "50%",
                backgroundColor: "#3ddbe1",
                animation: `gc-dot-blink 1.2s ease-in-out ${i * 0.2}s infinite`,
              }}
            />
          ))}
        </div>

        {/* Progress bar */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "2px",
            backgroundColor: "rgba(61,219,225,0.15)",
          }}
        >
          <div
            style={{
              height: "100%",
              width: `${progress}%`,
              backgroundColor: "#3ddbe1",
              boxShadow: "0 0 12px rgba(61,219,225,0.8)",
              transition: "width 0.08s linear",
            }}
          />
        </div>
      </div>
    </>
  );
};

export default LoadingScreen;
