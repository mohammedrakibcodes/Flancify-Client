import { SearchX } from "lucide-react";

export default function EmptyState() {
  return (
    <div className="rounded-2xl  bg-white py-20 text-center shadow-sm">
      <SearchX className="mx-auto h-16 w-16 text-red-500" />

      <h2 className="mt-6 text-2xl font-bold text-[#111827]">No Tasks Found</h2>

      <p className="mt-3 text-gray-500">
        Try changing your search or category.
      </p>
    </div>
  );
}
