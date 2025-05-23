import React, { useState } from "react";
import io from "socket.io-client";

const socket = io("http://localhost:3001");

function AdminQuiz() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const sendQuestion = () => {
    if (!question || !answer) return;
    socket.emit("sendQuestion", { question, answer });
    setQuestion("");
    setAnswer("");
  };

  const restartQuiz = () => {
    socket.emit("restartQuiz");
  };

  return (
    <div>
      <h2>Admin Panel</h2>
      <input
        type="text"
        placeholder="Enter question"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter correct answer"
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
      />
      <button onClick={sendQuestion}>Send Question</button>
      <button
        onClick={restartQuiz}
        style={{ marginLeft: "10px", backgroundColor: "red", color: "white" }}
      >
        Restart Quiz
      </button>
    </div>
  );
}

export default AdminQuiz;
