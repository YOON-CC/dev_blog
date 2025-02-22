"use client";

import Image from "next/image";
import chan from "@/assets/images/chan.jpg";
import { useEffect, useState } from "react";
import SocialBtn from "./SocialBtn";

export default function MainBanner() {
  const [imageSrc1, setImageSrc1] = useState("/banner1.png");
  const [imageSrc3, setImageSrc3] = useState("/banner5.png");

  return (
    <div className="hidden xl:flex w-full h-[fit-content] justify-center flex-col items-center mt-[60px]">
      <div className="animate-fadeInTop flex justify-between items-center w-[750px]">
        <div className="flex justify-center items-center">
          <Image
            src={chan}
            alt="Profile Picture"
            width={100}
            height={100}
            className="rounded-full w-[50px] h-[50px]"
          />
          <h1 className="text-[40px] ml-2 font-extrabold italic dark:text-[#FFFFFF]">
            LIFE IS JOURNEY
          </h1>
        </div>
        <SocialBtn />
      </div>
      <div className="flex items-center justify-between w-[750px] mt-[15px]">
        <div className="relative flex items-center justify-center w-[460px] h-[270px] bg-gradient-to-r from-[#6dfaff] to-[#47d6f0] shadow-lg rounded-[10px] dark:bg-[#232323] animate-fadeInLeft group overflow-hidden cursor-pointer">
          <img
            className="w-[180px] relative z-[1] transition-transform duration-300 group-hover:z-[10]"
            src={imageSrc1}
            alt="image1"
          />
        </div>
        <div className="w-[270px] h-[270px] flex items-center justify-center bg-[#f3f3f3] dark:bg-[#232323] shadow-lg rounded-[10px]">
          <img
            className="w-[160px] mt-[10px] mr-[15px] relative z-[1] transition-transform duration-300 group-hover:z-[10]"
            src={imageSrc3}
            alt="image1"
          />
        </div>
      </div>
      <div className="flex items-center justify-between w-[750px] h-[160px] mt-[15px]">
        <div className="w-[290px] h-[160px] flex items-center justify-center bg-[#f3f3f3] dark:bg-[#232323] shadow-lg rounded-[10px]">
          <img
            className="w-[160px] mt-[10px] mr-[15px] relative z-[1] transition-transform duration-300 group-hover:z-[10]"
            src={imageSrc3}
            alt="image1"
          />
        </div>

        <div className="w-[440px] h-[160px] flex items-center justify-center bg-[#f3f3f3] dark:bg-[#232323] shadow-lg rounded-[10px]">
          <img
            className="w-[160px] mt-[10px] mr-[15px] relative z-[1] transition-transform duration-300 group-hover:z-[10]"
            src={imageSrc3}
            alt="image1"
          />
        </div>
      </div>
    </div>
  );
}
