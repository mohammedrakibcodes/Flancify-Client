"use client";

import { useQuery } from "@tanstack/react-query";

import useCurrentUser from "./useCurrentUser";
import { getClientDashboard } from "@/services/dashboardApi";

export default function useClientDashboard() {
  const { currentUser } = useCurrentUser();

  return useQuery({
    queryKey: ["client-dashboard", currentUser?.email],

    enabled: !!currentUser?.email,

    queryFn: () => getClientDashboard(currentUser.email),
  });
}
