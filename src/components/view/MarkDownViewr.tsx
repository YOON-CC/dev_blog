"use client";

import MDEditor from "@uiw/react-md-editor";
import { useDarkMode } from "@/context/DarkModeContext";

import "./customMarkdownStyles.css";

export default function MarkDwonViewer() {
  const { isOn, toggleDarkMode } = useDarkMode();

  console.log(isOn, "입니다.");
  let hello = true;
  if (isOn) {
    hello = false;
  }

  const apple = `
  # 웹팩 설정 분석
  
  루트 폴더에 \`webpack.config.js\` 파일을 생성하면 웹팩이 자동으로 해당 파일을 사용하게 된다. 그렇다면, 위의 코드는 어떤 역할을 하는지 알아보자.
  
  ## 진입점 설정
  
  \`\`\`javascript
  entry: './src/index.tsx'
  \`\`\`
  진입점(entry point)을 설정한다. 애플리케이션의 진입점은 \`src/index.tsx\` 파일이다. 즉, 번들링 과정에서 웹팩은 이 파일을 기준으로 의존성 트리를 구축하여 필요한 다른 모듈을 찾아서 번들에 포함시키고, 결과물은 이러한 의존성 트리를 따라가면서 실행될 수 있도록 정리한다.
  
  ## 출력 설정
  
  \`\`\`javascript
  output: { ... }
  \`\`\`
  번들링된 파일의 출력 설정을 지정한다. 개발 모드일 경우에는 \`bundle.js\`로 출력되고, 프로덕션 모드일 경우에는 콘텐츠 해시를 포함한 \`bundle.[contenthash].js\` 형식으로 출력된다.
  
  ---
  
  ### 마무리
  
  > 직접 적용한 웹팩을 분석해보며, 이후 프로젝트의 방향을 잡을 수 있어서 좋았습니다.
  `;

  return (
    <div className="flex justify-center" data-color-mode="light">
      <MDEditor.Markdown
        className={`${
          hello ? "light-markdown-preview" : "dark-markdown-preview"
        } w-[600px] bg-white dark:bg-[#121212] text-black dark:text-[#ffffff]`}
        source={apple}
      />
    </div>
  );
}
