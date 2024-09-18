import banner from "@/assets/images/banner.png";

export default function BannerContent() {
  return (
    <section
      className="w-full h-[250px] bg-black/50 flex justify-center items-end bg-cover bg-center"
      style={{
        backgroundImage: `url(${banner.src})`,
        backgroundBlendMode: "darken",
      }}
    >
      <div className="h-[150px] w-[800px]">
        <h1 className="h-[70%] text-[35px] font-bold text-white">
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
    </section>
  );
}
