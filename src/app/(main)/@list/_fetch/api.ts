"use server";

export const fetchData = async (category: string) => {
  console.log("server");
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_REACT_APP_API_URL}/api/list?category=${category}`,
      {
        cache: "no-store",
        headers: {},
      }
    );

    if (!res.ok) {
      throw new Error("게시글을 가져오는 데 실패했습니다.");
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("API 호출 중 오류 발생:", error);
    throw error;
  }
};
