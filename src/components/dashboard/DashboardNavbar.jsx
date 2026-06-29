"use client";

import { Menu } from "lucide-react";

export default function DashboardNavbar({ title, setSidebarOpen }) {
  return (
    <header className="sticky top-0 z-40 flex h-16 items-center justify-between border-b border-gray-200 bg-white px-5 shadow-sm">
      <div className="flex items-center gap-3">
        <button
          onClick={() => setSidebarOpen(true)}
          className="rounded-lg p-2 transition hover:bg-gray-100 lg:hidden"
        >
          <Menu size={22} />
        </button>

        <h1 className="text-2xl font-bold text-gray-900">{title}</h1>
      </div>
    </header>
  );
}
