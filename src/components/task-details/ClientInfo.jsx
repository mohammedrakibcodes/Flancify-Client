import { Mail, User } from "lucide-react";

export default function ClientInfo({ task }) {
  return (
    <div className="rounded-2xl bg-white p-8 shadow-sm">
      <h2 className="mb-6 text-2xl font-bold text-[#111827]">
        Client Information
      </h2>

      <div className="space-y-5">
        <div className="flex items-center gap-4">
          <div className="rounded-full bg-green-100 p-3">
            <User className="h-6 w-6 text-green-600" />
          </div>

          <div>
            <p className="text-sm text-gray-500">Client</p>
            <h3 className="font-semibold text-[#111827]">
              {task.client_name || "Anonymous Client"}
            </h3>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="rounded-full bg-green-100 p-3">
            <Mail className="h-6 w-6 text-green-600" />
          </div>

          <div>
            <p className="text-sm text-gray-500">Email</p>
            <h3 className="font-semibold text-[#111827]">
              {task.client_email}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}
