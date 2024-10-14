"use client";

import { useEffect, useState } from "react";
import PostList from "@/components/view/PostList";
import { fetchData } from "@/app/(main)/_fetch/api";
import Link from "next/link";

type CategoryType = {
  _id: string;
  name: string;
  postIds: string[];
};

export default function Page() {
  
  const [category, setCategory] = useState('All')
  const [categoryList, setCategoryList] = useState<CategoryType[]>([]);
  const [postList, setPostList] = useState<any[]>([]); // 게시글 목록 상태

  useEffect(() => {
    const loadPosts = async () => {
      console.log("체크포인트1");

      const res = await fetchData(category);
      console.log("체크포인트2");

      setPostList(res);
      console.log("체크포인트3");
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
      {/* 리스트 */}
      <article className="flex flex-col items-center">
        {/* <PostList postList={postList} /> */}
     <div className="grid grid-cols-1 gap-8">
        {postList.map((post: any)=>(
          <Link
            href={`/post/${post._id}`}
            key={post._id}
            className=" bg-white p-4 rounded-lg shadow-md xl:flex xl:h-52 transition-transform duration-300 ease-in-out cursor-pointer justify-between dark:bg-[#1D1D1D] hover:bg-[#e1e1e1] dark:hover:bg-[#272727]"
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.01)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            {/* Left Side */}
            <div className="w-[100%] flex flex-col justify-between xl:w-[48%]">
              <div>
                {/* Hashtags */}
                {/* <ul className="flex flex-wrap mb-2 list-none p-0 m-0">
                  {post.categories
                    .filter((tag: string) => tag !== "All")
                    .map((tag: any, index: any) => (
                      <li
                        key={index}
                        className="text-black text-sm mr-2 mb-2 bg-[#e3e3e3] rounded-[5px] px-[8px] text-[10px] shadow-md "
                        style={{ whiteSpace: "nowrap" }}
                      >
                        {tag}
                      </li>
                    ))}
                </ul> */}
                {/* Title */}
                <h2 className="text-xl font-bold mt-2 break-words dark:text-[#ffffff]">
                  {post.title}
                </h2>
              </div>
              {/* Date */}
              <p className="text-gray-500 text-sm dark:text-[#bebebe] mt-2 xl:mt-0">
                {/* {utcToKst(post.createdAt)} */}
              </p>
            </div>
            {/* Right Side - Image */}
            <div className="relative w-[100%] h-44 xl:w-[48%]  mt-4 xl:mt-0">
              {/* <Image
                src={post.thumbnail}
                width={200}
                height={200}
                alt="Profile Picture"
                className="rounded-lg w-[100%] h-[100%]"
              /> */}
            </div>
          </Link>
        ))}
      </div>
      </article>

      {/* 카테고리-xl 사이즈일 때*/}
      <aside className="w-[100%] xl:w-[300px] sticky top-[100px] h-fit xl:p-[20px] xl:border-l xl:border-[#e3e3e3] flex-col gap-[5px] dark:xl:border-[#1D1D1D]">
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
