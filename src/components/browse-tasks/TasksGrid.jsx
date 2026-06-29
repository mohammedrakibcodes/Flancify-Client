import TaskCard from "@/components/home/TaskCard";

export default function TasksGrid({ tasks }) {
  return (
    <div className="grid gap-7 md:grid-cols-2 xl:grid-cols-3">
      {tasks.map((task) => (
        <TaskCard key={task._id} task={task} />
      ))}
    </div>
  );
}
