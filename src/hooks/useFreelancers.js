"use client";

import { useQuery } from "@tanstack/react-query";
import { getAllFreelancers } from "@/services/userApi";

export default function useFreelancers({
  search = "",
  skill = "all",
  page = 1,
}) {
  return useQuery({
    queryKey: ["freelancers", search, skill, page],
    queryFn: () =>
      getAllFreelancers({
        search,
        skill,
        page,
      }),
    placeholderData: (previousData) => previousData,
  });
}
