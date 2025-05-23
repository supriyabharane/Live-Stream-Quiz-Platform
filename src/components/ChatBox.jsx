

import React, { useState, useEffect } from "react";

export default function ChatBox({ username }) {
  const [messages, setMessages] = useState(() => {
    return JSON.parse(localStorage.getItem("globalChat") || "[]");
  });
  const [input, setInput] = useState("");

  // Listen for new messages from other tabs/users
  useEffect(() => {
    const interval = setInterval(() => {
      setMessages(JSON.parse(localStorage.getItem("globalChat") || "[]"));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const sendMessage = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    const newMessages = [
      ...messages,
      { user: username, text: input }
    ];
    setMessages(newMessages);
    localStorage.setItem("globalChat", JSON.stringify(newMessages));
    setInput("");
  };

  return (
    <div style={{
      background: "#222", color: "#fff", borderRadius: 8, padding: 16,
      maxWidth: 400, margin: "2rem auto 0"
    }}>
      <div style={{ maxHeight: 150, overflowY: "auto", marginBottom: 8 }}>
        {messages.map((msg, i) => (
          <div key={i} style={{ marginBottom: 4 }}>
            <b style={{ color: "#ffd700" }}>{msg.user}:</b> {msg.text}
          </div>
        ))}
      </div>
      <form onSubmit={sendMessage} style={{ display: "flex" }}>
        <input
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Type a message..."
          style={{ flex: 1, marginRight: 8 }}
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}