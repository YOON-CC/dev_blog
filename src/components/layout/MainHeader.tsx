import DarkModeToggle from "../ui/DarkModeToggle";
import TypingUi from "@/components/ui/TypingUi";
import chan from "@/assets/images/chan.jpg";
import Image from "next/image";
import Head from "next/head";

export default function MainHeader() {
  return (
    <>
      <Head>
        <title>개발자 윤찬</title>
        <meta
          name="description"
          content="프론트엔드, 시각화, AI, OpenCV, React, D3.js, Next.js 관련 개발 기록과 인사이트를 공유하는 블로그"
        />
        <meta
          name="keywords"
          content="윤찬, 개발노트, 프론트엔드, Next.js, D3.js, OpenCV, AI, 시각화"
        />
      </Head>

      <header className="flex justify-between items-center dark:border-black sticky top-0 z-50 font-sans bg-[rgba(255,255,255,0.7)] dark:bg-[#2F2F2Fec] backdrop-blur-md text-black dark:text-white h-12 xl:px-10 px-4">
        {/* 페이지 대표 제목 (시맨틱) */}
        <h1 className="sr-only">개발자 윤찬</h1>

        {/* 모바일 전용 로고 */}
        <div className="xl:hidden font-bold flex items-center">
          <Image
            src={chan}
            alt="웹 개발자 윤찬의 프로필 사진"
            width={100}
            height={100}
            priority
            className="rounded-full w-[26px] h-[26px]"
          />
          <span className="ml-[10px] text-lg font-bold">개발자 윤찬</span>
        </div>

        <TypingUi />
        <DarkModeToggle />
      </header>
    </>
  );
}
