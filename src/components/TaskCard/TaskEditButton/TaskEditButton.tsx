import Link from "next/link";
import { FaPen } from "react-icons/fa";

interface TaskEditButtonProps {
  id: string;
}

/**
 * 編集ボタン
 * @param param0 パラメータ
 * @returns 編集ボタンのコンポーネント
 */
const TaskEditButton: React.FC<TaskEditButtonProps> = ({ id }) => {
  return (
    <Link href={`edit//${id}`}>
      <FaPen className="hover:text-gray-700 text-lg cursor-pointer"></FaPen>
    </Link>
  );
};

export default TaskEditButton;
