"use client";

import { useQuery } from "@tanstack/react-query";
import { getAllTasks } from "@/services/taskApi";

export default function useTasks({ search = "", category = "all", page = 1 }) {
  return useQuery({
    queryKey: ["tasks", search, category, page],
    queryFn: () =>
      getAllTasks({
        search,
        category,
        page,
      }),
  });
}
