"use client";

import { Fragment, ReactNode, useEffect, useState } from "react";
import PostList from "@/components/view/PostList";
import Link from "next/link";
import SideProfile from "@/components/layout/SideProfile";
import { json } from "stream/consumers";

type CategoryType = {
  _id: string;
  name: string;
  postIds: string[];
};

export default function MainList(result: any) {
  const [category, setCategory] = useState("All");
  const [categoryList, setCategoryList] = useState<CategoryType[]>([]);
  const [isSticky, setIsSticky] = useState(false);

  const [layout, setLayout] = useState<"grid" | "block">("grid");

  useEffect(() => {
    const startTime = Date.now(); // 시작 시간 기록
    console.log("카테고리 api 호출:", Date.now() - startTime, "ms");
    const fetchCategories = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_REACT_APP_API_URL}/api/category`,
          {
            cache: "no-store",
          }
        );
        const data: CategoryType[] = await res.json();
        console.log("카테고리 api마감:", Date.now() - startTime, "ms");

        console.log(data);
        setCategoryList(data);
      } catch (error) {
        console.error("Failed to fetch categories:", error);
      }
    };

    fetchCategories();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 200) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="xl:flex">
      {/* 카테고리-xl 사이즈가 아닐 때*/}
      <aside className="xl:hidden flex justify-center items-center mb-[20px]">
        <div className="flex flex-wrap overflow-x-auto w-[90%] gap-[7px]">
          {categoryList.map((cat) => (
            <div
              key={cat._id}
              className={`text-[16px] cursor-pointer border rounded-lg px-3 pt-3 pb-2  ${
                category === cat.name
                  ? "font-bold text-[#00DF9C] dark:text-[#00DF9C] border-[#00DF9C]"
                  : "dark:text-white"
              }`}
              onClick={() => setCategory(cat.name)}
            >
              {cat.name === "All" ? "전체" : cat.name}{" "}
              {`(${cat.postIds.length})`}
            </div>
          ))}
        </div>
      </aside>

      <SideProfile />

      {/* 리스트 */}

      <article className="flex flex-col items-center">
        <PostList postList={result.result} />
        {/* {JSON.stringify(result)} */}
      </article>

      {/* 카테고리-xl 사이즈일 때*/}
      <aside
        className={`xl:block xl:w-[300px] sticky top-[100px] h-fit xl:p-[20px] xl:border-l xl:border-[#e3e3e3] 
        flex-col gap-[5px] dark:xl:border-[#1D1D1D] transition-opacity duration-500`}
      >
        <div className="hidden xl:flex flex-col gap-[5px]">
          {categoryList.map((cat) => (
            <div
              key={cat._id}
              className={`text-[16px] cursor-pointer ${
                category === cat.name
                  ? "font-bold text-[#00DF9C] dark:text-[#00DF9C]"
                  : "dark:text-[#ffffff]"
              }`}
              onClick={() => setCategory(cat.name)}
            >
              {cat.name === "All" ? "전체" : cat.name}{" "}
              {`(${cat.postIds.length})`}
            </div>
          ))}
        </div>
      </aside>
    </section>
  );
}
