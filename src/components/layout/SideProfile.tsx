"use client";

import { useState } from "react";
import chan from "@/assets/images/chan.jpg";
import Image from "next/image";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";
import SocialBtn from "@/components/ui/SocialBtn";

export default function SideProfile() {
  const [showCategories1, setShowCategories1] = useState(false);
  const [showCategories2, setShowCategories2] = useState(false);
  const [showCategories3, setShowCategories3] = useState(false);

  const toggleCategories1 = () => {
    setShowCategories1(!showCategories1);
  };

  const toggleCategories2 = () => {
    setShowCategories2(!showCategories2);
  };

  const toggleCategories3 = () => {
    setShowCategories3(!showCategories3);
  };

  return (
    <aside className="bg-white h-screen w-64 shadow-md ">
      <div className="flex flex-col items-center mb-2 p-6 pb-2">
        <Image
          src={chan}
          alt="Profile Picture"
          width={250}
          height={250}
          className="rounded-lg"
        />
        <h1 className="text-xl font-semibold p-0 mt-2">CHAN</h1>
        <p className="text-gray-500 text-sm">
          과정은 복잡하되, 결과는 단순하게
        </p>
      </div>

      <SocialBtn />

      <section>
        {/* 카테고리1 */}
        <ul
          className="pl-6 pr-6 pt-1 pb-1 flex justify-between items-center cursor-pointer hover:bg-[#e3e3e3]"
          onClick={toggleCategories1}
        >
          <div>WEB DEV</div>
          <IoIosArrowForward />
        </ul>
        {showCategories1 && (
          <ul className="space-y-1 mt-2 border-l-4 border-gray-800 ml-7 pl-2">
            <li className="font-bold text-sm">
              <a href="#category1" className="text-gray-700 hover:underline">
                JavaScript
              </a>
            </li>
            <li className="font-bold text-sm">
              <a href="#category1" className="text-gray-700 hover:underline">
                React
              </a>
            </li>
          </ul>
        )}

        {/* 카테고리2 */}
        <ul
          className="pl-6 pr-6 pt-1 pb-1 flex justify-between items-center cursor-pointer hover:bg-[#e3e3e3]"
          onClick={toggleCategories2}
        >
          <div>RESEARCH</div>
          <IoIosArrowForward />
        </ul>
        {showCategories2 && (
          <ul className="space-y-1 mt-2 border-l-4 border-gray-800 ml-7 pl-2">
            <li className="font-bold text-sm">
              <a href="#category1" className="text-gray-700 hover:underline">
                View data
              </a>
            </li>
            <li className="font-bold text-sm">
              <a href="#category1" className="text-gray-700 hover:underline">
                Study
              </a>
            </li>
          </ul>
        )}

        {/* 카테고리3 */}
        <ul
          className="pl-6 pr-6 pt-1 pb-1 flex justify-between items-center cursor-pointer hover:bg-[#e3e3e3]"
          onClick={toggleCategories3}
        >
          <div>ETC</div>
          <IoIosArrowForward />
        </ul>
        {showCategories3 && (
          <ul className="space-y-1 mt-2 border-l-4 border-gray-800 ml-7 pl-2">
            <li className="font-bold text-sm">
              <a href="#category1" className="text-gray-700 hover:underline">
                YouTube
              </a>
            </li>
            <li className="font-bold text-sm">
              <a href="#category1" className="text-gray-700 hover:underline">
                Thesis
              </a>
            </li>
            <li className="font-bold text-sm">
              <a href="#category1" className="text-gray-700 hover:underline">
                Resume
              </a>
            </li>
          </ul>
        )}
      </section>
    </aside>
  );
}
