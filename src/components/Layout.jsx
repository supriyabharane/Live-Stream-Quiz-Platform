// src/components/Layout.jsx
// src/components/Layout.jsx
import React from 'react';
import { Link } from 'react-router-dom';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100 text-gray-900">
      {/* Header */}
      <header className="bg-blue-600 text-white p-4 shadow-md">
        <h1 className="text-2xl font-bold">Live Stream Quiz Platform</h1>
        <nav className="mt-2 flex space-x-6">
          <Link to="/login" className="hover:underline">Login</Link>
          <Link to="/user" className="hover:underline">User Page</Link>
          <Link to="/admin" className="hover:underline">Admin</Link>
        </nav>
      </header>

      {/* Main content */}
      <main className="flex-grow container mx-auto p-6">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-blue-600 text-white p-4 text-center">
        &copy; 2025 Live Stream Quiz Platform
      </footer>
    </div>
  );
}
