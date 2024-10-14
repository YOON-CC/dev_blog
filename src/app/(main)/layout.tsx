import SideProfile from "@/components/layout/SideProfile";
import { Fragment, ReactNode } from "react";
import MainBanner from "@/components/ui/MainBanner";

type Props = { children: ReactNode;};

export default function Layout({ children}: Props) {
  return (
    <Fragment>
      <MainBanner />
      {/* <main className="flex justify-center mt-[20px]"> */}
      <main className="flex justify-center mt-[170px]">

        {/* <SideProfile /> */}
      <aside className="hidden xl:block z-10 w-[300px] h-[550px] rounded-lg sticky top-[100px] "></aside>
        {children}
      </main>
    </Fragment>
  );
}