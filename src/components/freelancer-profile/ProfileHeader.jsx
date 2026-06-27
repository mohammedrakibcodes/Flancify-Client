import Image from "next/image";
import { BriefcaseBusiness, Star } from "lucide-react";

export default function ProfileHeader({ freelancer }) {
  return (
    <div className="rounded-2xl bg-white p-8 shadow-sm">
      <div className="flex flex-col items-center gap-6 md:flex-row">
        <Image
          src={freelancer.image || "/images/default-avatar.png"}
          alt={freelancer.name}
          width={120}
          height={120}
          className="h-30 w-30 rounded-full object-cover border-4 border-green-100"
        />

        <div className="flex-1">
          <h1 className="text-4xl font-bold text-[#111827]">
            {freelancer.name}
          </h1>

          <p className="mt-2 text-lg text-gray-600">{freelancer.bio}</p>

          <div className="mt-5 flex flex-wrap gap-6">
            <div className="flex items-center gap-2 text-yellow-500">
              <Star size={20} fill="currentColor" />
              <span className="font-semibold text-[#111827]">
                {freelancer.rating ?? 0}
              </span>
            </div>

            <div className="flex items-center gap-2 text-green-600">
              <BriefcaseBusiness size={20} />
              <span className="font-semibold">
                {freelancer.completedJobs ?? 0} Jobs Completed
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
