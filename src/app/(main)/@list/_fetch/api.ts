"use server";

export const fetchData = async (category: string) => {
  const startTime = Date.now(); // 시작 시간 기록
  console.log("api호출:", Date.now() - startTime, "ms");

  console.log("server");
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_REACT_APP_API_URL}/api/list?category=${category}`,
      {
        cache: "no-store",
        headers: {},
      }
    );

    console.log("조회횡ㄹㅊ", res);

    if (!res.ok) {
      throw new Error("게시글을 가져오는 데 실패했습니다.");
    }
    const endTime = Date.now(); // 끝 시간 기록
    console.log("api마감:", Date.now() - startTime, "ms");
    console.log("모든 게시글 조회 완료:", Date.now() - startTime, "ms");

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("API 호출 중 오류 발생:", error);
    throw error;
  }
};
