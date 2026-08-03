"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaXTwitter } from "react-icons/fa6";

const navLinks = [
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

export default function Footer() {
  return (
    <footer className="relative mt-24 border-t border-black/10 bg-white/70 backdrop-blur-3xl transition-colors dark:border-white/10 dark:bg-black/60">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-500/5 to-transparent" />

      <div className="relative mx-auto flex max-w-7xl flex-col gap-10 px-6 py-14 lg:px-10">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            viewport={{ once: true }}
          >
            <Link href="/" className="inline-flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-green-600 text-lg font-bold text-white shadow-lg shadow-green-600/30">
                F
              </div>

              <div>
                <h2 className="text-2xl font-bold text-black dark:text-white">
                  Flancify
                </h2>

                <p className="text-sm text-neutral-500 dark:text-neutral-400">
                  Freelance Micro-Task Platform
                </p>
              </div>
            </Link>

            <p className="mt-5 max-w-sm leading-7 text-neutral-600 dark:text-neutral-400">
              A modern freelance marketplace where clients post micro tasks and
              skilled freelancers complete them efficiently.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            viewport={{ once: true }}
          >
            <h3 className="mb-5 text-lg font-semibold text-black dark:text-white">
              Navigation
            </h3>

            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-neutral-600 transition hover:text-green-600 dark:text-neutral-400 dark:hover:text-green-400"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="mb-5 text-lg font-semibold text-black dark:text-white">
              Contact
            </h3>

            <a
              href="mailto:mohammedrakibhossain02@gmail.com"
              className="flex items-start gap-3 rounded-2xl border border-black/10 bg-white/60 p-4 transition hover:border-green-500 dark:border-white/10 dark:bg-white/5"
            >
              <FaEnvelope className="mt-1 text-green-600 dark:text-green-400" />

              <span className="break-all text-sm text-neutral-700 dark:text-neutral-300">
                mohammedrakibhossain02@gmail.com
              </span>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            viewport={{ once: true }}
          >
            <h3 className="mb-5 text-lg font-semibold text-black dark:text-white">
              Connect
            </h3>

            <div className="flex gap-4">
              <a
                href="https://github.com/mohammedrakibcodes"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl border border-black/10 bg-white/70 p-4 text-xl transition hover:-translate-y-1 hover:border-green-500 hover:text-green-600 dark:border-white/10 dark:bg-white/5 dark:hover:text-green-400"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/mohammed-rakib-hossain/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl border border-black/10 bg-white/70 p-4 text-xl transition hover:-translate-y-1 hover:border-green-500 hover:text-green-600 dark:border-white/10 dark:bg-white/5 dark:hover:text-green-400"
              >
                <FaLinkedin />
              </a>

              <a
                href="https://x.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl border border-black/10 bg-white/70 p-4 text-xl transition hover:-translate-y-1 hover:border-green-500 hover:text-green-600 dark:border-white/10 dark:bg-white/5 dark:hover:text-green-400"
              >
                <FaXTwitter />
              </a>
            </div>
          </motion.div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-black/10 pt-6 text-center md:flex-row dark:border-white/10">
          <p className="text-sm text-neutral-500 dark:text-neutral-400">
            © {new Date().getFullYear()} Flancify. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
