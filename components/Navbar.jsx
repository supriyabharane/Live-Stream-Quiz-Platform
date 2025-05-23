
// client/src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <div className="text-2xl font-bold">LiveQuiz</div>
      <div className="space-x-6">
        <Link to="/" className="hover:text-gray-300">Home</Link>
        <Link to="/quizzes" className="hover:text-gray-300">Quizzes</Link>
        <Link to="/leaderboard" className="hover:text-gray-300">Leaderboard</Link>
        <Link to="/login" className="hover:text-gray-300">Login</Link>
      </div>
    </nav>
  );
}

