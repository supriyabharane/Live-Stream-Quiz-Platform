import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="bg-gray-900 text-white p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">LiveQuiz</h1>
      <nav className="space-x-6">
        <a href="#" className="hover:text-blue-400">Home</a>
        <a href="#" className="hover:text-blue-400">Quizzes</a>
        <a href="#" className="hover:text-blue-400">Leaderboard</a>
        <a href="#" className="hover:text-blue-400">Login</a>
      </nav>
    </header>
  );
}


