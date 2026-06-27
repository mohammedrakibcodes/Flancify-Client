import { CalendarDays, Mail, ShieldCheck } from "lucide-react";

export default function ProfileInfo({ freelancer }) {
  return (
    <div className="rounded-2xl bg-white p-8 shadow-sm">
      <h2 className="mb-6 text-2xl font-bold text-[#111827]">
        Profile Information
      </h2>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="flex items-center gap-3">
          <div className="rounded-full bg-green-100 p-3">
            <Mail className="h-6 w-6 text-green-600" />
          </div>

          <div>
            <p className="text-sm text-gray-500">Email</p>
            <h3 className="font-semibold text-[#111827]">{freelancer.email}</h3>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="rounded-full bg-green-100 p-3">
            <ShieldCheck className="h-6 w-6 text-green-600" />
          </div>

          <div>
            <p className="text-sm text-gray-500">Role</p>
            <h3 className="font-semibold capitalize text-[#111827]">
              {freelancer.role}
            </h3>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="rounded-full bg-green-100 p-3">
            <CalendarDays className="h-6 w-6 text-green-600" />
          </div>

          <div>
            <p className="text-sm text-gray-500">Joined</p>
            <h3 className="font-semibold text-[#111827]">
              {new Date(freelancer.createdAt).toLocaleDateString()}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}
