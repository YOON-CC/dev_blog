"use client";

import { useEffect } from "react";
import MDEditor from "@uiw/react-md-editor";
import { useDarkMode } from "@/context/DarkModeContext";
import "./customMarkdownStyles.css";

interface Props {
  content: any;
}

export default function MarkDwonViewer({ content }: Props) {
  const { isOn, toggleDarkMode } = useDarkMode();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_REACT_APP_API_URL}/api/category`,
          {
            cache: "no-store",
          }
        );

        console.log(res);
      } catch (error) {
        console.error("Failed to fetch categories:", error);
      }
    };

    fetchCategories();
  }, []);

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
