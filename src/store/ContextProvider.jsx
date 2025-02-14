import React, { createContext } from "react";
export const data = createContext([]);
function ContextProvider({ children }) {
  return <data.Provider value={[]}>{children}</data.Provider>;
}

export default ContextProvider;
