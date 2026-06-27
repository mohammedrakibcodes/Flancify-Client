export default function TaskDescription({ task }) {
  return (
    <div className="rounded-2xl bg-white p-8 shadow-sm">
      <h2 className="mb-6 text-2xl font-bold text-[#111827]">
        Project Description
      </h2>

      <p className="leading-8 text-gray-600">{task.description}</p>
    </div>
  );
}
