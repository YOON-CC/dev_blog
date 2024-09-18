import BannerContent from "@/components/layout/BannerContent";
import PostHeader from "@/components/layout/PostHeader";
import MDEditor from "@uiw/react-md-editor";
import path from "path";
import fs from "fs";
import matter from "gray-matter";
import MarkDwonViewer from "@/components/view/MarkDownViewr";
import PostFooter from "@/components/layout/PostFooter";

export async function getM() {
  const filePath = path.join(process.cwd(), "public", "content.md");
  const fileContent = fs.readFileSync(filePath, "utf8");
  return matter(fileContent);
}

export default async function Page() {
  const apple = await getM();
  console.log(apple);
  return (
    <main
      className="flex-1 h-screen overflow-y-auto"
      style={{ height: "calc(100vh - 2.5rem)" }}
    >
      <BannerContent />
      <MarkDwonViewer apple={apple} />
      <PostFooter />
    </main>
  );
}
