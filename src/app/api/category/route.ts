import { connectDB } from "@/utils/database";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const db = (await connectDB).db("forum");
    const categoryCollection = db.collection("categories");

    const categories = await categoryCollection.find({}).toArray();
    // console.log(categories);
    return NextResponse.json(categories);
  } catch (error) {
    console.error("데이터 조회 중 오류 발생:", error);
    return NextResponse.json(
      { message: "데이터 조회 실패", error },
      { status: 500 }
    );
  }
}
