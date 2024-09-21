"use client";

import MainHeader from "@/components/layout/MainHeader";
import SideProfile from "@/components/layout/SideProfile";
import { ReactNode } from "react";
import { useParams } from "next/navigation";
import TagBar from "@/components/layout/TagBar";

type Props = { children: ReactNode; list: ReactNode; post: ReactNode };

export default function Layout({ children, list, post }: Props) {
  const params = useParams();
  console.log([params]);

  return (
    <>
      <MainHeader />
      <div
        style={{
          width: "100%",
          height: "150px",
          display: "flex",
          justifyContent: "center",
          marginTop: "20px",
        }}
      >
        <div
          style={{
            height: "100%",
            width: "1310px",
            background: "linear-gradient(to right, #a3e635, #fb923c, #a855f7)",
            borderRadius: "10px",
            fontSize: "39px",
            fontWeight: "bold",
            textAlign: "center",
            color: "#ffffff",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {"<> Life is journey </>"}
        </div>{" "}
      </div>
      <main className="flex justify-center mt-[20px]">
        <SideProfile />
        {children}
        {!params || Object.keys(params).length === 0 ? list : post}
        <TagBar />
      </main>
    </>
  );
}
