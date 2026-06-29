"use client";

import { useState } from "react";

import useTasks from "@/hooks/useTasks";

import SearchBar from "./SearchBar";
import CategoryFilter from "./CategoryFilter";
import TasksGrid from "./TasksGrid";
import Pagination from "./Pagination";
import EmptyState from "./EmptyState";

export default function BrowseTasks() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [page, setPage] = useState(1);

  const { data, isLoading, isError } = useTasks({
    search,
    category,
    page,
  });

  if (isLoading) {
    return <p className="py-24 text-center">Loading...</p>;
  }

  if (isError) {
    return <p className="py-24 text-center">Failed to load tasks.</p>;
  }

  return (
    <section className="bg-gray-50 py-16">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-10">
          <h1 className="text-4xl font-bold text-[#111827]">Browse Tasks</h1>

          <p className="mt-3 text-gray-600">
            Find the perfect freelance opportunity.
          </p>
        </div>

        <div className="mb-8 grid gap-4 md:grid-cols-2">
          <SearchBar search={search} setSearch={setSearch} setPage={setPage} />

          <CategoryFilter
            category={category}
            setCategory={setCategory}
            setPage={setPage}
          />
        </div>

        {data.result.length === 0 ? (
          <EmptyState />
        ) : (
          <>
            <TasksGrid tasks={data.result} />

            <Pagination
              currentPage={data.currentPage}
              totalPages={data.totalPages}
              setPage={setPage}
            />
          </>
        )}
      </div>
    </section>
  );
}
