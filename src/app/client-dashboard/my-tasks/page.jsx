"use client";

import { useMemo, useState } from "react";
import { Loader2 } from "lucide-react";

import useMyTasks from "@/hooks/useMyTasks";

import TaskToolbar from "@/components/dashboard/client/tasks/TaskToolbar";
import TaskTable from "@/components/dashboard/client/tasks/TaskTable";

export default function MyTasksPage() {
  const { data = [], isLoading, isError } = useMyTasks();

  const [search, setSearch] = useState("");

  const filteredTasks = useMemo(() => {
    return data.filter((task) =>
      task.title.toLowerCase().includes(search.toLowerCase()),
    );
  }, [data, search]);

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
        Failed to load tasks.
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <TaskToolbar search={search} setSearch={setSearch} />

      <TaskTable tasks={filteredTasks} />
    </div>
  );
}
