"use client";

import { useState } from "react";

import DashboardNavbar from "./DashboardNavbar";
import DashboardSidebar from "./DashboardSidebar";

export default function DashboardLayout({ title, user, onLogout, children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardSidebar
        user={user}
        onLogout={onLogout}
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />

      <div className="lg:ml-72">
        <DashboardNavbar
          title={title}
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
        />

        <main className="p-6 lg:p-8">{children}</main>
      </div>
    </div>
  );
}
