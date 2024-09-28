import PostSection from "@/components/layout/PostSection";
import { ReactNode } from "react";

type Props = { children: ReactNode };

export default function Layout({ children }: Props) {
  return (
    <main className="flex justify-center mt-[20px]">
      <aside className="z-10 w-[300px] h-[550px] sticky top-[100px]"></aside>
      {children}
      <PostSection />
      <nav
        style={{
          width: "120px",
          background: "#f1f1f1",
          position: "fixed",
          bottom: 40,
          right: 40,
          padding: "10px",
          borderRadius: "99px",
          textAlign: "center",
          cursor: "pointer",
          color: "#a3a3a3",
        }}
      >
        Go To Home
      </nav>
    </main>
  );
}
