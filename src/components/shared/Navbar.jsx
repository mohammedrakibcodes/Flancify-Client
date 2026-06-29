"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { HiBars3, HiXMark } from "react-icons/hi2";
import { toast } from "sonner";

import { authClient } from "@/lib/auth-client";
import useAuth from "@/hooks/useAuth";
import { logoutUser } from "@/services/authApi";

import UserAvatar from "./UserAvatar";
import ProfileDropdown from "./ProfileDropdown";

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();

  const { user, loading } = useAuth();

  const [isOpen, setIsOpen] = useState(false);

  const links = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "Browse Tasks",
      href: "/browse-tasks",
    },
    {
      name: "Browse Freelancers",
      href: "/browse-freelancers",
    },
  ];

  const handleLogout = async () => {
    try {
      await authClient.signOut();

      await logoutUser();

      toast.success("Logged out successfully.");

      router.push("/");
      router.refresh();
    } catch {
      toast.error("Logout failed.");
    }
  };

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <nav className="flex h-18 items-center justify-between">
          <Link
            href="/"
            className="text-2xl font-bold tracking-tight text-[#111827]"
          >
            Flancify
          </Link>

          <ul className="hidden items-center gap-8 md:flex">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`font-medium transition ${
                    pathname === link.href
                      ? "text-green-600"
                      : "text-gray-700 hover:text-green-600"
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden items-center gap-4 md:flex">
            {loading ? (
              <div className="h-10 w-10 animate-pulse rounded-full bg-gray-200" />
            ) : user ? (
              <>
                <Link
                  href="/dashboard"
                  className="font-medium text-gray-700 transition hover:text-green-600"
                >
                  Dashboard
                </Link>

                <ProfileDropdown user={user} onLogout={handleLogout} />
              </>
            ) : (
              <>
                <Link
                  href="/login"
                  className="font-medium text-gray-700 transition hover:text-green-600"
                >
                  Login
                </Link>

                <Link
                  href="/register"
                  className="rounded-lg bg-[#111827] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#1F2937]"
                >
                  Register
                </Link>
              </>
            )}
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-3xl text-[#111827] md:hidden"
          >
            {isOpen ? <HiXMark /> : <HiBars3 />}
          </button>
        </nav>

        {isOpen && (
          <div className="border-t border-gray-200 bg-white md:hidden">
            <div className="space-y-2 px-4 py-4">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`block rounded-lg px-3 py-2 transition ${
                    pathname === link.href
                      ? "bg-green-50 text-green-600"
                      : "text-gray-700 hover:bg-green-50 hover:text-green-600"
                  }`}
                >
                  {link.name}
                </Link>
              ))}

              <div className="border-t border-gray-200 pt-4">
                {loading ? (
                  <div className="h-10 w-full animate-pulse rounded-lg bg-gray-200" />
                ) : user ? (
                  <>
                    <div className="mb-4 flex items-center gap-3">
                      <UserAvatar user={user} />

                      <div>
                        <p className="font-semibold text-gray-900">
                          {user.name}
                        </p>

                        <p className="text-sm text-gray-500">{user.email}</p>
                      </div>
                    </div>

                    <Link
                      href="/dashboard"
                      onClick={() => setIsOpen(false)}
                      className="block rounded-lg px-3 py-2 text-gray-700 transition hover:bg-green-50 hover:text-green-600"
                    >
                      Dashboard
                    </Link>

                    <Link
                      href="/profile"
                      onClick={() => setIsOpen(false)}
                      className="mt-2 block rounded-lg px-3 py-2 text-gray-700 transition hover:bg-green-50 hover:text-green-600"
                    >
                      Profile
                    </Link>

                    <button
                      onClick={async () => {
                        setIsOpen(false);
                        await handleLogout();
                      }}
                      className="mt-2 block w-full rounded-lg px-3 py-2 text-left text-red-600 transition hover:bg-red-50"
                    >
                      Logout
                    </button>
                  </>
                ) : (
                  <>
                    <Link
                      href="/login"
                      onClick={() => setIsOpen(false)}
                      className="block rounded-lg px-3 py-2 text-gray-700 transition hover:bg-green-50 hover:text-green-600"
                    >
                      Login
                    </Link>

                    <Link
                      href="/register"
                      onClick={() => setIsOpen(false)}
                      className="mt-2 block rounded-lg bg-[#111827] px-3 py-2 text-center font-medium text-white transition hover:bg-[#1F2937]"
                    >
                      Register
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
