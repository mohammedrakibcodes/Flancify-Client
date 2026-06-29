"use client";

import { LogOut } from "lucide-react";

import UserAvatar from "../shared/UserAvatar";

export default function SidebarUser({ user, onLogout }) {
  return (
    <div className="border-t border-gray-200 p-4">
      <div className="flex items-center gap-3">
        <UserAvatar user={user} />

        <div className="min-w-0 flex-1">
          <h3 className="truncate font-semibold text-gray-900">{user?.name}</h3>

          <p className="text-sm capitalize text-gray-500">{user?.role}</p>
        </div>
      </div>

      <button
        onClick={onLogout}
        className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl border border-red-200 py-2.5 font-medium text-red-600 transition hover:bg-red-50"
      >
        <LogOut size={18} />
        Logout
      </button>
    </div>
  );
}
