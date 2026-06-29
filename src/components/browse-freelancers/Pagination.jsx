export default function Pagination({ currentPage, totalPages, setPage }) {
  if (totalPages <= 1) return null;

  return (
    <div className="mt-14 flex items-center justify-center gap-2">
      <button
        disabled={currentPage === 1}
        onClick={() => setPage(currentPage - 1)}
        className="rounded-lg border px-4 py-2 disabled:cursor-not-allowed disabled:opacity-50"
      >
        Previous
      </button>

      {Array.from({ length: totalPages }, (_, index) => (
        <button
          key={index}
          onClick={() => setPage(index + 1)}
          className={`h-10 w-10 rounded-lg transition ${
            currentPage === index + 1
              ? "bg-green-600 text-white"
              : "border hover:border-green-600"
          }`}
        >
          {index + 1}
        </button>
      ))}

      <button
        disabled={currentPage === totalPages}
        onClick={() => setPage(currentPage + 1)}
        className="rounded-lg border px-4 py-2 disabled:cursor-not-allowed disabled:opacity-50"
      >
        Next
      </button>
    </div>
  );
}
