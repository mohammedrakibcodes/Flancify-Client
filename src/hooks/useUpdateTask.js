"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

import { updateTask } from "@/services/taskApi";

export default function useUpdateTask() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, values }) => updateTask(id, values),

    onSuccess: (_, variables) => {
      toast.success("Task updated successfully.");

      queryClient.invalidateQueries({
        queryKey: ["task", variables.id],
      });

      queryClient.invalidateQueries({
        queryKey: ["my-tasks"],
      });

      queryClient.invalidateQueries({
        queryKey: ["client-dashboard"],
      });
    },

    onError: (error) => {
      toast.error(error?.response?.data?.message || "Failed to update task.");
    },
  });
}
