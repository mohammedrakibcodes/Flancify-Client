"use client";

import useTask from "@/hooks/useTask";
import TaskHeader from "./TaskHeader";
import TaskInfo from "./TaskInfo";
import TaskDescription from "./TaskDescription";
import ClientInfo from "./ClientInfo";
import TaskSidebar from "./TaskSidebar";

export default function TaskDetails({ id }) {
  const { data: task, isError } = useTask(id);

  if (isError) {
    return (
      <section className="py-24 text-center">
        <h2 className="text-2xl font-bold text-red-600">
          Failed to load task.
        </h2>
      </section>
    );
  }

  if (!task) return null;

  return (
    <section className="bg-gray-50 py-16">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 lg:grid-cols-3 lg:px-8">
        <div className="space-y-6 lg:col-span-2">
          <TaskHeader task={task} />
          <TaskInfo task={task} />
          <TaskDescription task={task} />
          <ClientInfo task={task} />
        </div>

        <div>
          <TaskSidebar task={task} />
        </div>
      </div>
    </section>
  );
}
