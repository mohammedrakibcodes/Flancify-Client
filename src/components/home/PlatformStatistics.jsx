"use client";

import { useQuery } from "@tanstack/react-query";
import { BriefcaseBusiness, Users, DollarSign, Trophy } from "lucide-react";
import { getHomeStats } from "@/services/homeApi";

export default function PlatformStatistics() {
  const {
    data: stats,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["home-stats"],
    queryFn: getHomeStats,
  });

  if (isLoading) {
    return (
      <section className="bg-green-50 py-24">
        <div className="text-center">
          <p>Loading platform statistics...</p>
        </div>
      </section>
    );
  }

  if (isError) {
    return (
      <section className="bg-green-50 py-24">
        <div className="text-center">
          <p>Failed to load platform statistics.</p>
        </div>
      </section>
    );
  }

  const statistics = [
    {
      title: "Active Users",
      value: stats.totalUsers,
      icon: <Users className="h-8 w-8 text-green-600" />,
    },
    {
      title: "Tasks Posted",
      value: stats.totalTasks,
      icon: <BriefcaseBusiness className="h-8 w-8 text-green-600" />,
    },
    {
      title: "Total Payout",
      value: `$${stats.totalPayout}`,
      icon: <DollarSign className="h-8 w-8 text-green-600" />,
    },
    {
      title: "Completed Projects",
      value: stats.completedProjects,
      icon: <Trophy className="h-8 w-8 text-green-600" />,
    },
  ];

  return (
    <section className="bg-green-50 py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-16 text-center">
          <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
            Platform Statistics
          </span>

          <h2 className="mt-5 text-4xl font-bold text-[#111827]">
            Trusted by Thousands Worldwide
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Our marketplace continues to grow with talented freelancers and
            satisfied clients every day.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {statistics.map((stat) => (
            <div
              key={stat.title}
              className="rounded-2xl border border-gray-200 bg-white p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-green-500 hover:shadow-xl"
            >
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                {stat.icon}
              </div>

              <h3 className="mt-6 text-4xl font-bold text-[#111827]">
                {stat.value}
              </h3>

              <p className="mt-2 text-gray-600">{stat.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
