import DarkModeToggle from "../ui/DarkModeToggle";
import TypingUi from "@/components/ui/TypingUi";

export default function MainHeader() {
  console.log("rsc");
  return (
    <header className="bg-[rgba(255,255,255,0.7)] dark:bg-[#121212ec] backdrop-blur-md flex justify-between items-center px-12 text-black dark:text-white border-b border-[#e3e3e3] dark:border-black h-12 sticky top-0 z-50 font-sans">
      {/* 헤더 */}
      <div className="flex text-[15px]">
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
