"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import "@uiw/react-md-editor/markdown-editor.css"; // MDEditor CSS 파일 추가
import "@uiw/react-markdown-preview/markdown.css"; // Markdown 미리보기 CSS

const MDEditor = dynamic(() => import("@uiw/react-md-editor"), { ssr: false });

export default function Write() {
  const [title, setTitle] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [phrase, setPhrase] = useState("");

  const [category, setCategory] = useState("");
  const [categories, setCategories] = useState<string[]>(["All"]);
  const [content, setContent] = useState<string | undefined>(""); // MDEditor의 기본값은 undefined 허용

  const addCategory = () => {
    if (category.trim() !== "") {
      setCategories([...categories, category.trim()]);
      setCategory(""); // 카테고리 입력 필드를 비움
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // 폼 기본 동작 방지
    console.log(title, categories, content);

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_REACT_APP_API_URL}/post/new`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title: title,
            thumbnail: thumbnail,
            phrase: phrase,
            categories: categories,
            content: content,
          }),
        }
      );

      if (response.ok) {
        alert("글 작성 완료");
        setTitle("");
        setThumbnail("");
        setPhrase("");
        setCategories(["All"]);
        setContent("");
      } else {
        alert("글 작성 실패");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("오류 발생");
    }
  };

  return (
    <div className="p-2 w-[90%] mx-auto">
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4 mt-8">
        <input
          name="title"
          placeholder="제목"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="p-2 border border-gray-300 rounded"
        />
        <input
          name="thumbnail"
          placeholder="썸네일 주소"
          value={thumbnail}
          onChange={(e) => setThumbnail(e.target.value)}
          className="p-2 border border-gray-300 rounded"
        />
        <input
          name="phrase"
          placeholder="명언"
          value={phrase}
          onChange={(e) => setPhrase(e.target.value)}
          className="p-2 border border-gray-300 rounded"
        />
        <div className="flex space-x-2">
          <input
            name="category"
            placeholder="카테고리"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="p-2 border border-gray-300 rounded flex-grow"
          />
          <button
            type="button"
            onClick={addCategory}
            className="bg-green-500 text-white p-2 rounded hover:bg-green-600"
          >
            추가
          </button>
        </div>
        <div>
          {categories.length > 0 && (
            <div className="mt-2">
              <ul className="list-disc list-inside flex">
                {categories.map((cat, index) => (
                  <li key={index} className="ml-6">
                    {cat}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <MDEditor
          value={content}
          onChange={setContent}
          className="p-2 border border-gray-300 rounded"
          height={500} // 높이 설정
        />
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          제출
        </button>
      </form>
    </div>
  );
}
