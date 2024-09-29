import PostSection from "@/components/layout/PostSection";
import Link from "next/link";
import { ReactNode } from "react";

type Props = { children: ReactNode };

export default function Layout({ children }: Props) {
  return (
    <main className="flex justify-center mt-5">
      <aside className="z-10 w-[300px] h-[550px] sticky top-[100px]"></aside>
      {children}
      <PostSection />
      <Link href={"/"}>
        <nav className="w-[120px] bg-gray-200 fixed bottom-10 right-10 p-2.5 rounded-full text-center cursor-pointer text-gray-400 transition-transform transform hover:scale-105 hover:bg-gray-300 hover:text-gray-600">
          Go To Home
        </nav>
      </Link>
    </main>
  );
}
