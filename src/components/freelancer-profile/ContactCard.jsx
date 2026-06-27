import { Mail, BriefcaseBusiness, Star } from "lucide-react";

import HireButton from "./HireButton";

export default function ContactCard({ freelancer }) {
  return (
    <div className="sticky top-24 rounded-2xl bg-white p-8 shadow-sm">
      <h2 className="mb-6 text-2xl font-bold text-[#111827]">Contact</h2>

      <div className="space-y-5">
        <div className="flex items-center gap-3">
          <Mail className="h-6 w-6 text-green-600" />

          <div>
            <p className="text-sm text-gray-500">Email</p>
            <p className="font-semibold text-[#111827]">{freelancer.email}</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Star className="h-6 w-6 fill-yellow-400 text-yellow-400" />

          <div>
            <p className="text-sm text-gray-500">Rating</p>
            <p className="font-semibold text-[#111827]">
              {freelancer.rating ?? 0}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <BriefcaseBusiness className="h-6 w-6 text-green-600" />

          <div>
            <p className="text-sm text-gray-500">Completed Jobs</p>
            <p className="font-semibold text-[#111827]">
              {freelancer.completedJobs ?? 0}
            </p>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <HireButton freelancer={freelancer} />
      </div>
    </div>
  );
}
