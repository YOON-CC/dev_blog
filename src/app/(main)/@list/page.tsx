import PostList from "@/components/view/PostList";
import { useCategory } from "@/context/CategoryContext";

async function getPostList(category: any) {
  const res = await fetch(
    `http://localhost:3000/api/list?category=${category}`,
    {
      cache: "no-store",
      headers: {},
    }
  );

  const data = await res.json();
  return data;
}

// export default async function Page({ searchParams }) {
export default async function Page() {
  // const { category } = searchParams; // 쿼리 문자열에서 category 가져오기
  const postList = await getPostList("JavaScript");

  return (
    <section>
      <PostList postList={postList} />
    </section>
  );
}
