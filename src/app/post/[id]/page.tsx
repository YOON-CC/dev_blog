import MarkDwonViewer from "@/components/view/MarkDownViewer";
import PostFooter from "@/components/layout/PostFooter";
import utcToKst from "@/utils/utcToKst";

async function getDetailInfo(id: any) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_REACT_APP_API_URL}/api/detail/${id}`,
    {
      cache: "no-store",
      headers: {},
    }
  );
  const data = await res.json();
  return data;
  // return true;
}

// export default async function Page(props: any) {
export default async function Page(props: any) {
  const id = props.params.id;
  const result = await getDetailInfo(id);

  return (
    <main className="w-[90%] xl:w-[750px] mx-[20px] flex flex-col justify-center items-center h-fit">
      <article className="bg-white w-full max-w-[100%] pb-16 xl:pb-20 pt-10 xl:pt-16 dark:bg-[#121212]">
        <div className="text-gray-500 dark:text-[#c4c4c4]">
          {utcToKst(result.post.createdAt)}
        </div>
        <h1 className="text-4xl font-bold mt-2 xl:mt-4 dark:text-[#ffffff]">
          {result.post.title}
        </h1>

        <div className="flex flex-wrap gap-2 mt-2 xl:mt-4 ">
          {result.post.categories
            .filter((tag: string) => tag !== "All")
            .map((tag: any, index: any) => (
              <span
                key={index}
                className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm mt-1 dark:bg-[#1D1D1D] dark:text-[#d9d9d9]"
              >
                {tag}
              </span>
            ))}
        </div>
        <div className="w-full bg-gray-100 p-4 mt-6 xl:mt-6 rounded-2xl dark:bg-[#1D1D1D] dark:text-[#d9d9d9]">
          &quot;{result.post.phrase}&quot;
        </div>
      </article>

      <MarkDwonViewer content={result.postContent.content} />
      <PostFooter />
    </main>
  );
}
