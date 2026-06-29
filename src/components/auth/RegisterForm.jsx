"use client";

import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";

import { authClient } from "@/lib/auth-client";
import { registerSchema } from "@/validations/registerSchema";

export default function RegisterForm() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      role: "client",
    },
  });

  const onSubmit = async (values) => {
    try {
      await authClient.signUp.email(
        {
          name: values.name,
          email: values.email,
          password: values.password,
          callbackURL: "/",
        },
        {
          onSuccess: () => {
            toast.success("Account created successfully.");
            router.push("/");
          },

          onError: ({ error }) => {
            toast.error(error.message);
          },
        },
      );
    } catch (error) {
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
      <input
        type="text"
        placeholder="Full Name"
        autoComplete="name"
        {...register("name")}
        className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-green-600"
      />

      <input
        type="email"
        placeholder="Email"
        autoComplete="email"
        {...register("email")}
        className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-green-600"
      />

      <select
        {...register("role")}
        className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-green-600"
      >
        <option value="client">Client</option>
        <option value="freelancer">Freelancer</option>
      </select>

      <input
        type="password"
        placeholder="Password"
        autoComplete="new-password"
        {...register("password")}
        className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-green-600"
      />

      <input
        type="password"
        placeholder="Confirm Password"
        autoComplete="new-password"
        {...register("confirmPassword")}
        className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-green-600"
      />

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
