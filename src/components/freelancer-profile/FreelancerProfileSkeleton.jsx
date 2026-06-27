export default function FreelancerProfileSkeleton() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="space-y-6 lg:col-span-2">
            <div className="h-48 animate-pulse rounded-2xl bg-gray-200" />

            <div className="h-36 animate-pulse rounded-2xl bg-gray-200" />

            <div className="h-48 animate-pulse rounded-2xl bg-gray-200" />
          </div>

          <div className="h-80 animate-pulse rounded-2xl bg-gray-200" />
        </div>
      </div>
    </section>
  );
}
