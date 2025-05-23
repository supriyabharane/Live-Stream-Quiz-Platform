import React, { useState } from 'react';
import axios from 'axios';

function SignUpForm({ onRegister }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();
    setError('');
    setSuccess('');
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      await axios.post('http://localhost:5000/api/auth/register', {
        username,
        password,
      });
      setSuccess('Account created successfully! You can now login.');
      setUsername('');
      setPassword('');
      setConfirmPassword('');
      onRegister();
    } catch (err) {
      setError(err.response?.data?.message || 'Registration failed');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-green-50">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md"
      >
        <h2 className="text-2xl font-semibold mb-6 text-green-700 text-center">Create Account</h2>

        {error && <p className="mb-4 text-center text-red-600 font-medium">{error}</p>}
        {success && <p className="mb-4 text-center text-green-600 font-medium">{success}</p>}

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={e => setUsername(e.target.value)}
          className="w-full p-3 mb-4 border border-green-300 rounded focus:outline-none focus:ring-2 focus:ring-green-400"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          className="w-full p-3 mb-4 border border-green-300 rounded focus:outline-none focus:ring-2 focus:ring-green-400"
          required
        />
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={e => setConfirmPassword(e.target.value)}
          className="w-full p-3 mb-6 border border-green-300 rounded focus:outline-none focus:ring-2 focus:ring-green-400"
          required
        />

        <button
          type="submit"
          className="w-full bg-green-600 text-white py-3 rounded hover:bg-green-700 transition-colors"
        >
          Register
        </button>
      </form>
    </div>
  );
}

export default SignUpForm;
