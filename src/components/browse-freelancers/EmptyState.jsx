import { Users } from "lucide-react";

export default function EmptyState() {
  return (
    <div className="rounded-2xl bg-white py-20 text-center shadow-sm">
      <Users className="mx-auto h-16 w-16 text-gray-400" />

      <h2 className="mt-6 text-2xl font-bold text-[#111827]">
        No Freelancers Found
      </h2>

      <p className="mt-3 text-gray-500">
        Try changing your search or skill filter.
      </p>
    </div>
  );
}
