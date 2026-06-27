import TaskDetails from "@/components/task-details/TaskDetails";
export default async function TaskDetailsPage({ params }) {
  const { id } = await params;
  return <TaskDetails id={id} />;
}
