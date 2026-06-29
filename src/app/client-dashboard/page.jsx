"use client";

import {
  ClipboardList,
  Clock3,
  CircleCheckBig,
  Wallet,
  Loader2,
} from "lucide-react";

import useClientStats from "@/hooks/useClientStats";

import StatsCard from "@/components/dashboard/cards/StatsCard";
import DashboardCard from "@/components/dashboard/cards/DashboardCard";

export default function ClientDashboardPage() {
  const { data, isLoading, isError } = useClientStats();

  if (isLoading) {
    return (
      <div className="flex h-80 items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-green-600" />
      </div>
    );
  }

  if (isError) {
    return (
      <DashboardCard>
        <p className="text-red-600">Failed to load dashboard data.</p>
      </DashboardCard>
    );
  }

  return (
    <div className="space-y-8">
      <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        <StatsCard
          title="Total Tasks"
          value={data?.totalTasks ?? 0}
          icon={ClipboardList}
          color="blue"
        />

        <StatsCard
          title="Open Tasks"
          value={data?.openTasks ?? 0}
          icon={Clock3}
          color="orange"
        />

        <StatsCard
          title="Completed"
          value={data?.completedTasks ?? 0}
          icon={CircleCheckBig}
          color="green"
        />

        <StatsCard
          title="Total Spent"
          value={`$${data?.totalSpent ?? 0}`}
          icon={Wallet}
          color="purple"
        />
      </section>

      <DashboardCard title="Recent Tasks">
        <div className="flex h-64 items-center justify-center rounded-xl border border-dashed border-gray-300">
          <p className="text-gray-500">Recent tasks will appear here.</p>
        </div>
      </DashboardCard>

      <DashboardCard title="Recent Payments">
        <div className="flex h-64 items-center justify-center rounded-xl border border-dashed border-gray-300">
          <p className="text-gray-500">Recent payments will appear here.</p>
        </div>
      </DashboardCard>
    </div>
  );
}
