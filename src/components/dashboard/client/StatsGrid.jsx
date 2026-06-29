import {
  BriefcaseBusiness,
  Clock3,
  CircleCheckBig,
  Wallet,
} from "lucide-react";

import StatsCard from "@/components/dashboard/cards/StatsCard";

export default function StatsGrid({ dashboard }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
      <StatsCard
        title="Total Tasks"
        value={dashboard?.totalTasks ?? 0}
        icon={BriefcaseBusiness}
        color="blue"
      />

      <StatsCard
        title="Open Tasks"
        value={dashboard?.openTasks ?? 0}
        icon={Clock3}
        color="orange"
      />

      <StatsCard
        title="Completed"
        value={dashboard?.completedTasks ?? 0}
        icon={CircleCheckBig}
        color="green"
      />

      <StatsCard
        title="Total Spent"
        value={`$${dashboard?.totalSpent ?? 0}`}
        icon={Wallet}
        color="purple"
      />
    </div>
  );
}
