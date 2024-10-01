"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

type CategoryContextType = {
  category: string;
  setCategory: (category: string) => void;
};

const CategoryContext = createContext<CategoryContextType | undefined>(
  undefined
);

export const CategoryProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [category, setCategory] = useState<string>("JavaScript"); // 기본 카테고리

  return (
    <CategoryContext.Provider value={{ category, setCategory }}>
      {children}
    </CategoryContext.Provider>
  );
};

export const useCategory = () => {
  const context = useContext(CategoryContext);
  if (context === undefined) {
    throw new Error("useCategory must be used within a CategoryProvider");
  }
  return context;
};
