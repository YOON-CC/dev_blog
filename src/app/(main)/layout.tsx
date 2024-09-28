import MainHeader from "@/components/layout/MainHeader";
import SideProfile from "@/components/layout/SideProfile";
import { Fragment, ReactNode } from "react";
import { useParams } from "next/navigation";
import TagBar from "@/components/layout/TagBar";
import MainBanner from "@/components/ui/MainBanner";
import banner from "@/assets/images/banner.png";
import DetailBar from "@/components/layout/DetailBar";
import { IoIosArrowForward } from "react-icons/io";
import BannerContent from "@/components/layout/BannerContent";
import { headers } from "next/headers";

type Props = { children: ReactNode; list: ReactNode; post: ReactNode };

export default function Layout({ children, list, post }: Props) {
  return (
    <Fragment>
      {children}
      <main className="flex justify-center mt-[20px]">
        <SideProfile />
        {list}
        <TagBar />
      </main>
    </Fragment>
  );
}
