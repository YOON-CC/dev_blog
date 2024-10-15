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
    <div className="hidden xl:flex w-full h-[200px] justify-center flex-col items-center mt-[250px]">
      <div className="animate-fadeInTop flex justify-between items-center w-[750px]">
        <div className="flex justify-center items-center">
          <Image
            src={chan}
            alt="Profile Picture"
            width={100}
            height={100}
            className="rounded-full w-[50px] h-[50px]"
          />
          <h1 className="text-[40px] font-bold ml-2 font-fantasy italic dark:text-[#FFFFFF]" style={{fontFamily:'fantasy', fontStyle:'oblique'}}>
            LIFE IS JOURNEY
          </h1>
        </div>
        <SocialBtn />
      </div>

      <div className="flex items-center justify-between w-[750px] mt-[15px]">
        <div
          className="flex items-center justify-center w-[490px] h-[340px] bg-black shadow-lg rounded-[10px] animate-fadeInLeft"
          style={{
            background: "linear-gradient(to right, #ff7e5f, #feb47b)"
          }}
        >
          <img
          className="w-[300px] h-[300px]"
            src='/banner1.png'
            alt="main image"
          />
        </div>
        <div className="w-[230px] h-[340px] flex flex-col justify-between">
          <div className="animate-fadeInTop rounded-[10px] "    
            style={{
              background: "linear-gradient(to bottom, #d4ed66, #b3f255)"
            }}>
            <img
              className="w-full shadow-lg"
              src="/banner2.png"
              alt="image1"
            />
          </div>
          <img
            className="animate-fadeInTop w-full rounded-[10px] shadow-lg"
            src="https://vrthumb.imagetoday.co.kr/2022/12/15/tid316t002793.jpg"
            alt="image2"
          />
        </div>
      </div>

      <div className="w-[750px] dark:text-[#FFFFFF]">
        <h1 className="text-[20px] font-fantasy italic mt-[60px] animate-fadeInLeft" style={{fontFamily:'fantasy', fontStyle:'oblique', fontWeight:'bolder'}}>POST (77)</h1>
      </div>
    </div>
  );
}
