import Typewriter from "typewriter-effect";

export default function PostHeader() {
  return (
    <header className="h-10 bg-[#393D3F] flex justify-between items-center px-6 text-white text-4xl font-sans">
      {/* 헤더 */}
      <div className="flex text-xs">
        <span className="font-bold">포스트 헤더</span>
      </div>
      <div className="flex justify-center">
        <div className="rounded-full bg-red-500 w-2.5 h-2.5 mr-1.5"></div>
        <div className="rounded-full bg-yellow-500 w-2.5 h-2.5"></div>
        <div className="rounded-full bg-green-500 w-2.5 h-2.5 ml-1.5"></div>
      </div>
    </header>
  );
}
