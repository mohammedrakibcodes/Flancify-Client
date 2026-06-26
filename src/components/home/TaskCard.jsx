import { CalendarDays, DollarSign, Tag } from "lucide-react";
import Link from "next/link";

export default function TaskCard({ task }) {
  return (
    <div className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-green-500 hover:shadow-xl">
      <span className="inline-flex items-center gap-2 rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
        <Tag size={14} />
        {task.category}
      </span>

      <h3 className="mt-5 text-xl font-bold text-[#111827] transition group-hover:text-green-600">
        {task.title}
      </h3>

      <p className="mt-3 line-clamp-3 text-sm leading-6 text-gray-600">
        {task.description}
      </p>

      <div className="mt-6 flex items-center justify-between border-t pt-5">
        <div className="flex items-center gap-2 text-green-600">
          <DollarSign size={18} />
          <span className="font-semibold">${task.budget}</span>
        </div>

        <div className="flex items-center gap-2 text-gray-500">
          <CalendarDays size={18} />
          <span>{task.deadline}</span>
        </div>
      </div>

      <Link
        href={`/tasks/${task._id}`}
        className="mt-6 flex w-full items-center justify-center rounded-xl bg-[#111827] px-4 py-3 font-semibold text-white transition hover:bg-black"
      >
        View Details
      </Link>
    </div>
  );
}
