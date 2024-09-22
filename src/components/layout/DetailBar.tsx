import chan from "@/assets/images/chan.jpg";
import Image from "next/image";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function DetailBar() {
  return (
    <aside
      className="bg-white shadow-md z-10 w-[300px] rounded-lg sticky top-[100px] p-6"
      style={{ height: "fit-content" }}
    >
      <div className="flex justify-between items-center">
        <Image
          src={chan}
          alt="Profile Picture"
          width={45}
          height={45}
          className="rounded-full"
        />
        <p className="text-gray-500 text-sm">
          과정은 복잡하되, 결과는 단순하게
        </p>
      </div>

      <div className="px-6 pt-6 flex justify-between items-center">
        <div className="flex items-center">
          <FaArrowLeft size={15} />
          <span className="ml-1 text-sm">이전글</span>
        </div>
        <div className="flex items-center">
          <span className="mr-1 text-sm">다음글</span>
          <FaArrowRight size={15} />
        </div>
      </div>
    </aside>
  );
}
