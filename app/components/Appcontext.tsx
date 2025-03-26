"use client"
import { useState, createContext, useContext, ReactNode } from "react";

type Values = {
  sorryNum: number;
  setSorryNum: (num: number) => void;
};

const AppContext = createContext<Values | null>(null);

export function AppProvider({ children }: { children: ReactNode }) {
  const [sorryNum, setSorryNum] = useState(0);

  return (
    <AppContext.Provider value={{ sorryNum, setSorryNum }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
}
