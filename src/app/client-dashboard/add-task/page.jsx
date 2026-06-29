import AddTaskForm from "@/components/dashboard/client/tasks/AddTaskForm";

export default function AddTaskPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Post a New Task</h1>

        <p className="mt-2 text-gray-500">
          Fill in the details below to publish your task.
        </p>
      </div>

      <AddTaskForm />
    </div>
  );
}
