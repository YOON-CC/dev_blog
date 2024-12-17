"use client";

import Image from "next/image";
import chan from "@/assets/images/chan.jpg";
import { useEffect, useState } from "react";
import SocialBtn from "./SocialBtn";

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
          <h1 className="text-[40px] ml-2 font-extrabold italic dark:text-[#FFFFFF]">
            LIFE IS JOURNEY
          </h1>
        </div>
        <SocialBtn />
      </div>

      <div className="flex items-center justify-between w-[750px] mt-[15px]">
        <div
          className="flex items-center justify-center w-[490px] bg-[#efefef] h-[340px] shadow-lg rounded-[10px] dark:bg-[#232323] animate-fadeInLeft"
          style={
            {
              // background: "linear-gradient(77deg, #f7c7ff, #9eb9ff, #9eb9ff)",
            }
          }
        >
          <img
            className="w-[300px] h-[300px]"
            src="/banner6.png"
            alt="main image"
          />
        </div>
        <div className="w-[230px] h-[340px] flex flex-col justify-between">
          <div
            className="w-[230px] h-[200px] animate-fadeInTop rounded-[10px] bg-[#efefef] shadow-lg flex items-center justify-center dark:bg-[#232323]"
            style={
              {
                // background: "linear-gradient(77deg , #9eb9ff, #ddffa6)",
                // background:"#232323",
              }
            }
          >
            <img
              className="w-[180px] mt-[20px] mr-[15px]"
              src="/banner5.png"
              alt="image1"
            />
          </div>
          <div
            className="animate-fadeInTop w-[230px] h-[100px] flex items-center justify-center bg-[#efefef] shadow-lg rounded-[10px] dark:bg-[#232323]"
            style={
              {
                // background: "linear-gradient(77deg , #9eb9ff, #ddffa6)",
                // background:"#232323",
              }
            }
          >
            <img className="w-[130px] " src="/banner8.png" alt="image2" />
          </div>
        </div>
      </div>
    </div>
  );
}
