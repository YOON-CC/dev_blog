import SideProfile from "@/components/layout/SideProfile";
import { Fragment, ReactNode } from "react";
import TagBar from "@/components/layout/TagBar";
import { CategoryProvider } from "@/context/CategoryContext";

type Props = { children: ReactNode; list: ReactNode; post: ReactNode };

export default function Layout({ children, list, post }: Props) {
  return (
    <Fragment>
      {children}
      <main className="flex justify-center mt-[20px]">
        <SideProfile />
        {/* <CategoryProvider> */}
        {/* {list} */}
        <div className="hidden xl:block">{/* <TagBar /> */}</div>
        {/* </CategoryProvider> */}
      </main>
    </Fragment>
  );
}
