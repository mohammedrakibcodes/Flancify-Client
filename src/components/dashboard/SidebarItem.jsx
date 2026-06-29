"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SidebarItem({ href, title, icon: Icon }) {
  const pathname = usePathname();

  const active = pathname === href || pathname.startsWith(`${href}/`);

  return (
    <Link
      href={href}
      className={`flex items-center gap-3 rounded-xl px-4 py-3 transition
      ${
        active
          ? "rounded-xl bg-green-600 text-white"
          : "text-gray-700 hover:bg-gray-100"
      }`}
    >
      <Icon size={20} />

      <span className="font-medium">{title}</span>
    </Link>
  );
}
