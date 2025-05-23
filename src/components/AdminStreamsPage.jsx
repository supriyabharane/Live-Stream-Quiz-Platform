import React, { useEffect, useState } from "react";

export default function AdminStreamsPage() {
  const [streams, setStreams] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3002/api/admin/streams")
      .then((res) => res.json())
      .then(setStreams);
  }, []);

  function toggleStream(id) {
    fetch(`http://localhost:3002/api/admin/streams/${id}/toggle`, {
      method: "POST",
    })
      .then((res) => res.json())
      .then((updatedStream) => {
        setStreams(
          streams.map((s) => (s.id === updatedStream.id ? updatedStream : s))
        );
      });
  }

  return (
    <div style={{ maxWidth: 600, margin: "auto", padding: 20 }}>
      <h2>Admin: Manage Streams</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {streams.map((stream) => (
          <li key={stream.id} style={{ marginBottom: 10 }}>
            <strong>{stream.title}</strong> — Status:{" "}
            <span style={{ color: stream.active ? "green" : "red" }}>
              {stream.active ? "Active" : "Inactive"}
            </span>
            <button onClick={() => toggleStream(stream.id)} style={{ marginLeft: 10 }}>
              Toggle
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
