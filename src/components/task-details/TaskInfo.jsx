import { CalendarDays, DollarSign, Clock3 } from "lucide-react";

export default function TaskInfo({ task }) {
  return (
    <div className="rounded-2xl bg-white p-8 shadow-sm">
      <h2 className="mb-6 text-2xl font-bold text-[#111827]">
        Task Information
      </h2>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="flex items-center gap-3">
          <div className="rounded-full bg-green-100 p-3">
            <DollarSign className="h-6 w-6 text-green-600" />
          </div>

          <div>
            <p className="text-sm text-gray-500">Budget</p>
            <h3 className="font-semibold text-[#111827]">${task.budget}</h3>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="rounded-full bg-green-100 p-3">
            <CalendarDays className="h-6 w-6 text-green-600" />
          </div>

          <div>
            <p className="text-sm text-gray-500">Deadline</p>
            <h3 className="font-semibold text-[#111827]">{task.deadline}</h3>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="rounded-full bg-green-100 p-3">
            <Clock3 className="h-6 w-6 text-green-600" />
          </div>

          <div>
            <p className="text-sm text-gray-500">Status</p>
            <h3 className="font-semibold capitalize text-[#111827]">
              {task.status}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}
