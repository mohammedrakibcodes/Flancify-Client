"use client";

export default function HireButton({ freelancer }) {
  return (
    <button className="w-full rounded-xl bg-green-600 px-6 py-3 font-semibold text-white transition hover:bg-green-700 active:scale-95">
      Hire {freelancer.name}
    </button>
  );
}
