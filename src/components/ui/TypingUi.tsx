"use client";

import { useEffect, useState } from "react";
import Typewriter from "typewriter-effect";
import Image from "next/image";
import chan from "@/assets/images/chan.jpg";
import Link from "next/link";

export default function TypingUi() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 10) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Link
        href={"/"}
        className={`hidden xl:flex justify-center items-center transition-opacity duration-500 ${
          isSticky ? "opacity-100" : "opacity-0"
        }`}
      >
        <Image
          src={chan}
          alt="Profile Picture"
          width={100}
          height={100}
          className="rounded-full w-6 h-6"
        />
        <div
          className="ml-1"
          style={{
            fontFamily: "fantasy",
            fontStyle: "oblique",
            fontWeight: "bolder",
          }}
        >
          CHAN
        </div>
      </Link>

      {!isSticky && (
        <div className={`hidden xl:flex text-sm`}>
          <span className="font-light">안녕하세요!&nbsp;</span>
          <span className="font-bold">&quot;CHAN&quot;</span>
          <span className="font-light">의 연구노트 입니다.&nbsp;</span>
          <span className="font-light">저에게 있어서 개발은&nbsp;</span>
          <span className="font-bold">
            <Typewriter
              options={{
                strings: [
                  '"창의적으로 만들어가는 것입니다."',
                  '"시각적으로 보여주는 것입니다."',
                  '"지속적으로 학습하는 것입니다."',
                  '"복잡한 문제를 단순화하는 것입니다."',
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </span>
        </div>
      )}
    </>
  );
}
