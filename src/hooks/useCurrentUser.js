"use client";

import { useUser } from "@/providers/UserProvider";

export default function useCurrentUser() {
  return useUser();
}
