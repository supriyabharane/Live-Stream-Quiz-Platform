import { useState } from 'react';
import Header from '../components/Header';

const sampleQuestions = [
  {
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Rome"],
    answer: 2,
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Jupiter", "Saturn"],
    answer: 1,
  },
];

export default function Quiz() {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  function handleAnswer(index) {
    if (index === sampleQuestions[current].answer) {
      setScore(score + 1);
    }
    const next = current + 1;
    if (next < sampleQuestions.length) {
      setCurrent(next);
    } else {
      setShowScore(true);
    }
  }

  return (
    <>
      <Header />
      <main className="max-w-2xl mx-auto p-6 mt-12">
        {showScore ? (
          <div className="text-center text-2xl font-bold">
            You scored {score} out of {sampleQuestions.length}
          </div>
        ) : (
          <>
            <h2 className="text-xl font-semibold mb-4">
              {sampleQuestions[current].question}
            </h2>
            <div className="space-y-3">
              {sampleQuestions[current].options.map((option, i) => (
                <button
                  key={i}
                  onClick={() => handleAnswer(i)}
                  className="block w-full text-left px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                  {option}
                </button>
              ))}
            </div>
          </>
        )}
      </main>
    </>
  );
}

