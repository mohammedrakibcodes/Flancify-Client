"use client";

import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import TaskCard from "./TaskCard";
import { getLatestTasks } from "@/services/homeApi";

export default function FeaturedTasks() {
  const {
    data: tasks = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["latest-tasks"],
    queryFn: getLatestTasks,
  });

  if (isLoading) {
    return (
      <section className="py-24 text-center">
        <p>Loading latest tasks...</p>
      </section>
    );
  }

  if (isError) {
    return (
      <section className="py-24 text-center">
        <p>Failed to load tasks.</p>
      </section>
    );
  }

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-14 text-center">
          <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
            Featured Tasks
          </span>

          <h2 className="mt-5 text-4xl font-bold text-[#111827]">
            Latest Freelance Opportunities
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Discover newly posted freelance projects from clients around the
            world and start earning today.
          </p>
        </div>

        <div className="grid gap-7 md:grid-cols-2 xl:grid-cols-3">
          {tasks.map((task) => (
            <TaskCard key={task._id} task={task} />
          ))}
        </div>

        {tasks.length === 0 && (
          <div className="py-10 text-center text-gray-500">
            No featured tasks found.
          </div>
        )}

        <div className="mt-14 text-center">
          <Link
            href="/browse-tasks"
            className="rounded-xl bg-[#111827] px-8 py-4 font-semibold text-white transition hover:bg-black"
          >
            View All Tasks
          </Link>
        </div>
      </div>
    </section>
  );
}
