import React, { createContext, useEffect, useState } from "react";
import { io } from "socket.io-client";

export const QuizSocketContext = createContext();

export function QuizSocketProvider({ children }) {
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const newSocket = io("http://localhost:3002");
    setSocket(newSocket);

    return () => newSocket.close();
  }, []);

  return (
    <QuizSocketContext.Provider value={socket}>
      {children}
    </QuizSocketContext.Provider>
  );
}
