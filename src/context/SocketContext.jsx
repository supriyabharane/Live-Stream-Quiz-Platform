import React, { createContext, useContext, useEffect, useState } from "react";
import { io } from "socket.io-client";

const SocketContext = createContext();

export function useSocket() {
  return useContext(SocketContext);
}

export function SocketProvider({ children }) {
  const [socket, setSocket] = useState(null);
  const [userCount, setUserCount] = useState(0);
  const [quizQuestion, setQuizQuestion] = useState(null);

  useEffect(() => {
    const newSocket = io("http://localhost:3001"); // Backend URL here
    setSocket(newSocket);

    newSocket.on("user-count", (count) => {
      setUserCount(count);
    });

    newSocket.on("quiz-question", (question) => {
      setQuizQuestion(question);
    });

    return () => {
      newSocket.disconnect();
    };
  }, []);

  return (
    <SocketContext.Provider value={{ socket, userCount, quizQuestion }}>
      {children}
    </SocketContext.Provider>
  );
}