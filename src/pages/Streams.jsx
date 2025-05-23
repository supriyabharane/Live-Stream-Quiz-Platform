// --- server/index.js ---




import React, { useState } from "react";
import QuizPopup from "../components/QuizPopup"; // Adjust the path if needed

const streams = [
  {
    id: 1,
    name: "Blackjack Live",
    viewers: 120,
    thumbnail: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=facearea&w=400&q=80",
    host: "Dealer Anna",
    videoUrl: "https://www.youtube.com/embed/7FvK5G4R4k8"
  },
  {
    id: 2,
    name: "Roulette Royale",
    viewers: 98,
    thumbnail: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=facearea&w=400&q=80",
    host: "Dealer Mike",
    videoUrl: "https://www.youtube.com/embed/5qap5aO4i9A"
  },
  {
    id: 3,
    name: "Poker Night",
    viewers: 76,
    thumbnail: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=facearea&w=400&q=80",
    host: "Dealer Sara",
    videoUrl: "https://www.youtube.com/embed/21X5lGlDOfg"
  }
];

// Example quiz data (customize or randomize per stream if you want)
const quizSample = {
  question: "Which card is highest in Poker?",
  options: ["King", "Ace", "Queen", "Jack"]
};

export default function Streams() {
  const [showQuiz, setShowQuiz] = useState(false);
  const [currentQuiz, setCurrentQuiz] = useState(null);
  const [showStream, setShowStream] = useState(false);
  const [currentStream, setCurrentStream] = useState(null);
  const [chatMessages, setChatMessages] = useState([]);
  const [chatInput, setChatInput] = useState("");
  // Wallet state
  const [wallet, setWallet] = useState(() => {
    const user = JSON.parse(localStorage.getItem("user") || "{}");
    return user.wallet || 50;
  });

  // Show stream modal with video, chat, and quiz
  const handleJoinStream = (stream) => {
    setCurrentStream(stream);
    setShowStream(true);
    setCurrentQuiz(quizSample);
    setShowQuiz(true);
  };

  // Handle chat send
  const handleSendChat = () => {
    if (chatInput.trim()) {
      setChatMessages([...chatMessages, { user: "You", text: chatInput }]);
      setChatInput("");
    }
  };

  // Handle quiz submit with wallet logic
  const handleQuizSubmit = (selected, bet) => {
    if (wallet < bet) {
      alert("Not enough points in wallet!");
      return;
    }
    let newWallet = wallet - bet;
    // For this quiz, "Ace" is the correct answer
    const isCorrect = currentQuiz.options[selected] === "Ace";
    if (isCorrect) {
      newWallet += bet * 2;
      alert(`Correct! You won ${bet * 2} points!`);
    } else {
      alert("Wrong answer! Better luck next time.");
    }
    setWallet(newWallet);
    // Save to localStorage user object
    const user = JSON.parse(localStorage.getItem("user") || "{}");
    user.wallet = newWallet;
    localStorage.setItem("user", JSON.stringify(user));
    setShowQuiz(false);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #181818 60%, #1abc9c 100%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        fontFamily: '"Poppins", "Inter", Arial, sans-serif',
        padding: "0 8px",
        position: "relative"
      }}
    >
      <h1
        style={{
          color: "#ffd700",
          fontFamily: '"Cinzel Decorative", "Orbitron", serif',
          fontSize: 32,
          margin: "40px 0 24px 0",
          letterSpacing: 1
        }}
      >
        Live Casino Streams
      </h1>
      {/* Wallet Balance */}
      <div style={{
        color: "#ffd700",
        background: "rgba(24,24,24,0.85)",
        borderRadius: 10,
        padding: "8px 22px",
        fontWeight: "bold",
        fontSize: 18,
        marginBottom: 18,
        boxShadow: "0 2px 8px #ffd70033"
      }}>
        Wallet: {wallet} points
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(290px, 1fr))",
          gap: 28,
          width: "100%",
          maxWidth: 1100,
          marginBottom: 40
        }}
      >
        {streams.map(stream => (
          <div
            key={stream.id}
            style={{
              background: "rgba(24,24,24,0.85)",
              borderRadius: 18,
              boxShadow: "0 4px 24px #1abc9c33, 0 1.5px 4px #ffd70022 inset",
              padding: 20,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              transition: "transform 0.2s, box-shadow 0.2s",
              cursor: "pointer",
              border: "2px solid #1abc9c22"
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = "scale(1.03)";
              e.currentTarget.style.boxShadow = "0 8px 32px #ffd70055";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = "0 4px 24px #1abc9c33, 0 1.5px 4px #ffd70022 inset";
            }}
          >
            <img
              src={stream.thumbnail}
              alt={stream.name}
              style={{
                width: 80,
                height: 80,
                borderRadius: "50%",
                objectFit: "cover",
                marginBottom: 14,
                border: "3px solid #ffd700",
                boxShadow: "0 2px 8px #1abc9c55"
              }}
            />
            <div style={{
              color: "#ffd700",
              fontWeight: "bold",
              fontSize: 20,
              fontFamily: '"Orbitron", "Cinzel Decorative", serif',
              marginBottom: 6,
              textAlign: "center"
            }}>
              {stream.name}
            </div>
            <div style={{
              color: "#b7ffd8",
              fontSize: 15,
              marginBottom: 6
            }}>
              Host: {stream.host}
            </div>
            <div style={{
              color: "#fff",
              fontSize: 14,
              marginBottom: 18
            }}>
              👥 {stream.viewers} viewers
            </div>
            <button
              style={{
                background: "linear-gradient(90deg, #1abc9c, #ffd700)",
                color: "#181818",
                border: "none",
                borderRadius: 8,
                padding: "10px 0",
                fontWeight: "bold",
                fontSize: 16,
                width: "100%",
                marginTop: 4,
                cursor: "pointer",
                boxShadow: "0 2px 8px #ffd70055",
                transition: "all 0.2s"
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = "linear-gradient(90deg, #ffd700, #1abc9c)";
                e.currentTarget.style.transform = "scale(1.06)";
                e.currentTarget.style.boxShadow = "0 0 16px 2px #ffd70099";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = "linear-gradient(90deg, #1abc9c, #ffd700)";
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow = "0 2px 8px #ffd70055";
              }}
              onClick={() => handleJoinStream(stream)}
            >
              Join Stream
            </button>
          </div>
        ))}
      </div>

      {/* Stream Modal with Video, Chat, and Quiz */}
      {showStream && currentStream && (
        <div style={{
          position: "fixed",
          top: 0, left: 0, right: 0, bottom: 0,
          background: "rgba(0,0,0,0.85)",
          zIndex: 1000,
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}>
          <div style={{
            background: "#181818",
            borderRadius: 18,
            boxShadow: "0 8px 32px #1abc9c55",
            padding: 24,
            maxWidth: 700,
            width: "95vw",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            position: "relative"
          }}>
            <button
              onClick={() => { setShowStream(false); setShowQuiz(false); }}
              style={{
                position: "absolute",
                top: 12,
                right: 18,
                background: "none",
                border: "none",
                color: "#ffd700",
                fontSize: 22,
                cursor: "pointer"
              }}
              title="Close"
            >✕</button>
            <div style={{ width: "100%", marginBottom: 18 }}>
              <iframe
                src={currentStream.videoUrl}
                title={currentStream.name}
                width="100%"
                height="320"
                style={{ borderRadius: 12, border: "none", width: "100%" }}
                allow="autoplay; encrypted-media"
                allowFullScreen
              />
            </div>
            {/* Chat Box */}
            <div style={{
              width: "100%",
              background: "rgba(24,24,24,0.85)",
              borderRadius: 10,
              padding: 12,
              marginBottom: 12,
              maxHeight: 120,
              overflowY: "auto",
              color: "#fff",
              fontSize: 15
            }}>
              <div style={{ marginBottom: 6, color: "#ffd700", fontWeight: "bold" }}>Live Chat</div>
              {chatMessages.length === 0 && <div style={{ color: "#b7ffd8" }}>No messages yet.</div>}
              {chatMessages.map((msg, i) => (
                <div key={i}><span style={{ color: "#ffd700" }}>{msg.user}:</span> {msg.text}</div>
              ))}
            </div>
            <div style={{ width: "100%", display: "flex", gap: 8 }}>
              <input
                type="text"
                value={chatInput}
                onChange={e => setChatInput(e.target.value)}
                onKeyDown={e => { if (e.key === "Enter") handleSendChat(); }}
                placeholder="Type your message..."
                style={{
                  flex: 1,
                  borderRadius: 8,
                  border: "1.5px solid #1abc9c",
                  padding: "8px 12px",
                  fontSize: 15,
                  outline: "none"
                }}
              />
              <button
                onClick={handleSendChat}
                style={{
                  background: "linear-gradient(90deg, #ffd700, #1abc9c)",
                  color: "#181818",
                  border: "none",
                  borderRadius: 8,
                  padding: "8px 18px",
                  fontWeight: "bold",
                  fontSize: 15,
                  cursor: "pointer"
                }}
              >Send</button>
            </div>
            {/* Quiz Popup inside modal */}
            {showQuiz && (
              <QuizPopup
                quiz={currentQuiz}
                onSubmit={handleQuizSubmit}
              />
            )}
          </div>
        </div>
      )}

      {/* Footer/Info Bar */}
      <footer
        style={{
          width: "100%",
          background: "rgba(24,24,24,0.95)",
          color: "#b7ffd8",
          textAlign: "center",
          padding: "12px 0",
          fontSize: 15,
          letterSpacing: 1,
          position: "fixed",
          left: 0,
          bottom: 0,
          zIndex: 10,
          borderTop: "1px solid #1abc9c"
        }}
      >
        <span style={{ margin: "0 16px" }}>🌤️ 22°C</span>
        <span style={{ margin: "0 16px" }}>🕒 {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
        <span style={{ margin: "0 16px" }}>🎲 {streams.length} Streams Live</span>
      </footer>
      {/* Responsive & Animations */}
      <style>
        {`
          @media (max-width: 700px) {
            h1 {
              font-size: 1.3rem !important;
              margin-top: 18px !important;
            }
            div[style*="padding: 20px"] {
              padding: 12px !important;
            }
            button {
              font-size: 15px !important;
              padding: 10px 0 !important;
            }
            iframe {
              height: 180px !important;
            }
          }
        `}
      </style>
    </div>
  );
}