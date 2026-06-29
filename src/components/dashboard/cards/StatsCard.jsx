"use client";

import { ArrowUpRight } from "lucide-react";

export default function StatsCard({
  title,
  value,
  icon: Icon,
  color = "green",
}) {
  const colors = {
    green: "bg-green-100 text-green-600",

    blue: "bg-blue-100 text-blue-600",

    orange: "bg-orange-100 text-orange-600",

    purple: "bg-purple-100 text-purple-600",

    red: "bg-red-100 text-red-600",
  };

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-500">{title}</p>

          <h2 className="mt-3 text-3xl font-bold text-gray-900">{value}</h2>
        </div>

        <div className={`rounded-2xl p-3 ${colors[color] || colors.green}`}>
          <Icon size={24} />
        </div>
      </div>

      <div className="mt-5 flex items-center gap-2 text-sm text-gray-500">
        <ArrowUpRight size={16} className="text-green-600" />
        Updated just now
      </div>
    </div>
  );
}
