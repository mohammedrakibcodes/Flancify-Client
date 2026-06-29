"use client";

import TaskRow from "./TaskRow";

export default function TaskTable({ tasks }) {
  if (!tasks?.length) {
    return (
      <div className="w-full rounded-xl border border-dashed border-gray-300 bg-white py-16 text-center">
        <h2 className="text-2xl font-semibold">No Tasks Found</h2>

        <p className="mt-2 text-gray-500">You haven't posted any tasks yet.</p>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto rounded-2xl border border-gray-200 bg-white">
      <table className="table">
        <thead className="bg-gray-100">
          <tr>
            <th>Title</th>
            <th>Category</th>
            <th>Budget</th>
            <th>Deadline</th>
            <th>Status</th>
            <th className="text-right">Actions</th>
          </tr>
        </thead>

        <tbody>
          {tasks.map((task) => (
            <TaskRow key={task._id} task={task} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
