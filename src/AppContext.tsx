// AppContext.tsx
import React, { createContext, useContext, useState, ReactNode } from "react";

interface AppContextProps {
  children: ReactNode;
}

interface AppContextValue {
  inputData: string[];
  setInputData: React.Dispatch<React.SetStateAction<string[]>>;
  enteredNumbers: string[];
  setEnteredNumbers: React.Dispatch<React.SetStateAction<string[]>>;
  clearData: () => void;
}

const AppContext = createContext<AppContextValue | undefined>(undefined);

export const AppProvider: React.FC<AppContextProps> = ({ children }) => {
  const [inputData, setInputData] = useState<string[]>([]);
  const [enteredNumbers, setEnteredNumbers] = useState<string[]>([]);

  const clearData = () => {
    // Clear the data in AsyncStorage or any other data persistence mechanism
    // Example: AsyncStorage.removeItem("numbers");

    // Reset the enteredNumbers state
    setEnteredNumbers([]);
  };

  const contextValue: AppContextValue = {
    inputData,
    setInputData,
    enteredNumbers,
    setEnteredNumbers,
    clearData,
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};

export const useAppContext = (): AppContextValue => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};
