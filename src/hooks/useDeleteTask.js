"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

import { deleteTask } from "@/services/taskApi";

export default function useDeleteTask() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteTask,

    onSuccess: () => {
      toast.success("Task deleted successfully.");

      queryClient.invalidateQueries({
        queryKey: ["my-tasks"],
      });

      queryClient.invalidateQueries({
        queryKey: ["client-dashboard"],
      });
    },

    onError: (error) => {
      toast.error(error?.response?.data?.message || "Failed to delete task.");
    },
  });
}
