"use client";

import { useQuery } from "@tanstack/react-query";

import useAuth from "./useAuth";
import { getUserByEmail } from "@/services/userApi";

export default function useCurrentUser() {
  const { user } = useAuth();

  const { data, isLoading } = useQuery({
    queryKey: ["current-user", user?.email],
    queryFn: () => getUserByEmail(user.email),
    enabled: !!user?.email,
  });

  return {
    currentUser: data || null,
    loading: isLoading,
  };
}
