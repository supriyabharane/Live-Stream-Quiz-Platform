


import React, { useState } from "react";

export default function QuizPopup({ quiz, onSubmit }) {
  const [selected, setSelected] = useState(null);
  const [bet, setBet] = useState(10);

  if (!quiz) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded shadow-lg max-w-md w-full">
        <h2 className="text-xl font-bold mb-4">{quiz.question}</h2>
        <ul>
          {quiz.options.map((opt, idx) => (
            <li key={idx}>
              <label>
                <input
                  type="radio"
                  name="quiz"
                  value={idx}
                  checked={selected === idx}
                  onChange={() => setSelected(idx)}
                />
                {opt}
              </label>
            </li>
          ))}
        </ul>
        <div style={{ margin: "1rem 0" }}>
          <label>
            Bet:
            <select value={bet} onChange={e => setBet(Number(e.target.value))} style={{ marginLeft: 8 }}>
              <option value={10}>10</option>
              <option value={50}>50</option>
              <option value={100}>100</option>
            </select>
            <span style={{ marginLeft: 8 }}>points</span>
          </label>
        </div>
        <button
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded"
          onClick={() => onSubmit(selected, bet)}
          disabled={selected === null}
        >
          Submit
        </button>
      </div>
    </div>
  );
}