import chan from "@/assets/images/chan.jpg";
import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";

export default function PostHeader() {
  return (
    <header className="h-10 bg-[#393D3F] flex justify-between items-center px-6 text-white text-4xl font-sans">
      <nav className="flex items-center gap-2.5">
        <Image
          src={chan}
          alt="Profile Picture"
          width={30}
          height={30}
          className="w-[30px] h-[30px] rounded-full"
        />
        <ul className="flex text-sm">
          <li className="flex items-center">
            <IoIosArrowForward size={10} />
            <span>&nbsp;Web Dev&nbsp;</span>
            <IoIosArrowForward size={10} />
          </li>
          <li className="flex items-center">
            <span>&nbsp;JavaScript&nbsp;</span>
          </li>
        </ul>
      </nav>
      <div className="flex justify-center">
        <div className="rounded-full bg-red-500 w-2.5 h-2.5 mr-1.5"></div>
        <div className="rounded-full bg-yellow-500 w-2.5 h-2.5"></div>
        <div className="rounded-full bg-green-500 w-2.5 h-2.5 ml-1.5"></div>
      </div>
    </header>
  );
}
