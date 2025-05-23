


// src/App.jsx


// App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Streams from "./pages/Streams";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import User from "./pages/userpage"; // Or UserPage if that's the filename
import AdminPage from "./pages/AdminPage";
import AdminLogin from "./pages/AdminLogin";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/streams" element={<Streams />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/user" element={<User />} />
      <Route
        path="/admin"
        element={
          localStorage.getItem("isAdmin") === "true"
            ? <AdminPage />
            : <AdminLogin />
        }
      />
    </Routes>
  );
}

export default App;