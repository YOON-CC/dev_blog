import { connectDB } from "@/utils/database";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const category = searchParams.get("category"); // 쿼리 문자열에서 category 가져오기

    const db = (await connectDB).db("forum"); // 사용할 데이터베이스 명
    const categoryCollection = db.collection("categories"); // 카테고리 컬렉션
    const postCollection = db.collection("post"); // 게시글 컬렉션

    let posts: any[] = [];

    if (category) {
      // 해당 카테고리의 postId 가져오기
      const categoryDoc = await categoryCollection.findOne({ name: category });
      if (categoryDoc) {
        const postIds = categoryDoc.postIds; // 해당 카테고리에 속하는 게시글 ID 배열
        // 해당 ID를 가진 게시글 조회
        posts = await postCollection.find({ _id: { $in: postIds } }).toArray();
      }
    } else {
      // 카테고리가 없으면 모든 게시글 조회
      posts = await postCollection.find({}).toArray();
    }

    return NextResponse.json(posts);
  } catch (error) {
    console.error("데이터 조회 중 오류 발생:", error);
    return NextResponse.json(
      { message: "데이터 조회 실패", error },
      { status: 500 }
    );
  }
}
