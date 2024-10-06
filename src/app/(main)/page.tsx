"use client";

import MainBanner from "@/components/ui/MainBanner";
import { useEffect, useState } from "react";
import { fetchData } from "./@list/_fetch/api";
import PostList from "@/components/view/PostList";

export default function Home() {
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
    <>
      <MainBanner />
      <section className="flex flex-col items-center">
        <PostList postList={postList} />
      </section>
    </>
  );
}
