"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BriefcaseBusiness,
  ClipboardCheck,
  Star,
  Users,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0">
        <Image
          src="/images/Hero.jpg"
          alt="Hero Background"
          fill
          priority
          className="scale-110 object-cover blur-[4px]"
        />
      </div>

      <div className="absolute inset-0 bg-black/45" />

      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent" />

      <div className="relative z-10 max-w-4xl px-4 text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-green-500/30 bg-green-500/10 px-4 py-2 text-sm font-medium text-green-300 backdrop-blur-sm">
          <BriefcaseBusiness size={18} />
          Freelance Marketplace
        </span>

        <h1 className="mt-6 text-5xl font-bold leading-tight text-white lg:text-7xl">
          Get Your Tasks Done by
          <span className="block text-green-400">Skilled Freelancers</span>
        </h1>

        <p className="mt-6 text-lg leading-8 text-gray-200">
          Hire talented freelancers for design, development, writing, marketing,
          and other micro-tasks. Connect with professionals and get quality work
          delivered fast.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            href="/dashboard/client/post-task"
            className="rounded-xl bg-green-600 px-6 py-3 font-semibold text-white hover:bg-green-700 active:scale-95 active:bg-green-800 transition-all duration-150"
          >
            Post a Task
          </Link>

          <Link
            href="/browse-tasks"
            className="flex items-center gap-2 rounded-xl border border-white/30 bg-white/10 px-6 py-3 font-semibold text-white backdrop-blur-sm hover:bg-white/20 active:scale-95 transition-all duration-150"
          >
            Browse Tasks
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
