import React, { useState } from "react";

export default function AdminStreamControl() {
  const [isStreaming, setIsStreaming] = useState(false);

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Admin Stream Control</h2>
      {!isStreaming ? (
        <button
          onClick={() => setIsStreaming(true)}
          className="px-4 py-2 bg-green-600 text-white rounded"
        >
          Start Stream
        </button>
      ) : (
        <>
          <button
            onClick={() => setIsStreaming(false)}
            className="px-4 py-2 bg-red-600 text-white rounded"
          >
            Stop Stream
          </button>
          <p className="mt-2 text-green-700">Streaming is live!</p>
        </>
      )}
    </div>
  );
}
