import MainBanner from "@/components/ui/MainBanner";

export async function getAuctionInfo() {
  const res = await fetch("http://localhost:3000/api/list", {
    cache: "no-store",
    headers: {},
  });

  const data = await res.json();

  return data;
}

export default async function Home() {
  const result = await getAuctionInfo();
  console.log(result);
  return <MainBanner />;
}
