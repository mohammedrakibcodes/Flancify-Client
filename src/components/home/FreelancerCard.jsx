import Image from "next/image";
import Link from "next/link";
import { BriefcaseBusiness, Star } from "lucide-react";

export default function FreelancerCard({ freelancer }) {
  return (
    <div className="group overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-green-500 hover:shadow-xl">
      <div className="flex items-center gap-4">
        <Image
          src={freelancer.image}
          alt={freelancer.name}
          width={70}
          height={70}
          className="rounded-full object-cover"
        />

        <div>
          <h3 className="text-xl font-bold text-[#111827] transition group-hover:text-green-600">
            {freelancer.name}
          </h3>

          <p className="text-sm text-gray-500">{freelancer.bio}</p>
        </div>
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        {freelancer.skills?.map((skill) => (
          <span
            key={skill}
            className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700"
          >
            {skill}
          </span>
        ))}
      </div>

      <div className="mt-6 flex items-center justify-between border-t pt-5">
        <div className="flex items-center gap-2 text-yellow-500">
          <Star size={18} fill="currentColor" />
          <span className="font-semibold text-[#111827]">
            {freelancer.rating ?? "N/A"}
          </span>
        </div>

        <div className="flex items-center gap-2 text-green-600">
          <BriefcaseBusiness size={18} />
          <span className="font-semibold">
            {freelancer.completedJobs ?? 0} Jobs
          </span>
        </div>
      </div>

      <Link
        href={`/browse-freelancers/${freelancer._id}`}
        className="mt-6 flex w-full items-center justify-center rounded-xl bg-[#111827] px-4 py-3 font-semibold text-white transition hover:bg-black"
      >
        View Profile
      </Link>
    </div>
  );
}
