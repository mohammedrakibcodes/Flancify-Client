"use client";

import { Loader2 } from "lucide-react";
import { useParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";

import { getTaskById } from "@/services/taskApi";

import useTaskProposals from "@/hooks/useTaskProposals";

import ProposalTable from "@/components/dashboard/client/proposals/ProposalTable";

export default function TaskDetailsPage() {
  const { id } = useParams();

  const { data: task, isLoading } = useQuery({
    queryKey: ["task", id],
    queryFn: () => getTaskById(id),
    enabled: !!id,
  });

  const { data: proposals = [], isLoading: proposalLoading } =
    useTaskProposals(id);

  if (isLoading || proposalLoading) {
    return (
      <div className="flex h-[70vh] items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-green-600" />
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="rounded-2xl border bg-white p-8">
        <h1 className="text-2xl font-bold">{task.title}</h1>

        <div className="mt-6 grid gap-5 md:grid-cols-2">
          <div>
            <p className="text-sm text-gray-500">Category</p>

            <p className="font-semibold">{task.category}</p>
          </div>

          <div>
            <p className="text-sm text-gray-500">Budget</p>

            <p className="font-semibold">${task.budget}</p>
          </div>

          <div>
            <p className="text-sm text-gray-500">Deadline</p>

            <p>{task.deadline}</p>
          </div>

          <div>
            <p className="text-sm text-gray-500">Status</p>

            <p className="capitalize">{task.status}</p>
          </div>
        </div>

        <div className="mt-6">
          <p className="mb-2 text-sm text-gray-500">Description</p>

          <p className="leading-7">{task.description}</p>
        </div>
      </div>

      <ProposalTable proposals={proposals} />
    </div>
  );
}
