"use client";

import { useRouter } from "next/navigation";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

import { deleteTask } from "@/services/taskApi";

export default function DeleteTaskButton({ id }) {
  const router = useRouter();
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: () => deleteTask(id),

    onSuccess: () => {
      toast.success("Task deleted successfully.");

      queryClient.invalidateQueries({
        queryKey: ["my-tasks"],
      });

      router.refresh();
    },

    onError: () => {
      toast.error("Failed to delete task.");
    },
  });

  const handleDelete = () => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this task?",
    );

    if (!confirmed) return;

    mutate();
  };

  return (
    <button
      onClick={handleDelete}
      disabled={isPending}
      className="rounded-lg bg-red-600 px-3 py-1 text-sm text-white transition hover:bg-red-700 disabled:opacity-50"
    >
      {isPending ? "Deleting..." : "Delete"}
    </button>
  );
}
