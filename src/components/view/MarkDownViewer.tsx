"use client";

import MDEditor from "@uiw/react-md-editor";
import { useDarkMode } from "@/context/DarkModeContext";
import "./customMarkdownStyles.css";

interface Props {
  content: any;
}

export default function MarkDwonViewer({ content }: Props) {
  const { isOn, toggleDarkMode } = useDarkMode();

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
        } w-[100%] bg-white dark:bg-[#2F2F2F] text-black dark:text-[#ffffff]`}
        source={apple}
      />
    </div>
  );
}
