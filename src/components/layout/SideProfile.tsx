import chan from "@/assets/images/chan.jpg";
import GitHubIcon from "@/assets/svg/GitHubIcon";
import LinkedInIcon from "@/assets/svg/LinkedInIcon";
import YoutubeIcon from "@/assets/svg/YouTubeIcon";
import Image from "next/image";
import Link from "next/link";

export default function SideProfile() {
  return (
    <aside className="bg-white h-screen w-64 shadow-md p-4">
      <div className="flex flex-col items-center mb-2">
        <Image
          src={chan}
          alt="Profile Picture"
          width={200}
          height={200}
          className="rounded-lg mt-5" // Tailwind class for rounded corners and margin-top
        />
        <h1 className="text-xl font-semibold p-0 mt-2">YOON-CC</h1>
        <p className="text-gray-500 text-sm">
          과정은 복잡하되, 결과는 단순하게
        </p>
      </div>

      <nav className="mb-6">
        <ul
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <li>
            <Link href="#profile" className="text-blue-500 hover:underline">
              <GitHubIcon />
            </Link>
          </li>
          <li>
            <Link href="#settings" className="text-blue-500 hover:underline">
              <YoutubeIcon />
            </Link>
          </li>
          <li>
            <Link
              href="#notifications"
              className="text-blue-500 hover:underline"
            >
              <LinkedInIcon />
            </Link>
          </li>
        </ul>
      </nav>

      <section>
        <h2 className="text-lg font-medium mb-2">Categories</h2>
        <ul className="space-y-2">
          <li>
            <a href="#category1" className="text-gray-700 hover:underline">
              Category 1
            </a>
          </li>
          <li>
            <a href="#category2" className="text-gray-700 hover:underline">
              Category 2
            </a>
          </li>
          <li>
            <a href="#category3" className="text-gray-700 hover:underline">
              Category 3
            </a>
          </li>
        </ul>
      </section>
    </aside>
  );
}
