




import React, { useState, useEffect } from "react";

export default function AdminPage() {
  // Simulated viewer counts
  const [viewerCounts, setViewerCounts] = useState({
    blackjack: Math.floor(Math.random() * 100) + 50,
    roulette: Math.floor(Math.random() * 100) + 30,
    poker: Math.floor(Math.random() * 100) + 10,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setViewerCounts({
        blackjack: Math.floor(Math.random() * 100) + 50,
        roulette: Math.floor(Math.random() * 100) + 30,
        poker: Math.floor(Math.random() * 100) + 10,
      });
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Logout function
  const handleLogout = () => {
    localStorage.removeItem("isAdmin");
    window.location.reload();
  };

  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(135deg, #232526 60%, #1abc9c 100%)",
      padding: 40
    }}>
      <h1 style={{ color: "#ffd700", fontFamily: '"Cinzel Decorative", "Orbitron", serif' }}>
        Admin Dashboard
      </h1>
      <button onClick={handleLogout} style={{
        position: "absolute", top: 20, right: 20, padding: "8px 16px",
        background: "#1abc9c", color: "#fff", border: "none", borderRadius: 6, cursor: "pointer"
      }}>Logout</button>
      <div style={{
        background: "rgba(24,24,24,0.85)",
        borderRadius: 14,
        padding: 24,
        margin: "32px 0",
        color: "#fff",
        maxWidth: 600
      }}>
        <h2 style={{ color: "#ffd700" }}>Streams</h2>
        <ul>
          <li>
            Blackjack Live
            <span style={{marginLeft:12, color:"#1abc9c"}}>👁️ {viewerCounts.blackjack} viewers</span>
            <button style={{marginLeft:8}}>Start</button>
            <button style={{marginLeft:8}}>Stop</button>
          </li>
          <li>
            Roulette Royale
            <span style={{marginLeft:12, color:"#1abc9c"}}>👁️ {viewerCounts.roulette} viewers</span>
            <button style={{marginLeft:8}}>Start</button>
            <button style={{marginLeft:8}}>Stop</button>
          </li>
          <li>
            Poker Night
            <span style={{marginLeft:12, color:"#1abc9c"}}>👁️ {viewerCounts.poker} viewers</span>
            <button style={{marginLeft:8}}>Start</button>
            <button style={{marginLeft:8}}>Stop</button>
          </li>
        </ul>
        <h2 style={{ color: "#ffd700", marginTop: 24 }}>Create Quiz</h2>
        <input placeholder="Question" style={{width:"100%",marginBottom:8,padding:8,borderRadius:6}} />
        <input placeholder="Option 1" style={{width:"100%",marginBottom:8,padding:8,borderRadius:6}} />
        <input placeholder="Option 2" style={{width:"100%",marginBottom:8,padding:8,borderRadius:6}} />
        <input placeholder="Option 3" style={{width:"100%",marginBottom:8,padding:8,borderRadius:6}} />
        <input placeholder="Option 4" style={{width:"100%",marginBottom:8,padding:8,borderRadius:6}} />
        <button style={{
          width:"100%",padding:10,background:"linear-gradient(90deg,#ffd700,#1abc9c)",color:"#181818",
          border:"none",borderRadius:8,fontWeight:"bold",fontSize:16,marginTop:8
        }}>Activate Quiz</button>

        <h2 style={{ color: "#ffd700", marginTop: 32 }}>Wallet Top-up</h2>
        <form
          onSubmit={e => {
            e.preventDefault();
            const uname = e.target.username.value.trim();
            const amt = parseInt(e.target.amount.value, 10);
            if (!uname || isNaN(amt) || amt <= 0) {
              alert("Enter valid username and amount");
              return;
            }
            // Try to get user from localStorage
            let user = JSON.parse(localStorage.getItem("user") || "{}");
            if (!user.username || user.username !== uname) {
              alert("User not found or not logged in on this browser.");
              return;
            }
            user.wallet = (user.wallet || 0) + amt;
            localStorage.setItem("user", JSON.stringify(user));
            alert(`Added ${amt} points to ${uname}'s wallet!`);
            e.target.reset();
          }}
          style={{ marginTop: 12 }}
        >
          <input
            name="username"
            placeholder="Username"
            style={{ width: "100%", marginBottom: 8, padding: 8, borderRadius: 6 }}
          />
          <input
            name="amount"
            type="number"
            placeholder="Amount"
            style={{ width: "100%", marginBottom: 8, padding: 8, borderRadius: 6 }}
          />
          <button
            type="submit"
            style={{
              width: "100%",
              padding: 10,
              background: "linear-gradient(90deg,#ffd700,#1abc9c)",
              color: "#181818",
              border: "none",
              borderRadius: 8,
              fontWeight: "bold",
              fontSize: 16
            }}
          >
            Top Up Wallet
          </button>
        </form>
      </div>
    </div>
  );
}