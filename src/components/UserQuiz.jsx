


// /src/components/UserQuiz.jsx
// /src/components/UserQuiz.jsx
import { useEffect, useState } from 'react';
import axios from 'axios';

function UserQuiz() {
  const [quizzes, setQuizzes] = useState([]);
  const [selectedAnswers, setSelectedAnswers] = useState({});

  useEffect(() => {
    axios.get('http://localhost:3002/api/quizzes') // Make sure this matches your backend port and route!
      .then(res => setQuizzes(res.data))
      .catch(err => console.error("Failed to fetch quizzes:", err));
  }, []);

  const handleAnswerSelect = (quizIndex, optionIndex) => {
    setSelectedAnswers(prev => ({
      ...prev,
      [quizIndex]: optionIndex
    }));
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Live Quiz List</h2>
      {quizzes.length === 0 ? (
        <p>No quizzes available right now.</p>
      ) : (
        <ul className="space-y-6">
          {quizzes.map((quiz, quizIndex) => (
            <li key={quiz._id || quizIndex} className="border p-4 rounded shadow-md">
              <h3 className="font-semibold mb-2">{quiz.question}</h3>
              <ul className="space-y-1">
                {quiz.options.map((option, optionIndex) => (
                  <li key={optionIndex}>
                    <label className="flex items-center space-x-2">
                      <input
                        type="radio"
                        name={`quiz-${quizIndex}`}
                        value={optionIndex}
                        checked={selectedAnswers[quizIndex] === optionIndex}
                        onChange={() => handleAnswerSelect(quizIndex, optionIndex)}
                      />
                      <span>{option}</span>
                    </label>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default UserQuiz;