import React, { useEffect, useState } from "react";
import socket from "../socket";

const ChatComponent = () => {
  const [message, setMessage] = useState("");
  const [chatLog, setChatLog] = useState([]);

  useEffect(() => {
    socket.on("receive_message", (data) => {
      setChatLog((prev) => [...prev, data]);
    });

    return () => {
      socket.off("receive_message");
    };
  }, []);

  const sendMessage = () => {
    if (message.trim()) {
      socket.emit("send_message", `User: ${message}`);
      setMessage("");
    }
  };

  return (
    <div style={{ marginTop: "2rem", padding: "1rem", border: "1px solid gray" }}>
      <h3>Live Chat</h3>
      <div style={{ height: "150px", overflowY: "auto", marginBottom: "1rem", border: "1px solid #ccc", padding: "0.5rem" }}>
        {chatLog.map((msg, i) => (
          <div key={i}>{msg}</div>
        ))}
      </div>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type your message"
        style={{ width: "70%", padding: "0.5rem" }}
      />
      <button onClick={sendMessage} style={{ padding: "0.5rem 1rem", marginLeft: "1rem" }}>
        Send
      </button>
    </div>
  );
};

export default ChatComponent;
