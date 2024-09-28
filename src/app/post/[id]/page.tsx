import BannerContent from "@/components/layout/BannerContent";
import PostHeader from "@/components/layout/PostHeader";
import MDEditor from "@uiw/react-md-editor";
import path from "path";
import fs from "fs";
import matter from "gray-matter";
import MarkDwonViewer from "@/components/view/MarkDownViewr";
import PostFooter from "@/components/layout/PostFooter";
import Image from "next/image";
import banner from "@/assets/images/banner.png";

export async function getM() {
  const filePath = path.join(process.cwd(), "public", "content.md");
  const fileContent = fs.readFileSync(filePath, "utf8");
  return matter(fileContent);
}

export default async function Page() {
  const apple = await getM();
  // console.log(apple);

  const hashTags = [
    "#JavaScript",
    "#DeepDive",
    "#Code",
    "#React",
    "#TailwindCSS",
    "#TailwindCSS",
    "#TailwindCSS",
  ];
  return (
    <main
      className="h-screen"
      style={{
        width: "750px",
        marginLeft: "20px",
        marginRight: "20px",
        height: "fit-content",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <article className="bg-white w-full max-w-[600px] pb-20 pt-16 dark:bg-[#121212]">
        <div className="text-gray-500 dark:text-[#c4c4c4]">2024-09-01</div>
        <h1 className="text-4xl font-bold mt-2 dark:text-[#ffffff]">
          Js를 가죽까지 남기지 않고, 파해치기.
        </h1>

        <div className="flex flex-wrap gap-2 mt-4 ">
          {hashTags.map((tag, index) => (
            <span
              key={index}
              className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm mt-1 dark:bg-[#1D1D1D] dark:text-[#d9d9d9]"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="w-full bg-gray-100 p-4 mt-10 rounded-2xl dark:bg-[#1D1D1D] dark:text-[#d9d9d9]">
          &quot;학문의 깊이는 평생 정의할 수 없다. 정의하는 순간, 성장하지
          않은것이니.&quot;
        </div>
      </article>

      {/* <BannerContent /> */}
      <MarkDwonViewer apple={apple} />
      <PostFooter />
    </main>
  );
}
