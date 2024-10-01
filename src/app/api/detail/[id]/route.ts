import { connectDB } from "@/utils/database";
import { ObjectId } from "mongodb";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: { id: any } }
) {
  console.log(req);
  const { id } = params; // URL에서 id 추출
  try {
    const db = (await connectDB).db("forum");

    // post와 postContent에서 데이터 조회
    const post = await db
      .collection("post")
      .findOne({ _id: ObjectId.createFromHexString(id) });
    const postContent = await db
      .collection("postContent")
      .findOne({ postId: ObjectId.createFromHexString(id) });

    if (!post) {
      return NextResponse.json(
        { message: "게시글을 찾을 수 없습니다." },
        { status: 404 }
      );
    }

    return NextResponse.json({ post, postContent });
  } catch (error) {
    console.error("데이터 조회 중 오류 발생:", error);
    return NextResponse.json(
      { message: "데이터 조회 실패", error },
      { status: 500 }
    );
  }
}
