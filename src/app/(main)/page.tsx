import MarkDwonViewer from "@/components/view/MarkDownViewer";
import PostFooter from "@/components/layout/PostFooter";
import utcToKst from "@/utils/utcToKst";
import MainList from "./_component/MainList";

async function getMainListInfo() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_REACT_APP_API_URL}/api/list?category=All`,
    {
      cache: "no-store",
      headers: {},
    }
  );
  console.log("받음");
  const data = await res.json();
  return data;
  // return true;
}

export default async function Page() {
  const result = await getMainListInfo();

  return <MainList result={result} />;
}
