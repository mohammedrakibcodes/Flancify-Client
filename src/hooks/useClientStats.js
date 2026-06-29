"use client";

import { useQuery } from "@tanstack/react-query";

import { getClientStats } from "@/services/dashboardApi";

export default function useClientStats() {
  return useQuery({
    queryKey: ["client-dashboard-stats"],
    queryFn: getClientStats,
  });
}
