"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

import { createTask } from "@/services/taskApi";

export default function useCreateTask() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createTask,

    onSuccess: () => {
      toast.success("Task posted successfully.");

      queryClient.invalidateQueries({
        queryKey: ["client-dashboard"],
      });

      queryClient.invalidateQueries({
        queryKey: ["my-tasks"],
      });
    },

    onError: (error) => {
      toast.error(error?.response?.data?.message || "Failed to post task.");
    },
  });
}
