"use client";

import { useState } from "react";
import chan from "@/assets/images/chan.jpg";
import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";
import SocialBtn from "@/components/ui/SocialBtn";
import Link from "next/link";

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
    <aside className="bg-white shadow-md z-10 w-[300px] h-[550px] rounded-lg sticky top-[100px] dark:bg-[#1D1D1D]">
      <Link href={"/"} className="flex flex-col items-center mb-6 px-10 pt-10">
        <Image
          src={chan}
          alt="Profile Picture"
          width={250}
          height={250}
          className="rounded-lg"
        />
        <h1 className="text-2xl font-semibold mt-2 dark:text-[#ffffff]">
          CHAN
        </h1>
        <p className="text-gray-500 text-sm dark:text-[#cdcdcd]">
          과정은 복잡하되, 결과는 단순하게
        </p>
      </Link>

      <SocialBtn />

      <section className="px-8 dark:text-[#ffffff]">
        {/* 카테고리1 */}
        <ul
          className="list-none py-1 flex justify-between items-center cursor-pointer hover:bg-gray-200 rounded-lg mt-2 px-2 dark:hover:bg-[#363636]"
          onClick={toggleCategories1}
        >
          <div>WEB DEV</div>
          <IoIosArrowForward />
        </ul>
        {showCategories1 && (
          <ul className="list-none space-y-1 border-l-4 border-gray-800 ml-4 pl-2">
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
          className="list-none py-1 flex justify-between items-center cursor-pointer hover:bg-gray-200 rounded-lg mt-2 px-2 dark:hover:bg-[#363636]"
          onClick={toggleCategories2}
        >
          <div>RESEARCH</div>
          <IoIosArrowForward />
        </ul>
        {showCategories2 && (
          <ul className="list-none space-y-1 border-l-4 border-gray-800 ml-4 pl-2">
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
          className="list-none py-1 flex justify-between items-center cursor-pointer hover:bg-gray-200 rounded-lg mt-2 px-2 dark:hover:bg-[#363636]"
          onClick={toggleCategories3}
        >
          <div>ETC</div>
          <IoIosArrowForward />
        </ul>
        {showCategories3 && (
          <ul className="list-none space-y-1 border-l-4 border-gray-800 ml-4 pl-2">
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
