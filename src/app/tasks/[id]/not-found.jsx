import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center justify-center bg-gray-50 px-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-[#111827]">404</h1>

        <h2 className="mt-4 text-3xl font-bold text-[#111827]">
          Task Not Found
        </h2>

        <p className="mt-4 text-gray-600">
          The task you are looking for doesn't exist or has been removed.
        </p>

        <Link
          href="/browse-tasks"
          className="mt-8 inline-block rounded-xl bg-[#111827] px-6 py-3 font-semibold text-white transition hover:bg-black"
        >
          Browse Tasks
        </Link>
      </div>
    </section>
  );
}
