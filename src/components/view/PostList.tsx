"use client";

import Image from "next/image";
import Link from "next/link";
import utcToKst from "@/utils/utcToKst";
import SocialBtn from "../ui/SocialBtn";

interface Props {
  postList: any;
}

export default function PostList({ postList }: Props) {
  return (
    <article className="w-[90%] xl:w-[750px] mx-5 h-fit">
      <div className="xl:hidden pt-4 pb-6">
        <SocialBtn />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* 거꾸로 출력 */}
        {postList
          .slice()
          .reverse()
          .map((post: any) => (
            <Link
              href={`/post/${post._id}`}
              key={post._id}
              className="bg-white p-4 rounded-lg shadow-lg transition-transform duration-300 ease-in-out cursor-pointer dark:bg-[#1D1D1D] hover:bg-[#e1e1e1] dark:hover:bg-[#272727] animate-fadeInBottom"
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.01)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
              }}
            >
              {/* Image on top */}
              <div className="relative w-full h-44 mb-4">
                <Image
                  src={post.thumbnail}
                  width={300}
                  height={300}
                  alt="Profile Picture"
                  className="rounded-lg w-full h-full object-cover"
                />
              </div>

              {/* Title and content */}
              <div>
                {/* Hashtags */}
                <ul className="flex flex-wrap mb-2 list-none p-0 m-0">
                  {post.categories
                    .filter((tag: string) => tag !== "All")
                    .map((tag: any, index: any) => (
                      <li
                        key={index}
                        className="text-black text-sm mr-2 mb-2 bg-[#e3e3e3] rounded-[5px] px-[8px] text-[10px] shadow-md"
                        style={{ whiteSpace: "nowrap" }}
                      >
                        {tag}
                      </li>
                    ))}
                </ul>

                {/* Title */}
                <h2 className="text-xl font-bold mb-2 break-words dark:text-[#ffffff]">
                  {post.title}
                </h2>

                {/* Date */}
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
