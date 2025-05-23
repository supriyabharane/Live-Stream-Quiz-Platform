


import React, { useState, useEffect } from "react";

const ADMIN_USER = "admin";
const ADMIN_PASS = "admin123";

export default function Admin() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");

  // Simulated viewer counts
  const [viewerCounts, setViewerCounts] = useState({
    blackjack: Math.floor(Math.random() * 100) + 50,
    roulette: Math.floor(Math.random() * 100) + 30,
    poker: Math.floor(Math.random() * 100) + 10,
  });

  // Refresh viewer counts every 5 seconds
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

  const handleLogin = (e) => {
    e.preventDefault();
    if (user === ADMIN_USER && pass === ADMIN_PASS) {
      setLoggedIn(true);
    } else {
      alert("Invalid admin credentials");
    }
  };

  if (!loggedIn) {
    return (
      <div style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #232526 60%, #1abc9c 100%)"
      }}>
        <form onSubmit={handleLogin} style={{
          background: "rgba(255,255,255,0.9)",
          borderRadius: 16,
          padding: 32,
          boxShadow: "0 8px 32px #1abc9c44",
          minWidth: 320
        }}>
          <h2 style={{ color: "#1abc9c", marginBottom: 18 }}>Admin Login</h2>
          <input
            type="text"
            placeholder="Username"
            value={user}
            onChange={e => setUser(e.target.value)}
            style={{ width: "100%", marginBottom: 12, padding: 10, borderRadius: 8, border: "1.5px solid #1abc9c" }}
          />
          <input
            type="password"
            placeholder="Password"
            value={pass}
            onChange={e => setPass(e.target.value)}
            style={{ width: "100%", marginBottom: 18, padding: 10, borderRadius: 8, border: "1.5px solid #1abc9c" }}
          />
          <button
            type="submit"
            style={{
              width: "100%",
              padding: 10,
              background: "linear-gradient(90deg, #ffd700, #1abc9c)",
              color: "#181818",
              border: "none",
              borderRadius: 8,
              fontWeight: "bold",
              fontSize: 16,
              cursor: "pointer"
            }}
          >
            Login
          </button>
        </form>
      </div>
    );
  }

  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(135deg, #232526 60%, #1abc9c 100%)",
      padding: 40
    }}>
      <h1 style={{ color: "#ffd700", fontFamily: '"Cinzel Decorative", "Orbitron", serif' }}>
        Admin Dashboard
      </h1>

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

        {/* Wallet Top-up Section */}
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