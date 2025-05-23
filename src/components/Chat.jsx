// client/src/components/Chat.jsx
import React, { useState, useEffect } from "react";
import io from "socket.io-client";

const socket = io("http://localhost:3001");

export default function Chat() {
  const [message, setMessage] = useState("");
  const [chatLog, setChatLog] = useState([]);

  const sendMessage = () => {
    if (message.trim()) {
      socket.emit("send_message", { message, timestamp: new Date() });
      setMessage("");
    }
  };

  useEffect(() => {
    socket.on("receive_message", (data) => {
      setChatLog((prev) => [...prev, data]);
    });
  }, []);

  return (
    <div style={{ padding: "1rem", border: "1px solid #ccc", borderRadius: "8px" }}>
      <h2>💬 Live Chat</h2>
      <div style={{ height: "150px", overflowY: "auto", marginBottom: "1rem" }}>
        {chatLog.map((msg, idx) => (
          <div key={idx}>🗨️ {msg.message}</div>
        ))}
      </div>
      <input
        type="text"
        value={message}
        placeholder="Type a message..."
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        style={{ width: "80%", marginRight: "0.5rem" }}
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
}
