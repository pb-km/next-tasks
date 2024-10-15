"use client";

import { deleteTask, FormState } from "@/actions/task";
import { useEffect } from "react";
import { useFormState, useFormStatus } from "react-dom";
import { FaTrashAlt } from "react-icons/fa";

interface TaskDeleteButtonProps {
  id: string;
}

/**
 * 削除ボタン
 * @param param0 パラメータ
 * @returns 削除ボタンのコンポーネント
 */
const TaskDeleteButton: React.FC<TaskDeleteButtonProps> = ({ id }) => {
  const deleteTaskWithId = deleteTask.bind(null, id);
  const initialState: FormState = { error: "" };
  const [state, formAction] = useFormState(deleteTaskWithId, initialState);

  /**
   * ステート変更時のイベント
   */
  useEffect(() => {
    if (state && state.error !== "") {
      alert(state.error);
    }
  }, [state]);

  /**
   * 削除ボタン
   * @returns 削除ボタンのコンポーネント
   */
  const SubmitButton = () => {
    const { pending } = useFormStatus();

    return (
      <button
        type="submit"
        disabled={pending}
        className="hover:text-gray-700 text-lg cursor-pointer disabled:bg-gray-400"
      >
        <FaTrashAlt />
      </button>
    );
  };

  return (
    <form action={formAction}>
      <SubmitButton />
    </form>
  );
};

export default TaskDeleteButton;
