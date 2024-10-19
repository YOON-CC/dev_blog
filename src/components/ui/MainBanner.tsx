"use client";

import Image from "next/image";
import chan from "@/assets/images/chan.jpg";
import { useEffect, useState } from "react";
import SocialBtn from "./SocialBtn";

type CategoryType = {
  _id: string;
  name: string;
  postIds: string[];
};

export default function MainBanner() {
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
          <h1
            className="text-[40px] ml-2 font-extrabold italic dark:text-[#FFFFFF]"
            style={{ fontFamily: "fantasy" }}
          >
            LIFE IS JOURNEY
          </h1>
        </div>
        <SocialBtn />
      </div>

      <div className="flex items-center justify-between w-[750px] mt-[15px]">
        <div
          className="flex items-center justify-center w-[490px] h-[340px] bg-black shadow-lg rounded-[10px] animate-fadeInLeft"
          style={{
            background: "linear-gradient(77deg, #f7c7ff, #9eb9ff, #00E4FF)",
          }}
        >
          <img
            className="w-[300px] h-[300px]"
            src="/banner1.png"
            alt="main image"
          />
        </div>
        <div className="w-[230px] h-[340px] flex flex-col justify-between">
          <div
            className="w-[230px] h-[200px] animate-fadeInTop rounded-[10px] shadow-lg flex items-center justify-center"
            style={{
              background: "linear-gradient(77deg , #ddffa6, #00ffaa)",
            }}
          >
            <img className="w-[180px]" src="/banner2.png" alt="image1" />
          </div>
          <div
            className="animate-fadeInTop w-[230px] h-[100px] flex items-center justify-center shadow-lg rounded-[10px]"
            style={{
              background: "linear-gradient(77deg , #ffe599, #ddffa6)",
            }}
          >
            <img className="w-[140px] " src="/banner3.png" alt="image2" />
          </div>
        </div>
      </div>

      <div className="w-[750px] dark:text-[#FFFFFF]">
        <h1 className="text-[20px] font-fantasy font-extrabold italic mt-[60px] animate-fadeInLeft">
          POST
        </h1>
      </div>
    </div>
  );
}
