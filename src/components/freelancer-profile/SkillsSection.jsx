import { Code2 } from "lucide-react";

export default function SkillsSection({ freelancer }) {
  return (
    <div className="rounded-2xl bg-white p-8 shadow-sm">
      <h2 className="mb-6 text-2xl font-bold text-[#111827]">Skills</h2>

      {freelancer.skills?.length > 0 ? (
        <div className="flex flex-wrap gap-3">
          {freelancer.skills.map((skill) => (
            <span
              key={skill}
              className="flex items-center gap-2 rounded-full bg-green-100 px-4 py-2 text-sm font-medium text-green-700"
            >
              <Code2 size={16} />
              {skill}
            </span>
          ))}
        </div>
      ) : (
        <div className="rounded-xl border border-dashed border-gray-300 py-10 text-center text-gray-500">
          No skills added yet.
        </div>
      )}
    </div>
  );
}
