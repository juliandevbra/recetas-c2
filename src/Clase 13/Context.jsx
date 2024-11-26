import { createContext, useContext, useState } from "react";

export const GlobalStates = createContext();

const Context = ({ children }) => {
  const [salario, setSalario] = useState(1500000);

  return (
    <GlobalStates.Provider value={{ salario, setSalario }}>
      {children}
    </GlobalStates.Provider>
  );
};
export default Context;

export const useGlobalStates = () => useContext(GlobalStates);
