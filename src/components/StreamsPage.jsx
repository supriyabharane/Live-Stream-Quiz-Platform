// src/components/StreamsPage.jsx

import React, { useEffect, useState } from "react";

function StreamsPage() {
  const [streams, setStreams] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3002/api/streams")  // your backend URL
      .then((res) => res.json())
      .then((data) => setStreams(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <h1>Live Streams</h1>
      {streams.length === 0 && <p>No active streams right now.</p>}
      {streams.map((stream) => (
        <div key={stream.id} style={{ marginBottom: "20px" }}>
          <h2>{stream.title}</h2>
          <iframe
            width="560"
            height="315"
            src={stream.url}
            title={stream.title}
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      ))}
    </div>
  );
}

export default StreamsPage;

