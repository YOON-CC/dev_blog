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
      setIsSticky(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* 상단 고정 상태일 때 로고 */}
      <Link
        href="/"
        aria-label="홈으로 이동"
        className={`hidden xl:flex justify-center items-center transition-opacity duration-500 ${
          isSticky ? "opacity-100" : "opacity-0"
        }`}
      >
        <Image
          src={chan}
          alt="웹 개발자 윤찬의 프로필 사진"
          width={100}
          height={100}
          priority
          className="rounded-full w-6 h-6"
        />
        <div className="ml-1 font-extrabold italic">개발자 윤찬</div>
      </Link>

      {/* 초기 상태 인삿말 + SEO-friendly 타이핑 */}
      {!isSticky && (
        <div className="hidden xl:flex text-sm">
          <span className="font-light">안녕하세요!&nbsp;</span>
          <strong>윤찬</strong>
          <span className="font-light">
            의 개발노트 입니다. 저에게 있어서 개발은&nbsp;
          </span>

          {/* SEO용 전체 문구 (검색엔진 노출) */}
          <span className="sr-only">
            창의적으로 만들어가는 것입니다. 시각적으로 보여주는 것입니다.
            지속적으로 학습하는 것입니다. 복잡한 문제를 단순화하는 것입니다.
          </span>

          {/* 화면용 타이핑 효과 */}
          <span className="font-bold" aria-hidden="true">
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
