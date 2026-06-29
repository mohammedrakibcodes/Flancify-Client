import DashboardCard from "@/components/dashboard/cards/DashboardCard";

export default function RecentTasks({ tasks = [] }) {
  return (
    <DashboardCard title="Recent Tasks">
      {tasks.length === 0 ? (
        <div className="py-12 text-center text-gray-500">
          No tasks posted yet.
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="table">
            <thead>
              <tr>
                <th>Title</th>
                <th>Category</th>
                <th>Budget</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              {tasks.map((task) => (
                <tr key={task._id}>
                  <td>{task.title}</td>
                  <td>{task.category}</td>
                  <td>${task.budget}</td>
                  <td>
                    <span className="badge badge-outline capitalize">
                      {task.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </DashboardCard>
  );
}
