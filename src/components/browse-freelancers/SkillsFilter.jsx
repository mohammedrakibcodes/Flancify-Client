export default function SkillsFilter({ skill, setSkill, setPage }) {
  const skills = [
    "all",
    "React",
    "Next.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "JavaScript",
    "TypeScript",
    "Tailwind CSS",
    "Figma",
  ];

  return (
    <select
      value={skill}
      onChange={(e) => {
        setSkill(e.target.value);
        setPage(1);
      }}
      className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 outline-none transition focus:border-green-500"
    >
      {skills.map((item) => (
        <option key={item} value={item}>
          {item === "all" ? "All Skills" : item}
        </option>
      ))}
    </select>
  );
}
