import React, { createContext, useState } from "react";
export const COUNT_CONTEXT = createContext();
const CountContext = ({ children }) => {
  const [count, setCount] = useState(0);
  const value = { count, setCount };
  return (
    <COUNT_CONTEXT.Provider value={value}>
      {children}
    </COUNT_CONTEXT.Provider>
  );
};

export default CountContext;
