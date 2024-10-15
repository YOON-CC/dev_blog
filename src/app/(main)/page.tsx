"use client";

import { Fragment, ReactNode, useEffect, useState } from "react";
import PostList from "@/components/view/PostList";
import { fetchData } from "@/app/(main)/_fetch/api";
import Link from "next/link";
import SideProfile from "@/components/layout/SideProfile";

type CategoryType = {
  _id: string;
  name: string;
  postIds: string[];
};

export default function Page() {
  
  const [category, setCategory] = useState('All')
  const [categoryList, setCategoryList] = useState<CategoryType[]>([]);
  const [postList, setPostList] = useState<any[]>([]); // 게시글 목록 상태
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    
    const loadPosts = async () => {
      const startTime = Date.now(); // 시작 시간 기록
      console.log("api 호출:", Date.now() - startTime, "ms");

      const res = await fetchData(category);

      // const res = await fetch(
      //   `${process.env.NEXT_PUBLIC_REACT_APP_API_URL}/api/list?category=${category}`,
      //     {
      //       cache: "no-store",
      //     }
      // );
      
      console.log("api받아왔을때:", Date.now() - startTime, "ms");

      // const data = await res.json();

      console.log("api 마감:", Date.now() - startTime, "ms");
      
      
      const duplicatedPosts = Array(5).fill(res).flat();
      setPostList(duplicatedPosts);

      // setPostList(res)
      
    };

    loadPosts();

  }, [category]);


  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_REACT_APP_API_URL}/api/category`,
          {
            cache: "no-store",
          }
        );
        const data: CategoryType[] = await res.json();
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
              className={`text-[16px] cursor-pointer border border-gray-300 rounded-lg p-2 ${
                category === cat.name
                  ? "font-bold text-[#00DF9C] dark:text-[#00DF9C]"
                  : "dark:text-white"
              }`}
              onClick={() => setCategory(cat.name)}
            >
              {cat.name === "All" ? "전체" : cat.name} {`(${cat.postIds.length})`}
            </div>
          ))}
        </div>
      </aside>

      <SideProfile isSticky={isSticky}/>

      {/* 리스트 */}
      <article className="flex flex-col items-center">
        <PostList postList={postList} />
      </article>

      {/* 카테고리-xl 사이즈일 때*/}
      {/* <aside
        className={`${
          isSticky ? "block opacity-100" : "hidden opacity-0"
        } w-[100%] xl:w-[300px] sticky top-[100px] h-fit xl:p-[20px] xl:border-l xl:border-[#e3e3e3] flex-col gap-[5px] dark:xl:border-[#1D1D1D]`}
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
              {cat.name === "All" ? "전체" : cat.name} {`(${cat.postIds.length})`}
            </div>
          ))}
        </div>
      </aside> */}
      <aside
        className={`${
          isSticky ? "block opacity-100" : "hidden opacity-0"
        } xl:block xl:w-[300px] sticky top-[100px] h-fit xl:p-[20px] xl:border-l xl:border-[#e3e3e3] flex-col gap-[5px] dark:xl:border-[#1D1D1D] transition-opacity duration-500`}
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
              {cat.name === "All" ? "전체" : cat.name} {`(${cat.postIds.length})`}
            </div>
          ))}
        </div>
      </aside>
    </section>
  );
}
