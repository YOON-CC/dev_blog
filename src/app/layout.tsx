import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import MainHeader from "@/components/layout/MainHeader";
import { DarkModeProvider } from "@/context/DarkModeContext";

const inter = Inter({ subsets: ["latin"] });

const gms = localFont({
  src: "../../public/fonts/GmarketSansMedium.otf",
  display: "swap",
  variable: "--font-gms",
});

export const metadata: Metadata = {
  title: "개발자 린터",
  description: "린터(Rinter)의 개발노트 입니다.",
  keywords: "린터, Rinter, YOON-CC, 조윤찬",
  authors: [{ name: "린터", url: "https://github.com/YOON-CC" }],
  robots: "index, follow",
  themeColor: "#ffffff",
  openGraph: {
    title: "린터 - FE의 개발노트 입니다.",
    description: "린터(Rinter)의 개발노트 입니다.",
    url: "https://www.dev-chan.site/",
    siteName: "린터",
    images: [
      {
        url: "https://www.dev-chan.site/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fchan.7099a3e7.jpg&w=128&q=75",
        width: 1200,
        height: 630,
        alt: "린터 - 개발노트트",
      },
    ],
    locale: "ko_KR",
    type: "article",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className={gms.variable}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="린터(Rinter)의 개발노트 입니다." />
        <meta name="keywords" content="린터(Rinter)의 개발노트 입니다." />
        <meta name="author" content="Your Name" />
        <meta property="og:title" content="린터(Rinter)의 개발노트 입니다." />
        <meta
          property="og:description"
          content="린터(Rinter)의 개발노트 입니다."
        />
        <meta property="og:url" content="https://www.dev-chan.site/" />
        <meta property="og:site_name" content="개발자 린터" />
        <meta
          property="og:image"
          content="https://yourwebsite.com/og-image-linter.png"
        />
        <meta property="og:locale" content="ko_KR" />
      </head>
      <body className="dark:bg-[#2F2F2F] font-gms">
        <script
          id="theme-provider"
          dangerouslySetInnerHTML={{
            __html: `
              const darkModeSetting = localStorage.getItem('dark-mode');
              if (darkModeSetting === 'true') {
                document.documentElement.classList.add('dark');
              } else {
                document.documentElement.classList.remove('dark');
              }
            `,
          }}
        />
        <DarkModeProvider>
          <MainHeader />
          {children}
        </DarkModeProvider>
      </body>
    </html>
  );
}
