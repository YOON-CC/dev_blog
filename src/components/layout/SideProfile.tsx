import chan from "@/assets/images/chan.jpg";
import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";
import SocialBtn from "@/components/ui/SocialBtn";
import Link from "next/link";

export default function SideProfile() {
  return (
    <aside className="hidden xl:block bg-white shadow-md z-10 w-[300px] h-[550px] rounded-lg sticky top-[100px] dark:bg-[#1D1D1D]">
      <Link href={"/"} className="flex flex-col items-center mb-6 px-10 pt-10">
        <Image
          src={chan}
          alt="Profile Picture"
          width={250}
          height={250}
          className="rounded-lg"
        />
        <h1 className="text-2xl font-semibold mt-2 dark:text-[#ffffff]">
          CHAN
        </h1>
        <p className="text-gray-500 text-sm dark:text-[#cdcdcd]">
          과정은 복잡하되, 결과는 단순하게
        </p>
      </Link>

      <SocialBtn />

      <section className="px-8 dark:text-[#ffffff]">
        여기에 기술스택 들어가기
      </section>
    </aside>
  );
}
