"use client";

import { useQuery } from "@tanstack/react-query";
import { getTaskById } from "@/services/taskApi";

export default function useTask(id) {
  return useQuery({
    queryKey: ["task", id],
    queryFn: () => getTaskById(id),
    enabled: !!id,
  });
}
