"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";

import useCurrentUser from "@/hooks/useCurrentUser";
import useCreateTask from "@/hooks/useCreateTask";
import useUpdateTask from "@/hooks/useUpdateTask";

import { taskSchema } from "@/validations/taskSchema";

import TaskBasicFields from "./TaskBasicFields";

export default function TaskForm({ mode = "create", initialData = null }) {
  const router = useRouter();

  const { currentUser } = useCurrentUser();

  const createMutation = useCreateTask();
  const updateMutation = useUpdateTask();

  const { register, handleSubmit, reset } = useForm({
    resolver: zodResolver(taskSchema),
    defaultValues: {
      title: "",
      category: "",
      budget: 0,
      deadline: "",
      description: "",
    },
  });

  useEffect(() => {
    if (mode === "edit" && initialData) {
      reset({
        title: initialData.title,
        category: initialData.category,
        budget: initialData.budget,
        deadline: initialData.deadline,
        description: initialData.description,
      });
    }
  }, [mode, initialData, reset]);

  const onSubmit = (values) => {
    if (mode === "create") {
      createMutation.mutate(
        {
          ...values,
          client_email: currentUser.email,
          client_name: currentUser.name,
        },
        {
          onSuccess: () => {
            toast.success("Task posted successfully.");
            router.push("/client-dashboard/my-tasks");
          },
        },
      );

      return;
    }

    updateMutation.mutate(
      {
        id: initialData._id,
        values,
      },
      {
        onSuccess: () => {
          toast.success("Task updated successfully.");
          router.push("/client-dashboard/my-tasks");
        },
      },
    );
  };

  return (
    <div className="rounded-2xl border bg-white p-8">
      <h1 className="mb-6 text-2xl font-bold">
        {mode === "create" ? "Post New Task" : "Edit Task"}
      </h1>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <TaskBasicFields register={register} />

        <button
          type="submit"
          disabled={createMutation.isPending || updateMutation.isPending}
          className="w-full rounded-xl bg-green-600 py-3 font-semibold text-white transition hover:bg-green-700 disabled:opacity-60"
        >
          {createMutation.isPending || updateMutation.isPending
            ? "Please wait..."
            : mode === "create"
              ? "Post Task"
              : "Update Task"}
        </button>
      </form>
    </div>
  );
}
