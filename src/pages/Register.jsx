

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
      alert("Login successful!");
      navigate("/streams");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(135deg, #1a1a1a 60%, #ffd700 100%)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }}>
      <div style={{
        background: "#222",
        borderRadius: 12,
        boxShadow: "0 4px 24px #0008",
        padding: 32,
        maxWidth: 420,
        width: "100%"
      }}>
        <h2 style={{ color: "#ffd700", textAlign: "center", marginBottom: 24 }}>Login</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            required
            onChange={e => setUsername(e.target.value)}
            style={{
              width: "100%",
              marginBottom: 12,
              padding: "10px",
              borderRadius: 6,
              border: "1px solid #ffd700",
              background: "#222",
              color: "#ffd700"
            }}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            required
            onChange={e => setPassword(e.target.value)}
            style={{
              width: "100%",
              marginBottom: 12,
              padding: "10px",
              borderRadius: 6,
              border: "1px solid #ffd700",
              background: "#222",
              color: "#ffd700"
            }}
          />
          <button
            type="submit"
            style={{
              background: "linear-gradient(90deg, #ffd700, #ffb300)",
              color: "#222",
              border: "none",
              borderRadius: 6,
              padding: "10px 24px",
              fontWeight: "bold",
              cursor: "pointer",
              boxShadow: "0 2px 8px #0004",
              width: "100%",
              marginTop: 8
            }}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}