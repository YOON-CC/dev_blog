"use client";

import React from "react";
import SideProfile from "@/components/layout/SideProfile";
import PostList from "@/components/view/PostList";
import MainHeader from "@/components/layout/MainHeader";

const Home: React.FC = () => {
  return (
    <>
      <MainHeader />
      <main className="flex">
        <SideProfile />
        <section className="flex-1">
          <PostList />
        </section>
      </main>
    </>
  );
};

export default Home;
