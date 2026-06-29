"use client";

import { Loader2 } from "lucide-react";

import useClientDashboard from "@/hooks/useClientDashboard";

import StatsGrid from "@/components/dashboard/client/StatsGrid";
import RecentTasks from "@/components/dashboard/client/RecentTasks";

export default function ClientDashboardPage() {
  const { data: dashboard, isLoading, isError } = useClientDashboard();

  if (isLoading) {
    return (
      <div className="flex h-[70vh] items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-green-600" />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="rounded-2xl border border-red-200 bg-red-50 p-6 text-red-600">
        Failed to load dashboard.
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <StatsGrid dashboard={dashboard} />

      <RecentTasks tasks={dashboard?.recentTasks || []} />
    </div>
  );
}
