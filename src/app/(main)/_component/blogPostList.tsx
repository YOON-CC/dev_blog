"use client";

import { useEffect, useState } from "react";
import PostList from "@/components/view/PostList";
import { fetchData } from "../@list/_fetch/api";

export default function BlogPostList() {
  const [postList, setPostList] = useState<any[]>([]); // 게시글 목록 상태

  useEffect(() => {
    const loadPosts = async () => {
      console.log("체크포인트1");

      const res = await fetchData("JavaScript");

      // const res = await fetch(
      //   `${process.env.NEXT_PUBLIC_REACT_APP_API_URL}/api/list?category=TypeScript`,
      //   {
      //     cache: "no-store",
      //     headers: {},
      //   }
      // );

      // console.log(res);
      // const data = await res.json();
      console.log("체크포인트2");

      setPostList(res);
      console.log("체크포인트3");
    };

    loadPosts();
  }, []);
  console.log("fsdafsda");
  return (
    <section className="flex flex-col items-center">
      <PostList postList={postList} />
    </section>
  );
}
