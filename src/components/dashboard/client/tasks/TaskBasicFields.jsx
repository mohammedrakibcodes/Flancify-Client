export default function TaskBasicFields({ register }) {
  return (
    <>
      <div>
        <label className="mb-2 block text-sm font-medium text-gray-700">
          Task Title
        </label>

        <input
          type="text"
          placeholder="Build a MERN Stack Website"
          {...register("title")}
          className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 outline-none transition focus:border-green-600"
        />
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Category
          </label>

          <select
            {...register("category")}
            className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 outline-none transition focus:border-green-600"
          >
            <option value="">Select Category</option>
            <option value="Web Development">Web Development</option>
            <option value="App Development">App Development</option>
            <option value="UI/UX Design">UI/UX Design</option>
            <option value="Graphic Design">Graphic Design</option>
            <option value="Writing">Writing</option>
            <option value="Marketing">Marketing</option>
            <option value="Video Editing">Video Editing</option>
            <option value="SEO">SEO</option>
            <option value="Data Entry">Data Entry</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Budget (USD)
          </label>

          <input
            type="number"
            min="1"
            placeholder="500"
            {...register("budget", {
              valueAsNumber: true,
            })}
            className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 outline-none transition focus:border-green-600"
          />
        </div>
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-gray-700">
          Deadline
        </label>

        <input
          type="date"
          {...register("deadline")}
          className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 outline-none transition focus:border-green-600"
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-gray-700">
          Description
        </label>

        <textarea
          rows={7}
          placeholder="Describe your project in detail..."
          {...register("description")}
          className="w-full resize-none rounded-xl border border-gray-300 bg-white px-4 py-3 outline-none transition focus:border-green-600"
        />
      </div>
    </>
  );
}
