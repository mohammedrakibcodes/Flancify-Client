export default function BrowseTasksSkeleton() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-10 h-10 w-64 animate-pulse rounded bg-gray-200" />

        <div className="mb-8 grid gap-4 md:grid-cols-2">
          <div className="h-12 animate-pulse rounded-xl bg-gray-200" />
          <div className="h-12 animate-pulse rounded-xl bg-gray-200" />
        </div>

        <div className="grid gap-7 md:grid-cols-2 xl:grid-cols-3">
          {Array.from({ length: 6 }).map((_, index) => (
            <div
              key={index}
              className="h-72 animate-pulse rounded-2xl bg-gray-200"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
