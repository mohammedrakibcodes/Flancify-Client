"use client";

import {
  LayoutDashboard,
  ClipboardList,
  SquarePen,
  FileText,
  CreditCard,
  Star,
} from "lucide-react";

import DashboardLogo from "./DashboardLogo";
import SidebarItem from "./SidebarItem";
import SidebarUser from "./SidebarUser";

const menus = [
  {
    href: "/client-dashboard",
    title: "Dashboard",
    icon: LayoutDashboard,
  },
  {
    href: "/client-dashboard/my-tasks",
    title: "My Tasks",
    icon: ClipboardList,
  },
  {
    href: "/client-dashboard/add-task",
    title: "Post Task",
    icon: SquarePen,
  },
  {
    href: "/client-dashboard/proposals",
    title: "Proposals",
    icon: FileText,
  },
  {
    href: "/client-dashboard/payments",
    title: "Payments",
    icon: CreditCard,
  },
  {
    href: "/client-dashboard/reviews",
    title: "Reviews",
    icon: Star,
  },
];

export default function DashboardSidebar({
  user,
  onLogout,
  sidebarOpen,
  setSidebarOpen,
}) {
  return (
    <>
      {sidebarOpen && (
        <div
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 z-40 bg-black/40 lg:hidden"
        />
      )}

      <aside
        className={`fixed left-0 top-0 z-50 flex h-screen w-72 flex-col border-r border-gray-200 bg-white transition-transform duration-300
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
        lg:translate-x-0`}
      >
        <div className="border-b border-gray-200 p-5">
          <DashboardLogo />
        </div>

        <nav className="flex-1 space-y-2 p-4">
          {menus.map((item) => (
            <SidebarItem
              key={item.href}
              href={item.href}
              title={item.title}
              icon={item.icon}
            />
          ))}
        </nav>

        <SidebarUser user={user} onLogout={onLogout} />
      </aside>
    </>
  );
}
