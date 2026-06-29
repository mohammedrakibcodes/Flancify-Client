"use client";

import { useSession } from "@/lib/auth-client";

export default function useAuth() {
  const { data, isPending, error } = useSession();

  return {
    user: data?.user || null,
    session: data?.session || null,
    loading: isPending,
    error,
  };
}
