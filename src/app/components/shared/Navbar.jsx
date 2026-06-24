"use client";

import Link from "next/link";
import { useState } from "react";
import { HiBars3, HiXMark } from "react-icons/hi2";

export default function Navbar() {
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

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <nav className="flex h-18 items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-blue-600">
            Flancify
          </Link>

          <ul className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="font-medium text-gray-700 transition hover:text-blue-600"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/login"
              className="font-medium text-gray-700 transition hover:text-blue-600"
            >
              Login
            </Link>

            <Link
              href="/register"
              className="rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700"
            >
              Register
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-3xl text-gray-700"
          >
            {isOpen ? <HiXMark /> : <HiBars3 />}
          </button>
        </nav>
      </div>

      {isOpen && (
        <div className="border-t border-gray-200 bg-white md:hidden">
          <div className="space-y-2 px-4 py-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block rounded-lg px-3 py-2 text-gray-700 hover:bg-gray-100"
              >
                {link.name}
              </Link>
            ))}

            <div className="pt-2 border-t border-gray-200">
              <Link
                href="/login"
                onClick={() => setIsOpen(false)}
                className="block rounded-lg px-3 py-2 text-gray-700 hover:bg-gray-100"
              >
                Login
              </Link>

              <Link
                href="/register"
                onClick={() => setIsOpen(false)}
                className="mt-2 block rounded-lg bg-blue-600 px-3 py-2 text-center font-medium text-white"
              >
                Register
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
