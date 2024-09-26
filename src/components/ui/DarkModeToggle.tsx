// DarkModeToggle.tsx
"use client";

import { useDarkMode } from "@/context/DarkModeContext";

export default function DarkModeToggle() {
  const { isOn, toggleDarkMode } = useDarkMode();

  return (
    <div className="flex justify-center items-center">
      <div
        onClick={toggleDarkMode}
        className={`cursor-pointer w-[62px] h-[34px] flex items-center rounded-full p-1 duration-300 ${
          isOn ? "bg-[#272727]" : "bg-yellow-400"
        }`}
      >
        <div
          className={`w-[26px] h-[26px] flex justify-center items-center rounded-full bg-white shadow-md transform duration-300 ${
            isOn ? "translate-x-[28px]" : "translate-x-0"
          }`}
        >
          {isOn ? (
            <div className="text-gray-800">🌙</div>
          ) : (
            <div className="text-yellow-500">☀️</div>
          )}
        </div>
      </div>
    </div>
  );
}
