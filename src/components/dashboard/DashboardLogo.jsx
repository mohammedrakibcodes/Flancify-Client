"use client";

import Link from "next/link";
import { BriefcaseBusiness } from "lucide-react";

export default function DashboardLogo() {
  return (
    <Link href="/" className="flex items-center gap-3">
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-600 text-white shadow-sm">
        <BriefcaseBusiness size={22} />
      </div>

      <div>
        <h2 className="text-xl font-bold text-gray-900">Flancify</h2>

        <p className="text-xs text-gray-500">Dashboard</p>
      </div>
    </Link>
  );
}
