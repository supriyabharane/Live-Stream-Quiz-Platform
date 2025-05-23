import React from "react";

export default function Wallet({ points }) {
  return (
    <div style={{
      background: "#222", color: "#ffd700", padding: "1rem 2rem",
      borderRadius: "8px", marginBottom: "1rem", fontWeight: "bold"
    }}>
      Wallet: {points} points
    </div>
  );
}