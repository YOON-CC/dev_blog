"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

interface DarkModeContextType {
  isOn: boolean | null; // 초기값을 null로 설정
  toggleDarkMode: () => void;
}

const DarkModeContext = createContext<DarkModeContextType | undefined>(
  undefined
);

export const DarkModeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isOn, setIsOn] = useState<boolean | null>(null); // 초기값을 null로 설정

  useEffect(() => {
    const darkModeSetting = localStorage.getItem("dark-mode");
    if (darkModeSetting === "true") {
      setIsOn(true);
      document.documentElement.classList.add("dark");
    } else {
      setIsOn(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  useEffect(() => {
    if (isOn !== null) {
      if (isOn) {
        document.documentElement.classList.add("dark");
        localStorage.setItem("dark-mode", "true");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("dark-mode", "false");
      }
    }
  }, [isOn]);

  const toggleDarkMode = () => {
    setIsOn((prev) => !prev);
  };

  return (
    <DarkModeContext.Provider value={{ isOn, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

export const useDarkMode = () => {
  const context = useContext(DarkModeContext);
  if (context === undefined) {
    throw new Error("useDarkMode must be used within a DarkModeProvider");
  }
  return context;
};
