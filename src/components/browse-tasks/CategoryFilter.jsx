export default function CategoryFilter({ category, setCategory, setPage }) {
  const categories = [
    "all",
    "Web Development",
    "Design",
    "Writing",
    "Marketing",
    "Video Editing",
    "Mobile Development",
    "Backend Development",
    "Data Analytics",
  ];

  return (
    <select
      value={category}
      onChange={(e) => {
        setCategory(e.target.value);
        setPage(1);
      }}
      className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 outline-none transition focus:border-green-500"
    >
      {categories.map((item) => (
        <option key={item} value={item}>
          {item === "all" ? "All Categories" : item}
        </option>
      ))}
    </select>
  );
}
