"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

import { acceptProposal } from "@/services/proposalApi";

export default function useAcceptProposal() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: acceptProposal,

    onSuccess: () => {
      toast.success("Proposal accepted.");

      queryClient.invalidateQueries({
        queryKey: ["task-proposals"],
      });

      queryClient.invalidateQueries({
        queryKey: ["task"],
      });

      queryClient.invalidateQueries({
        queryKey: ["client-dashboard"],
      });

      queryClient.invalidateQueries({
        queryKey: ["my-tasks"],
      });
    },

    onError: (error) => {
      toast.error(
        error?.response?.data?.message || "Failed to accept proposal.",
      );
    },
  });
}
