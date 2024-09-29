import SideProfile from "@/components/layout/SideProfile";
import { Fragment, ReactNode } from "react";
import TagBar from "@/components/layout/TagBar";

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
