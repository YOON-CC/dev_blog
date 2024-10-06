"use client";

import PostList from "@/components/view/PostList";
// import { useCategory } from "@/context/CategoryContext";
import { useEffect, useState } from "react";
import { fetchData } from "@/app/(main)/@list/_fetch/api"; // API 호출 함수 import

export default function Page() {
  // const { category } = useCategory();
  const [postList, setPostList] = useState<any[]>([]); // 게시글 목록 상태

  // useEffect(() => {
  //   const loadPosts = async () => {
  //     const posts = await fetchData(category);
  //     setPostList(posts);
  //   };

  //   loadPosts();
  // }, [category]);

  useEffect(() => {
    const loadPosts = async () => {
      const posts = await fetchData("JavaScript");
      setPostList(posts);
    };

    loadPosts();
  }, []);

  return (
    <section className="flex flex-col items-center">
      <PostList postList={postList} />
    </section>
  );
}
