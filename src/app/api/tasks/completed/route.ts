import { connectDb } from "@/utils/database";
import { TaskDocument, TaskModel } from "@/models/task";
import { NextResponse } from "next/server";

/**
 * 完了タスクの取得
 * @returns レスポンス
 */
export const GET = async () => {
  try {
    await connectDb();
    const completedTasks: TaskDocument[] = await TaskModel.find({
      isCompleted: true,
    });
    return NextResponse.json({ message: "タスク取得成功", tasks: completedTasks });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "タスク取得失敗" }, { status: 500 });
  }
};

export const dynamic = "force-dynamic";
