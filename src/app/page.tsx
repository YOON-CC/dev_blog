"use client";

import React, { useState } from "react";
import SideProfile from "@/components/layout/SideProfile";
import PostList from "@/components/view/PostList";
import MainHeader from "@/components/layout/MainHeader";
import PostHeader from "@/components/layout/PostHeader";
import BannerContent from "@/components/layout/BannerContent";
import MarkDwonViewer from "@/components/view/MarkDownViewr";

export default function Home() {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <MainHeader />
      <main className="flex">
        <SideProfile />
        {!toggle && (
          <section className="flex-1" onClick={() => setToggle(!toggle)}>
            <PostList />
          </section>
        )}
        {toggle && (
          <main className=" h-screen overflow-y-auto">
            {/* <PostHeader /> */}
            <BannerContent />
            {/* <MarkDwonViewer apple={apple} /> */}
          </main>
        )}
      </main>
    </>
  );
}
