export default function PostSection() {
  return (
    <aside className="w-[300px] sticky top-[100px] h-fit p-[20px] border-l border-[#e3e3e3] flex flex-col gap-[5px] dark:border-[#000000]">
      <div className="text-[18px] text-[#00DF9C] font-bold">
        JS를 next처럼 쓰는 자들
      </div>
      <div className="text-[17px] dark:text-[#ffffff]">
        왜 Layout을 그렇게 짜는거임?
      </div>
      <div className="text-[17px] dark:text-[#ffffff]">문제는 공식문서</div>
      <div className="text-[17px] dark:text-[#ffffff]">
        결국 rsc를 이용안하는거
      </div>
      <div className="text-[17px] dark:text-[#ffffff]">마무리</div>
    </aside>
  );
}
