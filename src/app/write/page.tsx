"use client";

import { useState } from "react";

export default function Write() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // 폼 기본 동작 방지
    console.log(title, content);
    // 서버로 POST 요청
    try {
      const response = await fetch("http://localhost:3000/api/post/new", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: title,
          content: content,
        }),
      });

      if (response.ok) {
        alert("글 작성 완료");
        setTitle("");
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
    <div className="p-20">
      <h4>글작성</h4>
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column" }}
      >
        <input
          name="title"
          placeholder="제목"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          name="content"
          placeholder="내용"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button type="submit">제출</button>
      </form>
    </div>
  );
}
