import DarkModeToggle from "../ui/DarkModeToggle";
import TypingUi from "@/components/ui/TypingUi";
import chan from "@/assets/images/chan.jpg";
import Image from "next/image";
export default function MainHeader() {
  return (
    <header className="flex justify-between items-center dark:border-black sticky top-0 z-50 font-sans bg-[rgba(255,255,255,0.7)] dark:bg-[#2F2F2Fec] backdrop-blur-md text-black dark:text-white h-12 xl:px-10 px-4">
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
        <h1 className="ml-[10px] text-lg font-bold">린터의 개발노트</h1>
      </div>

      <TypingUi />

      <DarkModeToggle />
    </header>
  );
}
