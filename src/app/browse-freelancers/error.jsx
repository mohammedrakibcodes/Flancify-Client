"use client";

export default function Error({ reset }) {
  return (
    <section className="flex min-h-[70vh] items-center justify-center">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-red-600">
          Something went wrong
        </h2>

        <p className="mt-3 text-gray-600">Failed to load freelancers.</p>

        <button
          onClick={() => reset()}
          className="mt-6 rounded-xl bg-[#111827] px-6 py-3 font-semibold text-white transition hover:bg-black"
        >
          Try Again
        </button>
      </div>
    </section>
  );
}
