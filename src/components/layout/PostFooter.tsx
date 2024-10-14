import chan from "@/assets/images/chan.jpg";
import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";

export default function PostFooter() {
  return (
    <footer className="flex justify-center py-24">
      <div className="w-[100%] xl:w-[750px]">
        <div className="flex items-center dark:text-[#ffffff]">
          <Image
            src={chan}
            alt="Profile Picture"
            width={100}
            height={100}
            className="rounded-full w-[90px] h-[90px]"
          />
          <div className="ml-2.5">
            <h2 className="text-[22px] font-bold">CHAN</h2>
            <div className="text-[13px]">과정은 복잡하되, 결과는 단순하게</div>
          </div>
        </div>
        <hr className="mt-4"/>
        <div className="flex flex-col justify-center items-center mt-4 text-[11px] dark:text-[#ffffff]">
          <div>Thank You for Visiting My Blog, Have a Good Day 😆</div>
          <div>ⓒYoonchan Cho</div>
        </div>
      </div>
    </footer>
  );
}
