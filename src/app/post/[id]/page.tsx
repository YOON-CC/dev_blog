import BannerContent from "@/components/layout/BannerContent";
import PostHeader from "@/components/layout/PostHeader";
import MDEditor from "@uiw/react-md-editor";
import path from "path";
import fs from "fs";
import matter from "gray-matter";
import MarkDwonViewer from "@/components/view/MarkDownViewr";

export async function getM() {
  const filePath = path.join(process.cwd(), "public", "content.md");
  const fileContent = fs.readFileSync(filePath, "utf8");
  return matter(fileContent);
}

export default async function Page() {
  const apple = await getM();
  console.log(apple);
  return (
    <main style={{ height: "100vh", overflow: "auto" }}>
      <PostHeader />
      <BannerContent />
      <MarkDwonViewer apple={apple} />
    </main>
  );
}
