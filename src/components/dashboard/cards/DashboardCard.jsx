"use client";

export default function DashboardCard({ title, children, className = "" }) {
  return (
    <div
      className={`rounded-2xl border border-gray-200 bg-white p-6 shadow-sm ${className}`}
    >
      {title && (
        <h2 className="mb-6 text-lg font-semibold text-gray-900">{title}</h2>
      )}

      {children}
    </div>
  );
}
