"use client";

import Link from "next/link";

import DeleteTaskButton from "./DeleteTaskButton";
import TaskStatusBadge from "./TaskStatusBadge";

export default function TaskRow({ task }) {
  return (
    <tr className="hover:bg-gray-50">
      <td className="font-medium">{task.title}</td>

      <td>{task.category}</td>

      <td>${task.budget}</td>

      <td>{task.deadline}</td>

      <td>
        <TaskStatusBadge status={task.status} />
      </td>

      <td>
        <div className="flex justify-end gap-2">
          <Link
            href={`/tasks/${task._id}`}
            className="rounded-lg border px-3 py-1 text-sm hover:bg-gray-100"
          >
            View
          </Link>

          <Link
            href={`/client-dashboard/edit-task/${task._id}`}
            className="rounded-lg bg-blue-600 px-3 py-1 text-sm text-white hover:bg-blue-700"
          >
            Edit
          </Link>

          <DeleteTaskButton id={task._id} />
        </div>
      </td>
    </tr>
  );
}
