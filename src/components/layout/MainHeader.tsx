import Typewriter from "typewriter-effect";
import DarkModeToggle from "../ui/DarkModeToggle";

export default function MainHeader() {
  return (
    <header
      className="h-10 bg-[white] flex justify-between items-center px-6 text-black text-4xl font-sans"
      style={{ borderBottom: "1px solid #e3e3e3" }}
    >
      {/* 헤더 */}
      <div className="flex text-xs">
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
      <DarkModeToggle />
    </header>
  );
}
