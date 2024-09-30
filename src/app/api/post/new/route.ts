import { connectDB } from "@/utils/database";
import { NextRequest, NextResponse } from "next/server";

//test
export async function POST(req: any, res: any) {
  try {
    const body = await req.json();
    console.log("프론트에서 온 데이터:", body);

    // MongoDB 연결
    const db = (await connectDB).db("forum"); // 사용할 데이터베이스 명
    const collection = db.collection("post"); // 저장할 컬렉션 명

    // 데이터 삽입
    const result = await collection.insertOne({
      title: body.title,
      content: body.content,
      createdAt: new Date(),
    });

    console.log("데이터 저장 성공:", result);

    return NextResponse.json({ message: "글 저장 완료", result });
  } catch (error) {
    console.error("데이터 저장 중 오류 발생:", error);
    return NextResponse.json(
      { message: "데이터 저장 실패", error },
      { status: 500 }
    );
  }
}
