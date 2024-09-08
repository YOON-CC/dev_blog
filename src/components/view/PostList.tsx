"use client";

import Image from "next/image";
import banner from "@/assets/images/banner.png";

export default function PostList() {
  const generatePosts = () => {
    return Array.from({ length: 50 }, (_, index) => ({
      id: index + 1,
      title: `Post ${index + 1}`,
      hashtags: [`#Tag${index + 1}`, `#Category${(index % 5) + 1}`],
      date: `2024-09-${String((index % 30) + 1).padStart(2, "0")}`,
      imageUrl: { banner }, // Replace with your image URL
    }));
  };

  const posts = generatePosts();

  return (
    <article
      className="p-6 h-screen overflow-y-auto"
      style={{ height: "calc(100vh - 2.5rem)" }}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {posts.map((post) => (
          <div
            key={post.id}
            className="bg-white p-4 rounded-lg shadow-md flex"
            style={{
              height: "200px",
              transition: "transform 0.3s ease, background-color 0.3s ease",
              cursor: "pointer",
            }}
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
            <div className="flex-1 flex flex-col justify-between">
              {/* Hashtags */}
              <div>
                <div>
                  {post.hashtags.map((tag, index) => (
                    <span
                      key={index}
                      className="text-white text-sm mr-2 bg-[#393D3F] rounded-[5px] p-[3px] px-[8px] text-[12px]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                {/* Title */}
                <h2 className="text-xl font-bold break-words">{post.title}</h2>
              </div>

              {/* Date */}
              <p className="text-gray-500 text-sm">{post.date}</p>
            </div>
            {/* Right Side - Image */}
            <div className="ml-4">
              <Image
                src={banner}
                alt="Profile Picture"
                className="rounded-lg"
                style={{ width: "290px", height: "100%" }}
              />
            </div>
          </div>
        ))}
      </div>
    </article>
  );
}
