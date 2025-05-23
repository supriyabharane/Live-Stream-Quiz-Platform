


import React, { useState } from "react";
import axios from "axios";

const inputStyle = {
  width: "100%",
  padding: "10px",
  margin: "10px 0",
  borderRadius: "4px",
  border: "1px solid #ccc",
  fontSize: "1rem",
};

const buttonStyle = {
  width: "100%",
  padding: "10px",
  backgroundColor: "#007bff",
  border: "none",
  borderRadius: "4px",
  color: "#fff",
  fontWeight: "bold",
  cursor: "pointer",
  fontSize: "1rem",
};

export default function LoginForm({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!username || !password) {
      setError("Please fill in all fields.");
      return;
    }
    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", {
        username,
        password,
      });
      // Assuming backend returns user info or token
      onLogin(res.data);
    } catch (err) {
      setError("Invalid username or password.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        background: "#fff",
        padding: 20,
        borderRadius: 8,
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        maxWidth: 400,
        margin: "auto",
      }}
    >
      <h2 style={{ textAlign: "center", color: "#007bff" }}>Login</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        style={inputStyle}
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={inputStyle}
        required
      />
      <button type="submit" style={buttonStyle}>
        Login
      </button>
    </form>
  );
}
