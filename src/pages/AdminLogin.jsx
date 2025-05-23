import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AdminLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simple hardcoded admin credentials
    if (username === "admin" && password === "admin123") {
      localStorage.setItem("isAdmin", "true");
      navigate("/admin");
    } else {
      alert("Invalid admin credentials");
    }
  };

  return (
    <div style={{ maxWidth: 400, margin: "2rem auto" }}>
      <h2>Admin Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Admin Username"
          value={username}
          required
          onChange={e => setUsername(e.target.value)}
          style={{ width: "100%", marginBottom: 8 }}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          required
          onChange={e => setPassword(e.target.value)}
          style={{ width: "100%", marginBottom: 8 }}
        />
        <button type="submit" style={{ width: "100%" }}>Login</button>
      </form>
    </div>
  );
}