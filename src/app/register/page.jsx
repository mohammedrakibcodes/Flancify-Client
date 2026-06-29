import Link from "next/link";

import AuthLayout from "@/components/auth/AuthLayout";
import AuthTitle from "@/components/auth/AuthTitle";
import Divider from "@/components/auth/Divider";
import SocialLogin from "@/components/auth/SocialLogin";
import RegisterForm from "@/components/auth/RegisterForm";

export default function RegisterPage() {
  return (
    <AuthLayout>
      <AuthTitle
        title="Create Account"
        subtitle="Join Flancify and start your journey"
      />

      <RegisterForm />

      <Divider />

      <SocialLogin />

      <p className="mt-6 text-center text-sm text-gray-600">
        Already have an account?{" "}
        <Link
          href="/login"
          className="font-semibold text-green-600 hover:underline"
        >
          Login
        </Link>
      </p>
    </AuthLayout>
  );
}
