"use client";

import { useCategory } from "@/context/CategoryContext";
import { useEffect, useState } from "react";

type CategoryType = {
  _id: string;
  name: string;
  postIds: string[];
};

export default function TagBar() {
  const { category, setCategory } = useCategory();
  const [categoryList, setCategoryList] = useState<CategoryType[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch(`http://localhost:3000/api/category`, {
          cache: "no-store",
        });
        const data: CategoryType[] = await res.json();
        setCategoryList(data);
      } catch (error) {
        console.error("Failed to fetch categories:", error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <aside className="w-[300px] sticky top-[100px] h-fit p-[20px] border-l border-[#e3e3e3] flex flex-col gap-[5px] dark:border-[#000000']">
      {categoryList.map((cat) => (
        <div
          key={cat._id}
          className={`text-[16px] dark:text-[#ffffff] cursor-pointer ${
            category === cat.name ? "font-bold text-[#00DF9C]" : ""
          }`}
          onClick={() => setCategory(cat.name)}
        >
          {cat.name === "All" ? "전체" : cat.name} {`(${cat.postIds.length})`}
        </div>
      ))}
    </aside>
  );
}
