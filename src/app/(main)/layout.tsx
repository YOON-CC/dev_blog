import SideProfile from "@/components/layout/SideProfile";
import { Fragment, ReactNode } from "react";
import MainBanner from "@/components/ui/MainBanner";

type Props = { children: ReactNode;};

export default function Layout({ children}: Props) {
  return (
    <Fragment>
      <MainBanner />
      <main className="flex justify-center mt-[20px]">
        <SideProfile />
        {children}
      </main>
    </Fragment>
  );
}