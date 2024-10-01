import { connectDB } from "@/utils/database";
import { NextRequest, NextResponse } from "next/server";

// 게시글 작성
export async function POST(req: NextRequest, res: any) {
  try {
    const body = await req.json();
    // console.log("프론트에서 온 데이터:", body);

    // MongoDB 연결
    const db = (await connectDB).db("forum");

    // 게시글 정보만 저장
    const postCollection = db.collection("post");
    const postResult = await postCollection.insertOne({
      title: body.title,
      phrase: body.phrase,
      categories: body.categories,
      createdAt: new Date(),
    });

    // 게시글의 내용을 별도의 컬렉션에 저장
    const contentCollection = db.collection("postContent");
    const contentResult = await contentCollection.insertOne({
      postId: postResult.insertedId, // post와 연결하기 위한 ID 저장
      content: body.content,
    });

    // 카테고리 정보를 처리
    const categoryCollection = db.collection("categories");
    for (const category of body.categories) {
      // 기존 카테고리 검색
      const existingCategory = await categoryCollection.findOne({
        name: category,
      });
      if (existingCategory) {
        // 기존 카테고리가 있다면, 해당 카테고리에 게시글 ID 추가
        await categoryCollection.updateOne(
          { _id: existingCategory._id },
          { $addToSet: { postIds: postResult.insertedId } }
        );
      } else {
        // 새로운 카테고리라면, 새로운 카테고리 생성
        await categoryCollection.insertOne({
          name: category,
          postIds: [postResult.insertedId], // 처음 생성 시 해당 게시글 ID 추가
        });
      }
    }

    console.log("데이터 저장 성공:", postResult, contentResult);

    return NextResponse.json({ message: "글 저장 완료", postResult });
  } catch (error) {
    console.error("데이터 저장 중 오류 발생:", error);
    return NextResponse.json(
      { message: "데이터 저장 실패", error },
      { status: 500 }
    );
  }
}
