import DarkModeToggle from "../ui/DarkModeToggle";
import TypingUi from "@/components/ui/TypingUi";
import chan from "@/assets/images/chan.jpg";
import Image from "next/image";
export default function MainHeader() {
  return (
    <header className="flex justify-between items-center border-b border-[#e3e3e3] dark:border-black sticky top-0 z-50 font-sans bg-[rgba(255,255,255,0.7)] dark:bg-[#121212ec] backdrop-blur-md text-black dark:text-white h-12 xl:px-12 px-4">
      {/* 헤더 */}
      <div
        className="xl:hidden font-bold flex"
        style={{ alignItems: "center" }}
      >
        <Image
          src={chan}
          alt="Profile Picture"
          width={100}
          height={100}
          className="rounded-full w-[26px] h-[26px]"
        />
        <div className="ml-[10px]">CHAN의 연구노트</div>
      </div>
      <div className="hidden xl:flex text-[15px]">
        <span className="font-light">안녕하세요!&nbsp;</span>
        <span className="font-bold">&quot;CHAN&quot;</span>
        <span className="font-light">의 연구노트 입니다.&nbsp;</span>
        <span className="font-light">저에게 있어서 개발은&nbsp;</span>
        <span className="font-bold">
          <TypingUi />
        </span>
      </div>
      <DarkModeToggle />
    </header>
  );
}
