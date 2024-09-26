export default function TagBar() {
  return (
    <aside className="w-[300px] sticky top-[100px] h-fit p-[20px] border-l border-[#e3e3e3] flex flex-col gap-[5px] dark:border-[#000000]">
      <div className="text-[18px] text-[#00DF9C] font-bold">태그</div>
      <div className="text-[17px] dark:text-[#ffffff]">JavaScript</div>
      <div className="text-[17px] dark:text-[#ffffff]">React</div>
      <div className="text-[17px] dark:text-[#ffffff]">태그</div>
      <div className="text-[17px] dark:text-[#ffffff]">태그</div>
    </aside>
  );
}
