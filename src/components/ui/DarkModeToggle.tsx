"use client";

import { useState } from "react";

export default function DarkModeToggle() {
  const [isOn, setIsOn] = useState(false);

  const handleToggle = () => {
    setIsOn(true);

    setTimeout(() => {
      setIsOn(false);
    }, 300);
  };

  return (
    <div className="flex justify-center items-center">
      <div
        onClick={handleToggle}
        className={`cursor-pointer w-[100px] h-6 flex items-center rounded-full p-1 duration-300 bg-[#f0f0f0]`}
      >
        <div
          className={`transform duration-300 ${
            isOn ? "translate-x-0" : "translate-x-8"
          }`}
        >
          <div className="flex">
            <div className="rounded-full bg-red-500 w-4 h-4 mr-1.5"></div>
            <div className="rounded-full bg-yellow-500 w-4 h-4"></div>
            <div className="rounded-full bg-green-500 w-4 h-4 ml-1.5"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
