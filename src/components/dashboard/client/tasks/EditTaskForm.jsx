"use client";

import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

import { updateTask } from "@/services/taskApi";

import TaskBasicFields from "./TaskBasicFields";

export default function EditTaskForm({ task }) {
  const router = useRouter();
  const queryClient = useQueryClient();

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm({
    defaultValues: {
      title: task?.title,
      category: task?.category,
      budget: task?.budget,
      deadline: task?.deadline,
      description: task?.description,
    },
  });

  const { mutateAsync } = useMutation({
    mutationFn: ({ id, values }) => updateTask(id, values),

    onSuccess: () => {
      toast.success("Task updated successfully.");

      queryClient.invalidateQueries({
        queryKey: ["my-tasks"],
      });

      router.push("/client-dashboard/my-tasks");
      router.refresh();
    },

    onError: () => {
      toast.error("Failed to update task.");
    },
  });

  const onSubmit = async (values) => {
    await mutateAsync({
      id: task._id,
      values,
    });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6 rounded-2xl bg-white p-6 shadow"
    >
      <TaskBasicFields register={register} />

      <button
        type="submit"
        disabled={isSubmitting}
        className="rounded-xl bg-green-600 px-6 py-3 font-semibold text-white"
      >
        {isSubmitting ? "Updating..." : "Update Task"}
      </button>
    </form>
  );
}
