import TaskCard from "@/components/TaskCard/TaskCard";
import { TaskDocument } from "@/models/task";

/**
 * 完了タスクの取得
 * @returns 完了タスク
 */
const getCompletedTasks = async (): Promise<TaskDocument[]> => {
  const response = await fetch(`${process.env.API_URL}/tasks/completed`, {
    cache: "no-store",
  });

  if (response.status !== 200) {
    throw new Error();
  }

  const data = await response.json();
  return data.tasks as TaskDocument[];
};

/**
 * 完了タスクページ
 * @returns 完了タスクページのコンポーネント
 */
const CompletedTaskPage = async () => {
  const completedTasks = await getCompletedTasks();

  return (
    <div className="text-gray-800 p-8 h-full overflow-y-auto pb-24">
      <header className="flex justify-between items-center">
        <h1 className="text-2xl font-bold flex items-center">
          Completed Tasks
        </h1>
      </header>
      <div className="mt-8 flex flex-wrap gap-4">
        {completedTasks.map((task) => (
          <TaskCard key={task._id} task={task} />
        ))}
      </div>
    </div>
  );
};

export default CompletedTaskPage;
