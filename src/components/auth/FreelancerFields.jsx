export default function FreelancerFields({ register }) {
  return (
    <div className="space-y-4">
      <h3 className="text-base font-semibold text-gray-900">
        Freelancer Information
      </h3>

      <div>
        <label className="mb-2 block text-sm font-medium text-gray-700">
          Skills
        </label>

        <input
          type="text"
          placeholder="React, Next.js, Node.js"
          {...register("skills")}
          className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 outline-none transition focus:border-green-600"
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-gray-700">
          Bio
        </label>

        <textarea
          rows={5}
          placeholder="Tell clients about yourself..."
          {...register("bio")}
          className="w-full resize-none rounded-xl border border-gray-300 bg-white px-4 py-3 outline-none transition focus:border-green-600"
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-gray-700">
          Hourly Rate (USD)
        </label>

        <input
          type="number"
          min="1"
          step="1"
          placeholder="50"
          {...register("hourlyRate")}
          className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 outline-none transition focus:border-green-600"
        />
      </div>
    </div>
  );
}
