"use client";

import Link from "next/link";
import { LayoutDashboard, LogOut, User } from "lucide-react";

import UserAvatar from "./UserAvatar";

export default function ProfileDropdown({ user, onLogout }) {
  return (
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="cursor-pointer">
        <UserAvatar user={user} />
      </label>

      <ul
        tabIndex={0}
        className="menu dropdown-content z-50 mt-3 w-64 rounded-2xl border border-gray-200 bg-white p-2 shadow-xl"
      >
        <li className="pointer-events-none mb-2 border-b pb-2">
          <div>
            <p className="font-semibold">{user?.name}</p>

            <p className="text-xs text-gray-500">{user?.email}</p>
          </div>
        </li>

        <li>
          <Link href="/dashboard">
            <LayoutDashboard size={18} />
            Dashboard
          </Link>
        </li>

        <li>
          <Link href="/profile">
            <User size={18} />
            Profile
          </Link>
        </li>

        <li>
          <button onClick={onLogout}>
            <LogOut size={18} />
            Logout
          </button>
        </li>
      </ul>
    </div>
  );
}
