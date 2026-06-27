import { BadgeDollarSign, Tag } from "lucide-react";

export default function TaskHeader({ task }) {
  return (
    <div className="rounded-2xl bg-white p-8 shadow-sm">
      <div className="flex flex-wrap items-center gap-3">
        <span className="flex items-center gap-2 rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-700">
          <Tag size={16} />
          {task.category}
        </span>

        <span className="flex items-center gap-2 rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700">
          <BadgeDollarSign size={16} />
          {task.status}
        </span>
      </div>

      <h1 className="mt-6 text-4xl font-bold text-[#111827]">{task.title}</h1>
    </div>
  );
}
