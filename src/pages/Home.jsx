



import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  const [hovered, setHovered] = useState("");
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setFadeIn(true);
  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #232526 60%, #1abc9c 100%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: '"Inter", "Lato", Arial, sans-serif',
        position: "relative",
        overflow: "hidden"
      }}
    >
      {/* Radial Glow */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          width: 600,
          height: 600,
          background: "radial-gradient(circle, #ffd70055 0%, transparent 70%)",
          transform: "translate(-50%, -50%)",
          zIndex: 0,
          filter: "blur(10px)"
        }}
      />
      {/* Main Card with glassmorphism and fade-in */}
      <div
        className={fadeIn ? "fade-in" : ""}
        style={{
          background: "rgba(24,24,24,0.65)",
          borderRadius: 24,
          boxShadow: "0 8px 32px 0 #1abc9c55, 0 1.5px 4px #fff2 inset",
          padding: 40,
          maxWidth: 440,
          width: "90vw",
          textAlign: "center",
          border: "2px solid rgba(183,255,216,0.4)",
          zIndex: 1,
          position: "relative",
          marginTop: 40,
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          transition: "box-shadow 0.3s"
        }}
      >
        {/* Casino Icon */}
        <div style={{ fontSize: 48, marginBottom: 8, animation: "spin 2s linear infinite" }}>
          🎲
        </div>
        <h1
          style={{
            color: "#ffd700",
            fontSize: 36,
            marginBottom: 16,
            letterSpacing: 2,
            fontFamily: '"Cinzel Decorative", "Orbitron", serif'
          }}
        >
          Welcome to <span style={{ color: "#fff" }}>River</span>
          <span style={{ color: "#ffd700" }}>Gaming</span>
        </h1>
        <p style={{
          color: "#b7ffd8",
          fontSize: 18,
          marginBottom: 32,
          fontFamily: '"Inter", "Lato", Arial, sans-serif'
        }}>
          Experience Live Casino Streams, Real-Time Quizzes, and More!
        </p>
        <button
          onClick={() => navigate("/streams")}
          onMouseEnter={() => setHovered("streams")}
          onMouseLeave={() => setHovered("")}
          style={{
            background: hovered === "streams"
              ? "linear-gradient(90deg, #ffd700, #1abc9c)"
              : "linear-gradient(90deg, #ffd700, #b7ffd8)",
            color: "#222",
            border: hovered === "streams" ? "2px solid #ffd700" : "none",
            borderRadius: 8,
            padding: "12px 32px",
            fontWeight: "bold",
            fontSize: 18,
            cursor: "pointer",
            boxShadow: hovered === "streams"
              ? "0 0 16px 2px #ffd70099"
              : "0 2px 8px #b7ffd8aa",
            marginBottom: 16,
            width: "100%",
            transform: hovered === "streams" ? "scale(1.05)" : "scale(1)",
            transition: "all 0.2s",
            fontFamily: '"Orbitron", "Cinzel Decorative", serif'
          }}
        >
          Live Streams
        </button>
        <div style={{ display: "flex", gap: 16, marginTop: 16, justifyContent: "center", flexWrap: "wrap" }}>
          <button
            onClick={() => navigate("/register")}
            onMouseEnter={() => setHovered("register")}
            onMouseLeave={() => setHovered("")}
            style={{
              background: hovered === "register" ? "#ffd700" : "#1abc9c",
              color: hovered === "register" ? "#1abc9c" : "#fff",
              border: hovered === "register" ? "2px solid #ffd700" : "none",
              borderRadius: 8,
              padding: "10px 24px",
              fontWeight: "bold",
              cursor: "pointer",
              boxShadow: hovered === "register"
                ? "0 0 16px 2px #ffd70099"
                : "0 2px 8px #1abc9c55",
              width: 120,
              transform: hovered === "register" ? "scale(1.07)" : "scale(1)",
              transition: "all 0.2s",
              fontFamily: '"Orbitron", "Cinzel Decorative", serif'
            }}
          >
            Register
          </button>
          <button
            onClick={() => navigate("/login")}
            onMouseEnter={() => setHovered("login")}
            onMouseLeave={() => setHovered("")}
            style={{
              background: hovered === "login" ? "#ffd700" : "#fff",
              color: hovered === "login" ? "#1abc9c" : "#1abc9c",
              border: "2px solid #1abc9c",
              borderRadius: 8,
              padding: "10px 24px",
              fontWeight: "bold",
              cursor: "pointer",
              boxShadow: hovered === "login"
                ? "0 0 16px 2px #ffd70099"
                : "0 2px 8px #b7ffd8aa",
              width: 120,
              transform: hovered === "login" ? "scale(1.07)" : "scale(1)",
              transition: "all 0.2s",
              fontFamily: '"Orbitron", "Cinzel Decorative", serif'
            }}
          >
            LoginUser
          </button>
        </div>
      </div>

      {/* Features Section */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: 24,
          marginTop: 32,
          marginBottom: 16,
          zIndex: 2,
          position: "relative",
          flexWrap: "wrap"
        }}
      >
        <Feature icon="🎥" label="Live Streams" desc="Watch live dealers" />
        <Feature icon="❓" label="Real-Time Quizzes" desc="Bet and win" />
        <Feature icon="💰" label="Secure Wallet" desc="Manage your coins" />
        <Feature icon="🏆" label="Leaderboards" desc="Climb the ranks" />
      </div>

      {/* Trust Badges / Testimonials */}
      <div style={{
        color: "#fff",
        background: "rgba(24,24,24,0.85)",
        borderRadius: 12,
        padding: "10px 32px",
        fontSize: 16,
        marginBottom: 32,
        boxShadow: "0 2px 8px #1abc9c33",
        zIndex: 2,
        position: "relative"
      }}>
        <span style={{ color: "#ffd700", fontWeight: "bold" }}>★ Trusted by 10,000+ players globally</span>
        <span style={{ margin: "0 16px" }}>|</span>
        <span>🔒 Secure Payment</span>
        <span style={{ margin: "0 16px" }}>|</span>
        <span>🎲 Fair Play</span>
      </div>

      {/* Footer */}
      <footer
        style={{
          width: "100%",
          background: "rgba(24,24,24,0.95)",
          color: "#b7ffd8",
          textAlign: "center",
          padding: "12px 0",
          fontSize: 15,
          letterSpacing: 1,
          position: "fixed",
          left: 0,
          bottom: 0,
          zIndex: 10,
          borderTop: "1px solid #1abc9c"
        }}
      >
        <span style={{ margin: "0 16px", cursor: "pointer" }}>About</span>
        <span style={{ margin: "0 16px", cursor: "pointer" }}>Terms</span>
        <span style={{ margin: "0 16px", cursor: "pointer" }}>Privacy</span>
        <span style={{ margin: "0 16px", cursor: "pointer" }}>Contact</span>
      </footer>

      {/* Keyframes and Responsive CSS */}
      <style>
        {`
          @keyframes spin {
            0% { transform: rotate(0deg);}
            100% { transform: rotate(360deg);}
          }
          .fade-in {
            animation: fadeInUp 1s cubic-bezier(.39,.575,.565,1.000) both;
          }
          @keyframes fadeInUp {
            0% {
              opacity: 0;
              transform: translateY(40px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }
          @media (max-width: 600px) {
            div[style*="padding: 40px"], div[style*="padding: 48px"] {
              padding: 18px !important;
              max-width: 98vw !important;
            }
            h1 {
              font-size: 1.5rem !important;
            }
            .feature-row {
              flex-direction: column !important;
              gap: 12px !important;
            }
          }
        `}
      </style>
    </div>
  );
}

// Feature component for icons and text
function Feature({ icon, label, desc }) {
  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      minWidth: 100,
      marginBottom: 8
    }}>
      <div style={{
        fontSize: 32,
        marginBottom: 6,
        filter: "drop-shadow(0 2px 8px #ffd70055)"
      }}>{icon}</div>
      <div style={{
        color: "#ffd700",
        fontWeight: "bold",
        fontFamily: '"Orbitron", "Cinzel Decorative", serif',
        fontSize: 16
      }}>{label}</div>
      <div style={{
        color: "#b7ffd8",
        fontSize: 13,
        marginTop: 2,
        fontFamily: '"Inter", "Lato", Arial, sans-serif'
      }}>{desc}</div>
    </div>
  );
}