export default function AuthTitle({ title, subtitle }) {
  return (
    <div className="mb-8 text-center">
      <h1 className="text-3xl font-bold text-[#111827]">{title}</h1>

      <p className="mt-3 text-gray-600">{subtitle}</p>
    </div>
  );
}
