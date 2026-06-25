"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaFacebook, FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="border-t border-gray-800 bg-[#111827]">
      <div className="mx-auto max-w-7xl px-4 py-12 md:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Brand */}
          <div>
            <Link href="/" className="text-2xl font-bold text-white">
              Flancify
            </Link>

            <p className="mt-3 text-sm leading-relaxed text-gray-400">
              Connect with skilled freelancers and get your tasks completed
              quickly, securely, and efficiently.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">
              Quick Links
            </h3>

            <ul className="space-y-2 text-gray-400">
              <li>
                <Link
                  href="/"
                  className="transition-colors hover:text-green-500"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  href="/browse-tasks"
                  className="transition-colors hover:text-green-500"
                >
                  Browse Tasks
                </Link>
              </li>

              <li>
                <Link
                  href="/browse-freelancers"
                  className="transition-colors hover:text-green-500"
                >
                  Browse Freelancers
                </Link>
              </li>

              <li>
                <Link
                  href="/login"
                  className="transition-colors hover:text-green-500"
                >
                  Login
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">Contact</h3>

            <p className="text-gray-400">support@flancify.com</p>

            <div className="mt-5 flex items-center gap-4 text-xl">
              {[FaGithub, FaLinkedin, FaFacebook, FaXTwitter].map(
                (Icon, index) => (
                  <motion.a
                    key={index}
                    href="#"
                    whileHover={{
                      scale: 1.2,
                      y: -3,
                    }}
                    whileTap={{
                      scale: 0.95,
                    }}
                    transition={{
                      duration: 0.2,
                    }}
                    className="text-gray-400 hover:text-green-500"
                  >
                    <Icon />
                  </motion.a>
                ),
              )}
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-gray-800 pt-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Flancify. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
