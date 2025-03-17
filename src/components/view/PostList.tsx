"use client";

import { useState } from "react";

import Image from "next/image";
import Link from "next/link";
import utcToKst from "@/utils/utcToKst";
import SocialBtn from "../ui/SocialBtn";

interface Props {
  postList: any;
}

export default function PostList({ postList }: Props) {
  const [layout, setLayout] = useState<"grid" | "block">("block");

  return (
    <article className="w-[90%] xl:w-[750px] mx-5 h-fit">
      <div className="w-[750px] dark:text-[#FFFFFF] justify-between mt-[60px] mb-[20px] hidden xl:flex">
        <h1 className="text-[20px] font-fantasy font-extrabold italic animate-fadeInLeft mt-[10px]">
          POST
        </h1>
        <div className="flex space-x-2">
          <button
            className={`px-4 pt-2 pb-1 rounded-lg font-semibold text-sm transition-all shadow-md focus:outline-none ${
              layout === "block"
                ? "bg-[#3F96FF] text-white"
                : "bg-[#efefef] dark:bg-[#232323] hover:bg-[#dcdcdc] dark:hover:bg-[#3a3a3a]"
            }`}
            onClick={() => setLayout("block")}
          >
            1 Line
          </button>
          <button
            className={`px-4 pt-2 pb-1 rounded-lg font-semibold text-sm transition-all shadow-md focus:outline-none ${
              layout === "grid"
                ? "bg-[#3F96FF] text-white"
                : "bg-[#efefef] dark:bg-[#232323] hover:bg-[#dcdcdc] dark:hover:bg-[#3a3a3a]"
            }`}
            onClick={() => setLayout("grid")}
          >
            2 Line
          </button>
        </div>
      </div>

      <div className="xl:hidden pt-4 pb-6">
        <SocialBtn />
      </div>

      <div
        className={`${
          layout === "grid"
            ? "grid grid-cols-1 md:grid-cols-2 gap-8"
            : "flex flex-col space-y-4"
        }`}
      >
        {postList
          .slice()
          .reverse()
          .map((post: any) => (
            <Link
              href={`/post/${post._id}`}
              key={post._id}
              className={`${
                layout === "grid"
                  ? "bg-white rounded-lg shadow-lg transition-transform duration-300 ease-in-out cursor-pointer dark:bg-[#232323] hover:bg-[#e1e1e1] dark:hover:bg-[#272727] animate-fadeInBottom"
                  : "flex items-center bg-white rounded-lg shadow-lg dark:bg-[#232323] hover:bg-[#e1e1e1] dark:hover:bg-[#272727] animate-fadeInBottom p-4"
              }`}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform =
                  layout === "grid" ? "scale(1.01)" : "none";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
              }}
            >
              {/* Image */}
              <div
                className={`${
                  layout === "grid"
                    ? "relative w-full h-44 mb-4"
                    : "flex-shrink-0 relative w-34 h-32 xl:mr-4"
                }`}
              >
                <Image
                  src={post.thumbnail}
                  width={500}
                  height={500}
                  alt="Post Thumbnail"
                  className={`object-cover w-full h-full ${
                    layout === "block"
                      ? "hidden xl:flex rounded-lg"
                      : "rounded-tl-lg rounded-tr-lg"
                  }`}
                />
              </div>

              {/* Title and content */}
              <div
                className={`${
                  layout === "block" ? "flex-grow pl-2" : "pr-6 pl-6 pb-6 "
                }`}
              >
                <ul className="flex flex-wrap mb-2 list-none m-0">
                  {post.categories
                    .filter((tag: string) => tag !== "All")
                    .map((tag: any, index: any) => (
                      <li
                        key={index}
                        className="text-[#3A3A3A] dark:text-[#ffffff] text-sm mr-2 mb-2 pt-1 rounded-[5px] px-[8px] text-[10px] border border-[#3A3A3A] dark:border-[#ffffff] text-center"
                        style={{ whiteSpace: "nowrap" }}
                      >
                        {tag}
                      </li>
                    ))}
                </ul>
                <h2 className="text-xl font-bold mb-2 break-words dark:text-[#ffffff]">
                  {post.title}
                </h2>
                <p className="text-gray-500 text-sm dark:text-[#bebebe]">
                  {utcToKst(post.createdAt)}
                </p>
              </div>
            </Link>
          ))}
      </div>

      <footer>
        <div className="flex flex-col justify-center items-center mt-4 text-[11px] p-10 dark:text-[#ffffff]">
          <div>Thank You for Visiting My Blog, Have a Good Day 😆</div>
          <div>ⓒYoonchan Cho</div>
        </div>
      </footer>
    </article>
  );
}
