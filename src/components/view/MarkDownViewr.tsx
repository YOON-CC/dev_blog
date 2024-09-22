"use client";
import MDEditor from "@uiw/react-md-editor";
// import "@uiw/react-md-editor/markdown-editor.css";
// import "@uiw/react-markdown-preview/markdown.css";
import "./customMarkdownStyles.css";

export default function MarkDwonViewer(apple: any) {
  console.log(apple.apple.content);

  return (
    <div
      data-color-mode="light"
      style={{
        display: "flex",
        justifyContent: "center",
        background: "white",
      }}
    >
      <MDEditor.Markdown
        className="markdown-preview"
        style={{ width: "600px" }}
        source={apple.apple.content}
      />
    </div>
  );
}
