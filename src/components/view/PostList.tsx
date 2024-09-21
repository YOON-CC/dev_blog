"use client";

import Image from "next/image";
import banner from "@/assets/images/banner.png";
import Link from "next/link";

export default function PostList() {
  const generatePosts = () => {
    return Array.from({ length: 50 }, (_, index) => ({
      id: index + 1,
      title: `Post ${
        index + 1
      }ㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇ`,
      hashtags: [
        `#Category0${(index % 5) + 1}`,
        `#Category1${(index % 5) + 1}`,
        `#Category2${(index % 5) + 1}`,
      ],
      date: `2024-09-${String((index % 30) + 1).padStart(2, "0")}`,
      imageUrl: banner, // Use the image URL directly
    }));
  };

  const posts = generatePosts();

  return (
    <article
      className="h-screen"
      style={{
        width: "750px",
        marginLeft: "20px",
        marginRight: "20px",
        height: "fit-content",
      }}
    >
      <div className="grid grid-cols-1 gap-8">
        {" "}
        {/* Single column grid */}
        {posts.map((post) => (
          <Link
            href={`/post/${post.id}`}
            key={post.id}
            className="bg-white p-4 rounded-lg shadow-md flex h-52 transition-transform duration-300 ease-in-out cursor-pointer justify-between"
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.01)";
              e.currentTarget.style.backgroundColor = "#e1e1e1";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.backgroundColor = "white";
            }}
          >
            {/* Left Side */}
            <div className="flex-1 flex flex-col justify-between pr-4">
              <div>
                {/* Hashtags */}
                <ul className="flex flex-wrap mb-2 list-none p-0 m-0">
                  {post.hashtags.map((tag, index) => (
                    <li
                      key={index}
                      className="text-white text-sm mr-2 mb-2 bg-[#00DF9C] rounded-[5px] px-[8px] text-[10px]"
                      style={{ whiteSpace: "nowrap" }}
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
                {/* Title */}
                <h2 className="text-xl font-bold mt-2 break-words">
                  {post.title}
                </h2>
              </div>
              {/* Date */}
              <p className="text-gray-500 text-sm">{post.date}</p>
            </div>
            {/* Right Side - Image */}
            <div className="relative w-44 h-44">
              <Image
                src={banner}
                alt="Profile Picture"
                className="rounded-lg"
                fill
              />
            </div>
          </Link>
        ))}
      </div>

      <footer>
        <div className="flex flex-col justify-center items-center mt-4 text-[11px] p-10">
          <div>Thank You for Visiting My Blog, Have a Good Day 😆</div>
          <div>ⓒYoonchan Cho</div>
        </div>
      </footer>
    </article>
  );
}
