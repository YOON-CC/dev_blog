import SideProfile from "@/components/layout/SideProfile";
import { Fragment, ReactNode } from "react";
import TagBar from "@/components/layout/TagBar";
import { CategoryProvider } from "@/context/CategoryContext";
import PostList from "@/components/view/PostList";
import BlogPostList from "./_component/blogPostList";

type Props = { children: ReactNode; list: ReactNode; post: ReactNode };

export default function Layout({ children, list, post }: Props) {
  return (
    <Fragment>
      {children}
      <main className="flex justify-center mt-[20px]">
        <SideProfile />
        <BlogPostList />
        {/* <CategoryProvider> */}
        {/* {list} */}
        <div className="hidden xl:block">{/* <TagBar /> */}</div>
        {/* </CategoryProvider> */}
      </main>
    </Fragment>
  );
}
