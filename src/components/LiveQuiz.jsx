import React, { useContext, useEffect, useState } from "react";
import { QuizSocketContext } from "./QuizSocketContext";

export default function LiveQuiz() {
  const socket = useContext(QuizSocketContext);
  const [quiz, setQuiz] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (!socket) return;

    socket.on("quiz", (newQuiz) => {
      setQuiz(newQuiz);
      setSelectedAnswer(null);
      setSubmitted(false);
    });

    return () => socket.off("quiz");
  }, [socket]);

  function submitAnswer() {
    if (!selectedAnswer) return alert("Please select an answer");

    socket.emit("submit-answer", { userId: "user1", answer: selectedAnswer });
    setSubmitted(true);
  }

  if (!quiz) return null;

  return (
    <div style={{ border: "1px solid #ccc", padding: 20, marginTop: 20 }}>
      <h3>{quiz.question}</h3>
      {quiz.options.map((option, idx) => (
        <div key={idx}>
          <label>
            <input
              type="radio"
              name="answer"
              value={option}
              checked={selectedAnswer === option}
              onChange={() => setSelectedAnswer(option)}
              disabled={submitted}
            />
            {option}
          </label>
        </div>
      ))}

      {!submitted ? (
        <button onClick={submitAnswer}>Submit Answer</button>
      ) : (
        <p>Answer submitted! Waiting for results...</p>
      )}
    </div>
  );
}
