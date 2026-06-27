"use client";

export default function ApplyButton({ task }) {
  return (
    <button
      className="w-full rounded-xl bg-green-600 px-6 py-3 font-semibold text-white transition hover:bg-green-700 disabled:cursor-not-allowed disabled:bg-gray-400"
      disabled={task.status !== "open"}
    >
      {task.status === "open" ? "Apply Now" : "Task Closed"}
    </button>
  );
}
