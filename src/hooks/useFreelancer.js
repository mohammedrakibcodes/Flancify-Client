"use client";

import { useQuery } from "@tanstack/react-query";
import { getUserById } from "@/services/userApi";

export default function useFreelancer(id) {
  return useQuery({
    queryKey: ["freelancer", id],
    queryFn: () => getUserById(id),
    enabled: !!id,
  });
}
