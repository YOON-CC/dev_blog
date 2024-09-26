"use client";
import MDEditor from "@uiw/react-md-editor";
import "./customMarkdownStyles.css";

interface MarkDwonViewerProps {
  apple: {
    content: string;
  };
}

export default function MarkDwonViewer({ apple }: MarkDwonViewerProps) {
  console.log(apple.content);

  let hello = true;
  return (
    <div className="flex justify-center" data-color-mode="light">
      <MDEditor.Markdown
        className={`${
          hello ? "light-markdown-preview" : "dark-markdown-preview"
        } w-[600px] bg-white dark:bg-[#121212] text-black dark:text-[#ffffff]`}
        source={apple.content}
      />
    </div>
  );
}
