"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

interface DarkModeContextType {
  isOn: boolean;
  toggleDarkMode: () => void;
}

// Create the context
const DarkModeContext = createContext<DarkModeContextType | undefined>(
  undefined
);

// DarkModeProvider component
export const DarkModeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  // Initialize dark mode state from localStorage
  const [isOn, setIsOn] = useState<boolean>(() => {
    const darkModeSetting = localStorage.getItem("dark-mode");
    return darkModeSetting === "true";
  });

  // Effect to update the document and localStorage when isOn changes
  useEffect(() => {
    if (isOn) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("dark-mode", "true");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("dark-mode", "false");
    }
  }, [isOn]);

  // Toggle function to change the dark mode state
  const toggleDarkMode = () => {
    setIsOn((prev) => !prev);
  };

  // Provide the context value to children
  return (
    <DarkModeContext.Provider value={{ isOn, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

// Custom hook to use the DarkMode context
export const useDarkMode = () => {
  const context = useContext(DarkModeContext);
  // Throw an error if context is undefined
  if (context === undefined) {
    throw new Error("useDarkMode must be used within a DarkModeProvider");
  }
  return context;
};
