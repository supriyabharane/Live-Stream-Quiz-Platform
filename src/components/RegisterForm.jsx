

// src/components/RegisterForm.jsx
// client/src/components/RegisterForm.jsx
// src/components/RegisterForm.jsx
import React, { useState } from "react";

export default function RegisterForm({ onRegisterSuccess }) {
  const [form, setForm] = useState({ username: "", email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    setLoading(true);

    // Basic validation
    if (!form.username || !form.email || !form.password) {
      setError("Please fill all fields");
      setLoading(false);
      return;
    }

    try {
      const res = await fetch("http://localhost:3002/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Registration failed");
      } else {
        onRegisterSuccess(form.username, form.email); // Notify parent
      }
    } catch (err) {
      setError("Network error");
    }

    setLoading(false);
  }

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: 400, margin: "auto" }}>
      <h2>Register</h2>

      <input
        name="username"
        value={form.username}
        onChange={handleChange}
        placeholder="Username"
        style={{ width: "100%", marginBottom: 10, padding: 8 }}
      />
      <input
        name="email"
        type="email"
        value={form.email}
        onChange={handleChange}
        placeholder="Email"
        style={{ width: "100%", marginBottom: 10, padding: 8 }}
      />
      <input
        name="password"
        type="password"
        value={form.password}
        onChange={handleChange}
        placeholder="Password"
        style={{ width: "100%", marginBottom: 10, padding: 8 }}
      />

      {error && <p style={{ color: "red" }}>{error}</p>}

      <button type="submit" disabled={loading}>
        {loading ? "Registering..." : "Register"}
      </button>
    </form>
  );
}
