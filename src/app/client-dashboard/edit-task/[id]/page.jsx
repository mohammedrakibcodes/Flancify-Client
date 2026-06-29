"use client";

import { Loader2 } from "lucide-react";
import { useParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";

import { getTaskById } from "@/services/taskApi";

import TaskForm from "@/components/dashboard/client/tasks/TaskForm";

export default function EditTaskPage() {
  const { id } = useParams();

  const {
    data: task,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["task", id],
    queryFn: () => getTaskById(id),
    enabled: !!id,
  });

  if (isLoading) {
    return (
      <div className="flex h-[60vh] items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-green-600" />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="rounded-xl border border-red-200 bg-red-50 p-5 text-red-600">
        Failed to load task.
      </div>
    );
  }

  return <TaskForm mode="edit" initialData={task} />;
}
