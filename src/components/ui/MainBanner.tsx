"use client";

import Image from "next/image";
import chan from "@/assets/images/chan.jpg";
import { useEffect, useState } from "react";
import SocialBtn from "./SocialBtn";

export default function MainBanner() {
  const [imageSrc1, setImageSrc1] = useState("/banner6.png");
  const [imageSrc3, setImageSrc3] = useState("/banner8.png");

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
        <div className="relative flex items-center justify-center w-[490px] h-[340px] bg-[#efefef] shadow-lg rounded-[10px] dark:bg-[#232323] animate-fadeInLeft group overflow-hidden cursor-pointer"
          onMouseEnter={() => setImageSrc1("/banner1.png")}
          onMouseLeave={() => setImageSrc1("/banner6.png")}
        >
          <div className="absolute inset-0 w-0 bg-gradient-to-r from-[#f7c7ff] to-[#9eb9ff] rounded-[5px] shadow-[inset_2px_2px_2px_rgba(255,255,255,0.5),7px_7px_20px_rgba(0,0,0,0.1),4px_4px_5px_rgba(0,0,0,0.1)] transition-all duration-300 ease-in-out group-hover:w-full"></div>
          <img
            className="w-[300px] mt-[20px] mr-[15px] relative z-[1] transition-transform duration-300 group-hover:z-[10]"
            src={imageSrc1}
            alt="image1"
          />
        </div>
        <div className="w-[230px] h-[340px] flex flex-col justify-between">
          <div
            className="relative w-[230px] h-[200px] animate-fadeInTop rounded-[10px] bg-[#efefef] shadow-lg flex items-center justify-center dark:bg-[#232323] animate-fadeInLeft group overflow-hidden cursor-pointer"
          >
          <div className="absolute inset-0 w-0 bg-gradient-to-r from-[#9eb9ff] to-[#ddffa6] rounded-[5px] shadow-[inset_2px_2px_2px_rgba(255,255,255,0.5),7px_7px_20px_rgba(0,0,0,0.1),4px_4px_5px_rgba(0,0,0,0.1)] transition-all duration-300 ease-in-out group-hover:w-full"></div>
            <img
              className="w-[180px] mt-[20px] mr-[15px] relative z-[1] transition-transform duration-300 group-hover:z-[10]"
              src="/banner5.png"
              alt="image2"
            />
          </div>
          <div
            className="relative animate-fadeInTop w-[230px] h-[100px] flex items-center justify-center bg-[#efefef] shadow-lg rounded-[10px] dark:bg-[#232323] animate-fadeInLeft group overflow-hidden cursor-pointer"
            onMouseEnter={() => setImageSrc3("/banner3.png")}
            onMouseLeave={() => setImageSrc3("/banner8.png")}
          >
          <div className="absolute inset-0 w-0 bg-gradient-to-r from-[#9eb9ff] to-[#ddffa6] rounded-[5px] shadow-[inset_2px_2px_2px_rgba(255,255,255,0.5),7px_7px_20px_rgba(0,0,0,0.1),4px_4px_5px_rgba(0,0,0,0.1)] transition-all duration-300 ease-in-out group-hover:w-full"></div>
            <img className="w-[130px] relative z-[1] transition-transform duration-300 group-hover:z-[10]" src={imageSrc3} alt="image2" />
          </div>
        </div>
      </div>
    </div>
  );
}
