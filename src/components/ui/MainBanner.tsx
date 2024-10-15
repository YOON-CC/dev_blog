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
        <img
          className="animate-fadeInLeft w-[500px] rounded-[10px] shadow-lg"
          src="https://images.unsplash.com/photo-1649180559928-91d16a63bd39?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8M2QlMjAlRUMlOTUlODQlRUMlOUQlQjQlRUMlQkQlOTh8ZW58MHx8MHx8fDA%3D"
          alt="main image"
        />
        <div className="w-[230px] h-[340px] flex flex-col justify-between">
          <img
            className="animate-fadeInTop w-full rounded-[10px] shadow-lg"
            src="https://thumb17.iclickart.co.kr/Thumb17/16930000/16928468.jpg"
            alt="image1"
          />
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
