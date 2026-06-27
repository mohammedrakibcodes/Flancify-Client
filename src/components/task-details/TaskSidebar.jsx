import {
  BriefcaseBusiness,
  CalendarDays,
  CircleDollarSign,
} from "lucide-react";

import ApplyButton from "./ApplyButton";

export default function TaskSidebar({ task }) {
  return (
    <div className="sticky top-24 rounded-2xl bg-white p-8 shadow-sm">
      <h2 className="mb-6 text-2xl font-bold text-[#111827]">Task Summary</h2>

      <div className="space-y-5">
        <div className="flex items-center gap-3">
          <CircleDollarSign className="h-6 w-6 text-green-600" />

          <div>
            <p className="text-sm text-gray-500">Budget</p>
            <p className="font-semibold">${task.budget}</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <CalendarDays className="h-6 w-6 text-green-600" />

          <div>
            <p className="text-sm text-gray-500">Deadline</p>
            <p className="font-semibold">{task.deadline}</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <BriefcaseBusiness className="h-6 w-6 text-green-600" />

          <div>
            <p className="text-sm text-gray-500">Status</p>
            <p className="font-semibold capitalize">{task.status}</p>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <ApplyButton task={task} />
      </div>
    </div>
  );
}
