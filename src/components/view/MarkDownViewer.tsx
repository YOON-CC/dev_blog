"use client";

import MDEditor from "@uiw/react-md-editor";
import { useDarkMode } from "@/context/DarkModeContext";
import "./customMarkdownStyles.css";

interface Props {
  content: any;
}

export default function MarkDwonViewer({ content }: Props) {
  // console.log(content);
  const { isOn, toggleDarkMode } = useDarkMode();

  console.log(isOn, "입니다.");
  let hello = true;
  if (isOn) {
    hello = false;
  }

  const apple = content;

  return (
    <div className="w-[100%] flex justify-center" data-color-mode="light">
      <MDEditor.Markdown
        className={`${
          hello ? "light-markdown-preview" : "dark-markdown-preview"
        } w-[100%] bg-white dark:bg-[#121212] text-black dark:text-[#ffffff]`}
        source={apple}
      />
    </div>
  );
}
