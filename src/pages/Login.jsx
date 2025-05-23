

// src/pages/LoginPage.jsx
// src/pages/LoginPage.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [touched, setTouched] = useState({ username: false, password: false });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const validate = () => ({
    username: !username ? "Username required" : "",
    password: !password ? "Password required" : ""
  });
  const errors = validate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setTouched({ username: true, password: true });
    if (errors.username || errors.password) return;
    setLoading(true);
    setError("");
    setTimeout(() => {
      const users = JSON.parse(localStorage.getItem("users") || "[]");
      const user = users.find(u => u.username === username && u.password === password);
      if (user) {
        localStorage.setItem("user", JSON.stringify(user));
        setLoading(false);
        navigate("/streams");
      } else {
        setLoading(false);
        setError("Invalid credentials");
      }
    }, 1000);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #232526 60%, #1abc9c 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: '"Inter", "Poppins", Arial, sans-serif',
        position: "relative"
      }}
    >
      {/* Glassmorphism Card */}
      <div
        style={{
          background: "rgba(255,255,255,0.85)",
          borderRadius: 20,
          boxShadow: "0 8px 32px 0 #1abc9c44, 0 1.5px 4px #ffd70022 inset",
          padding: 36,
          maxWidth: 380,
          width: "95vw",
          textAlign: "center",
          border: "2px solid #ffd70033",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)"
        }}
      >
        <h2 style={{
          color: "#1abc9c",
          marginBottom: 24,
          letterSpacing: 1,
          fontFamily: '"Cinzel Decorative", "Orbitron", serif'
        }}>Login</h2>
        <form onSubmit={handleSubmit} autoComplete="off">
          <div style={{ marginBottom: 18, textAlign: "left" }}>
            <input
              type="text"
              placeholder="Username"
              value={username}
              autoFocus
              onBlur={() => setTouched(t => ({ ...t, username: true }))}
              onChange={e => setUsername(e.target.value)}
              style={{
                width: "100%",
                marginBottom: 4,
                padding: "12px",
                borderRadius: 10,
                border: errors.username && touched.username
                  ? "2px solid #ff4d4f"
                  : "2px solid #1abc9c",
                background: "#f8fff9",
                color: "#1abc9c",
                fontSize: 16,
                outline: "none",
                boxShadow: touched.username && document.activeElement === document.activeElement
                  ? "0 0 0 2px #ffd70088"
                  : "none",
                transition: "border 0.2s, box-shadow 0.2s"
              }}
              onFocus={e => e.target.style.boxShadow = "0 0 0 2px #ffd70088"}
              onBlurCapture={e => e.target.style.boxShadow = "none"}
              onKeyDown={e => { if (e.key === "Enter") handleSubmit(e); }}
            />
            {touched.username && errors.username && (
              <div style={{ color: "#ff4d4f", fontSize: 13, marginTop: 2 }}>{errors.username}</div>
            )}
          </div>
          <div style={{ marginBottom: 18, textAlign: "left" }}>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onBlur={() => setTouched(t => ({ ...t, password: true }))}
              onChange={e => setPassword(e.target.value)}
              style={{
                width: "100%",
                marginBottom: 4,
                padding: "12px",
                borderRadius: 10,
                border: errors.password && touched.password
                  ? "2px solid #ff4d4f"
                  : "2px solid #1abc9c",
                background: "#f8fff9",
                color: "#1abc9c",
                fontSize: 16,
                outline: "none",
                boxShadow: touched.password && document.activeElement === document.activeElement
                  ? "0 0 0 2px #ffd70088"
                  : "none",
                transition: "border 0.2s, box-shadow 0.2s"
              }}
              onFocus={e => e.target.style.boxShadow = "0 0 0 2px #ffd70088"}
              onBlurCapture={e => e.target.style.boxShadow = "none"}
              onKeyDown={e => { if (e.key === "Enter") handleSubmit(e); }}
            />
            {touched.password && errors.password && (
              <div style={{ color: "#ff4d4f", fontSize: 13, marginTop: 2 }}>{errors.password}</div>
            )}
          </div>
          {error && (
            <div style={{ color: "#ff4d4f", marginBottom: 10, fontSize: 14 }}>{error}</div>
          )}
          <button
            type="submit"
            disabled={loading || !username || !password}
            style={{
              background: loading
                ? "linear-gradient(90deg, #b7ffd8 60%, #ffd700 100%)"
                : "linear-gradient(90deg, #ffd700, #1abc9c)",
              color: "#222",
              border: "none",
              borderRadius: 10,
              padding: "12px 0",
              fontWeight: "bold",
              fontSize: 17,
              cursor: loading || !username || !password ? "not-allowed" : "pointer",
              boxShadow: "0 2px 12px #ffd70033",
              width: "100%",
              marginTop: 8,
              marginBottom: 8,
              opacity: loading || !username || !password ? 0.7 : 1,
              transition: "background 0.2s, opacity 0.2s"
            }}
          >
            {loading ? (
              <span>
                <span className="spinner" style={{
                  display: "inline-block",
                  width: 18,
                  height: 18,
                  border: "3px solid #ffd700",
                  borderTop: "3px solid #1abc9c",
                  borderRadius: "50%",
                  animation: "spin 1s linear infinite",
                  marginRight: 8,
                  verticalAlign: "middle"
                }} /> Logging in...
              </span>
            ) : "Login"}
          </button>
        </form>
        <div style={{ marginTop: 18 }}>
          <span style={{ color: "#1abc9c" }}>Don't have an account? </span>
          <span
            style={{ color: "#ffd700", cursor: "pointer", textDecoration: "underline" }}
            onClick={() => navigate("/register")}
          >
            Register
          </span>
        </div>
      </div>
      {/* Animations and Responsive */}
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
            div[style*="padding: 36px"] {
              padding: 16px !important;
              max-width: 98vw !important;
            }
            h2 {
              font-size: 1.3rem !important;
            }
          }
        `}
      </style>
    </div>
  );
}