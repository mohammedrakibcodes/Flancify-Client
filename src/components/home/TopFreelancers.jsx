"use client";

import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import FreelancerCard from "./FreelancerCard";
import { getTopFreelancers } from "@/services/homeApi";

export default function TopFreelancers() {
  const {
    data: freelancers = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["top-freelancers"],
    queryFn: getTopFreelancers,
  });

  if (isLoading) {
    return (
      <section className="py-24 text-center">
        <p>Loading freelancers...</p>
      </section>
    );
  }

  if (isError) {
    return (
      <section className="py-24 text-center">
        <p>Failed to load freelancers.</p>
      </section>
    );
  }

  return (
    <section className="bg-gray-50 py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-14 text-center">
          <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
            Top Freelancers
          </span>

          <h2 className="mt-5 text-4xl font-bold text-[#111827]">
            Hire the Best Talent
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Work with highly rated freelancers trusted by clients from around
            the world.
          </p>
        </div>

        <div className="grid gap-7 md:grid-cols-2 xl:grid-cols-3">
          {freelancers.map((freelancer) => (
            <FreelancerCard key={freelancer._id} freelancer={freelancer} />
          ))}
        </div>

        {freelancers.length === 0 && (
          <div className="py-10 text-center text-gray-500">
            No freelancers found.
          </div>
        )}

        <div className="mt-14 text-center">
          <Link
            href="/browse-freelancers"
            className="rounded-xl bg-[#111827] px-8 py-4 font-semibold text-white transition hover:bg-black"
          >
            View All Freelancers
          </Link>
        </div>
      </div>
    </section>
  );
}
