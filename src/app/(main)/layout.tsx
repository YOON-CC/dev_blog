"use client";

import MainHeader from "@/components/layout/MainHeader";
import SideProfile from "@/components/layout/SideProfile";
import { ReactNode } from "react";
import { useParams } from "next/navigation";
import TagBar from "@/components/layout/TagBar";
import MainBanner from "@/components/ui/MainBanner";
import banner from "@/assets/images/banner.png";
import DetailBar from "@/components/layout/DetailBar";
import { IoIosArrowForward } from "react-icons/io";
import BannerContent from "@/components/layout/BannerContent";

type Props = { children: ReactNode; list: ReactNode; post: ReactNode };

export default function Layout({ children, list, post }: Props) {
  const params = useParams();
  const isParamsEmpty = !params || Object.keys(params).length === 0;

  return (
    <>
      <MainHeader />
      {isParamsEmpty && <MainBanner />}
      {!isParamsEmpty && <BannerContent />}
      <main className="flex justify-center mt-[20px]">
        {isParamsEmpty && <SideProfile />}
        {!isParamsEmpty && <DetailBar />}

        {children}
        {isParamsEmpty ? list : post}
        <TagBar />
      </main>
    </>
  );
}
