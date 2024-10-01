"use client";

import { useCategory } from "@/context/CategoryContext";

export default function TagBar() {
  const { category, setCategory } = useCategory();

  const categories = ["JavaScript", "React.js", "TypeScript", "Next.js"];

  return (
    <aside className="w-[300px] sticky top-[100px] h-fit p-[20px] border-l border-[#e3e3e3] flex flex-col gap-[5px] dark:border-[#000000']">
      {/* <div className="text-[18px] text-[#00DF9C] font-bold">
        현재 카테고리: {category}
      </div> */}
      {categories.map((cat) => (
        <div
          key={cat}
          className={`text-[17px] dark:text-[#ffffff] cursor-pointer ${
            category === cat ? "font-bold text-[#00DF9C]" : ""
          }`}
          onClick={() => setCategory(cat)} // 카테고리 클릭 시 업데이트
        >
          {cat}
        </div>
      ))}
    </aside>
  );
}
