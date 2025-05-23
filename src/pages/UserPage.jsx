// client/src/pages/UserPage.jsx
// client/src/pages/UserPage.jsx


// At the top with other imports
import React, { useState, useEffect } from "react";
import QuizPopup from "../components/QuizPopup";
import Wallet from "../components/Wallet";
import ChatBox from "../components/ChatBox";

export default function UserPage() {
  const storedUser = JSON.parse(localStorage.getItem("user"));
  const [quiz, setQuiz] = useState(null);
  const [points, setPoints] = useState(storedUser ? storedUser.points : 0);

  // Listen for active quiz in localStorage
  useEffect(() => {
    const checkQuiz = () => {
      const activeQuiz = JSON.parse(localStorage.getItem("activeQuiz"));
      if (activeQuiz) setQuiz(activeQuiz);
      else setQuiz(null);
    };
    checkQuiz();
    const interval = setInterval(checkQuiz, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleQuizSubmit = (selected, bet) => {
    if (bet > points) {
      alert("Not enough points to bet!");
      return;
    }
    let newPoints = points - bet;
    if (selected === quiz.correct) {
      newPoints += bet * 2;
      alert(`Correct! You won ${bet * 2} points.`);
    } else {
      alert("Wrong answer! You lost your bet.");
    }
    setPoints(newPoints);
    localStorage.setItem("user", JSON.stringify({ ...storedUser, points: newPoints }));
    setQuiz(null);
    localStorage.removeItem("activeQuiz"); // Remove quiz after answering
  };

  if (!storedUser) {
    return <div style={{ padding: 40 }}>Please log in to join the stream.</div>;
  }

  return (
    <div>
      <Wallet points={points} />
      <div style={{ marginBottom: 16, color: "#ffd700" }}>
        Welcome, {storedUser.username}!
      </div>
      <h1>User Stream Page</h1>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
        title="Live Stream"
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
        style={{ display: "block", margin: "0 auto 2rem" }}
      />
      {quiz && <QuizPopup quiz={quiz} onSubmit={handleQuizSubmit} />}
      <ChatBox username={storedUser.username} />
    </div>
  );
}