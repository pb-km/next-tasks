"use server";

import { connectDb } from "@/utils/database";
import { Task, TaskModel } from "@/models/task";
import { redirect } from "next/navigation";

export interface FormState {
  error: string;
}

/**
 * タスク作成
 * @param state ステート
 * @param formData 画面のデータ
 * @returns ステート
 */
export const createTask = async (state: FormState, formData: FormData) => {
  const newTask: Task = {
    title: formData.get("title") as string,
    description: formData.get("description") as string,
    dueDate: formData.get("dueDate") as string,
    isCompleted: false,
  };

  try {
    await connectDb();
    await TaskModel.create(newTask);
  } catch (error) {
    state.error = "タスクの作成に失敗しました。";
    return state;
  }

  redirect("/");
};

/**
 * タスク更新
 * @param id ID
 * @param state ステート
 * @param formData 画面のデータ
 * @returns ステート
 */
export const updateTask = async (
  id: string,
  state: FormState,
  formData: FormData
) => {
  const updateTask: Task = {
    title: formData.get("title") as string,
    description: formData.get("description") as string,
    dueDate: formData.get("dueDate") as string,
    isCompleted: !!formData.get("isCompleted"),
  };

  try {
    await connectDb();
    await TaskModel.updateOne({ _id: id }, updateTask);
  } catch (error) {
    state.error = "タスクの更新に失敗しました。";
    return state;
  }

  redirect("/");
};

/**
 * タスク削除
 * @param id ID
 * @param state ステート
 * @returns ステート
 */
export const deleteTask = async (
  id: string,
  state: FormState
) => {
  try {
    await connectDb();
    await TaskModel.deleteOne({ _id: id });
  } catch (error) {
    state.error = "タスクの削除に失敗しました。";
    return state;
  }

  redirect("/");
};
