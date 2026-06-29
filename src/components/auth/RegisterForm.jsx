"use client";

import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";

import { authClient } from "@/lib/auth-client";
import { registerSchema } from "@/validations/registerSchema";
import { createUser } from "@/services/userApi";
import axiosInstance from "@/services/axiosInstance";
import BasicFields from "./BasicFields";
import FreelancerFields from "./FreelancerFields";

export default function RegisterForm() {
  const router = useRouter();

  const {
    register,
    watch,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      role: "client",
      skills: "",
      bio: "",
      hourlyRate: "",
    },
  });

  const role = watch("role");

  const onSubmit = async (values) => {
    try {
      await authClient.signUp.email(
        {
          name: values.name.trim(),
          email: values.email.trim(),
          password: values.password,
          callbackURL: "/",
        },
        {
          onSuccess: async () => {
            try {
              const payload = {
                name: values.name.trim(),
                email: values.email.trim(),
                role: values.role,
                image: "",
              };

              if (values.role === "freelancer") {
                payload.skills = values.skills
                  .split(",")
                  .map((item) => item.trim())
                  .filter(Boolean);

                payload.bio = values.bio.trim();

                payload.hourlyRate = Number(values.hourlyRate);
              }

              await createUser(payload);

              await axiosInstance.post("/auth/jwt", {
                email: payload.email,
                role: payload.role,
              });

              toast.success("Account created successfully.");

              router.replace("/");
              router.refresh();
            } catch (error) {
              console.error(error);

              toast.error("Profile creation failed.");
            }
          },

          onError: ({ error }) => {
            toast.error(error.message);
          },
        },
      );
    } catch (error) {
      console.error(error);

      toast.error("Something went wrong. Please try again.");
    }
  };

  const onInvalid = (errors) => {
    const firstError = Object.values(errors)[0];

    if (firstError?.message) {
      toast.error(firstError.message);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit, onInvalid)} className="space-y-5">
      <BasicFields register={register} />

      <div>
        <label className="mb-2 block text-sm font-medium text-gray-700">
          Account Type
        </label>

        <select
          {...register("role")}
          className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 outline-none transition focus:border-green-600"
        >
          <option value="client">Client</option>
          <option value="freelancer">Freelancer</option>
        </select>
      </div>

      {role === "freelancer" && <FreelancerFields register={register} />}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full rounded-xl bg-green-600 py-3 font-semibold text-white transition hover:bg-green-700 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {isSubmitting ? "Creating Account..." : "Create Account"}
      </button>
    </form>
  );
}
