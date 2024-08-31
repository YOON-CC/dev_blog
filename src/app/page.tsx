import SideProfile from "@/components/layout/SideProfile";

export default function Home() {
  return (
    <main style={{ display: "flex" }}>
      <SideProfile />
      <div
        className="flex-1"
        style={{
          height: "200px",
          background: "linear-gradient(135deg, #2AE2A9, #7CC9D5, #90B8FA)",
        }}
      ></div>
    </main>
  );
}
