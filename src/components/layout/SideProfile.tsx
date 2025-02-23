import chan from "@/assets/images/chan.jpg";
import Image from "next/image";
import SocialBtn from "@/components/ui/SocialBtn";
import Link from "next/link";
import SocialBtnSide from "../ui/SocialBtnSide";

interface Props {
  isSticky: boolean;
}

export default function SideProfile({ isSticky }: Props) {
  return (
    <aside
      className={`${
        isSticky ? "block opacity-100" : "hidden opacity-0"
      } xl:block z-10 w-[300px] h-[fit-content] sticky top-[100px] transition-opacity duration-500`}
      style={{
        display: "flex",
        justifyContent: "end",
        alignItems: "end",
        paddingRight: "20px",
      }}
    >
      <div
        className="hidden xl:block bg-white shadow-lg rounded-full dark:bg-[#1D1D1D]"
        style={{ padding: "20px 20px" }}
      >
        <SocialBtnSide />
      </div>
    </aside>
  );
}
