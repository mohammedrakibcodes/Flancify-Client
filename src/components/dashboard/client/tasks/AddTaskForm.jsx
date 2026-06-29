"use client";

import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { zodResolver } from "@hookform/resolvers/zod";
import { taskSchema } from "@/validations/taskSchema";
import useCurrentUser from "@/hooks/useCurrentUser";
import { createTask } from "@/services/taskApi";

import TaskBasicFields from "./TaskBasicFields";

export default function AddTaskForm() {
  const router = useRouter();

  const { currentUser } = useCurrentUser();

  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting, errors },
  } = useForm({
    resolver: zodResolver(taskSchema),
    defaultValues: {
      title: "",
      category: "",
      budget: "",
      deadline: "",
      description: "",
    },
  });

  const onInvalid = (errors) => {
    const firstError = Object.values(errors)[0];

    if (firstError?.message) {
      toast.error(firstError.message);
    }
  };

  const { mutateAsync } = useMutation({
    mutationFn: createTask,

    onSuccess: () => {
      toast.success("Task posted successfully.");

      reset();

      router.push("/client-dashboard/my-tasks");

      router.refresh();
    },

    onError: () => {
      toast.error("Failed to create task.");
    },
  });

  const onSubmit = async (values) => {
    await mutateAsync({
      ...values,
      budget: Number(values.budget),
      client_name: currentUser.name,
      client_email: currentUser.email,
    });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit, onInvalid)}
      className="space-y-6 rounded-2xl bg-white p-6 shadow"
    >
      <TaskBasicFields register={register} />

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full rounded-xl bg-green-600 py-3 font-semibold text-white transition hover:bg-green-700 disabled:opacity-50"
      >
        {isSubmitting ? "Posting Task..." : "Post Task"}
      </button>
    </form>
  );
}
