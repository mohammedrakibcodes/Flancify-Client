"use client";

import { useQuery } from "@tanstack/react-query";

import { getTaskProposals } from "@/services/proposalApi";

export default function useTaskProposals(taskId) {
  return useQuery({
    queryKey: ["task-proposals", taskId],
    queryFn: () => getTaskProposals(taskId),
    enabled: !!taskId,
  });
}
