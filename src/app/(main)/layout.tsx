"use client";

import MainHeader from "@/components/layout/MainHeader";
import SideProfile from "@/components/layout/SideProfile";
import { ReactNode } from "react";
import { useParams } from "next/navigation";

type Props = { children: ReactNode; list: ReactNode; post: ReactNode };

export default function Layout({ children, list, post }: Props) {
  const params = useParams();

  return (
    <>
      <MainHeader />
      <main className="flex">
        <SideProfile />
        {children}
        {!params || Object.keys(params).length === 0 ? list : post}
      </main>
    </>
  );
}
