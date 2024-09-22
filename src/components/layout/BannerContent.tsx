import banner from "@/assets/images/banner.png";
import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";

export default function BannerContent() {
  return (
    <section className="w-full h-[200px] flex justify-center mt-5">
      <div
        className="h-full w-[1390px] rounded-lg text-4xl font-bold text-white flex justify-center items-center bg-black/50 bg-cover bg-center"
        style={{
          backgroundImage: `url(${banner.src})`,
          backgroundBlendMode: "darken",
        }}
      >
        <div className="h-full w-full flex flex-col justify-between items-center">
          {/* Breadcrumbs */}
          <div className="w-full p-2.5">
            <div className="flex items-center gap-2.5 text-white">
              <ul className="flex text-xs">
                <li className="flex items-center">
                  <span>&nbsp;Home&nbsp;</span>
                  <IoIosArrowForward size={10} />
                </li>
                <li className="flex items-center">
                  <span>&nbsp;Web Dev&nbsp;</span>
                  <IoIosArrowForward size={10} />
                </li>
                <li className="flex items-center">
                  <span>&nbsp;JavaScript&nbsp;</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Banner Content */}
          <div className="h-[70%] w-[600px]">
            <h1 className="h-[70%] text-4xl font-bold text-white">
              JavaScript의 근본
            </h1>
            <footer className="flex justify-between items-center h-[30%] text-white text-xs">
              <nav className="flex items-center gap-2.5">
                <span>카테고리1</span>
                <span>카테고리2</span>
                <span>카테고리3</span>
                <span>카테고리4</span>
              </nav>
              <time dateTime="2024-12-12">2024-12-12</time>
            </footer>
          </div>
        </div>
      </div>
    </section>
  );
}
