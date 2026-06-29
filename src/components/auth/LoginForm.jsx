"use client";

import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { useQueryClient } from "@tanstack/react-query";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";

import { authClient } from "@/lib/auth-client";
import { loginSchema } from "@/validations/loginSchema";
import axiosInstance from "@/services/axiosInstance";

export default function LoginForm() {
  const router = useRouter();
  const queryClient = useQueryClient();

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values) => {
    try {
      await authClient.signIn.email(
        {
          email: values.email,
          password: values.password,
        },
        {
          onSuccess: async () => {
            try {
              const { data: userData } = await axiosInstance.get(
                "/users/email",
                {
                  params: {
                    email: values.email,
                  },
                },
              );

              const user = userData.result;

              await axiosInstance.post("/auth/jwt", {
                email: user.email,
                role: user.role,
              });

              await queryClient.invalidateQueries({
                queryKey: ["current-user"],
              });

              toast.success("Login successful.");

              switch (user.role) {
                case "client":
                  router.replace("/client-dashboard");
                  break;

                case "freelancer":
                  router.replace("/freelancer-dashboard");
                  break;

                case "admin":
                  router.replace("/admin-dashboard");
                  break;

                default:
                  router.replace("/");
              }

              router.refresh();
            } catch (error) {
              console.error(error);

              toast.error("Failed to create user session.");
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
      <input
        type="email"
        placeholder="Email"
        autoComplete="email"
        {...register("email")}
        className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-green-600"
      />

      <input
        type="password"
        placeholder="Password"
        autoComplete="current-password"
        {...register("password")}
        className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-green-600"
      />

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full rounded-xl bg-green-600 py-3 font-semibold text-white transition hover:bg-green-700 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {isSubmitting ? "Signing In..." : "Login"}
      </button>
    </form>
  );
}
