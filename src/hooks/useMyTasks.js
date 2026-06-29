"use client";

import { useQuery } from "@tanstack/react-query";

import useCurrentUser from "./useCurrentUser";

import { getMyTasks } from "@/services/taskApi";

export default function useMyTasks() {
  const { currentUser } = useCurrentUser();

  return useQuery({
    queryKey: ["my-tasks", currentUser?.email],
    enabled: !!currentUser?.email,
    queryFn: () => getMyTasks(currentUser.email),
  });
}
