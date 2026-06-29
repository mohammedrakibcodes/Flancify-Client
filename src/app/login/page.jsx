import Link from "next/link";

import AuthLayout from "@/components/auth/AuthLayout";
import AuthTitle from "@/components/auth/AuthTitle";
import Divider from "@/components/auth/Divider";
import SocialLogin from "@/components/auth/SocialLogin";
import LoginForm from "@/components/auth/LoginForm";

export default function LoginPage() {
  return (
    <AuthLayout>
      <AuthTitle
        title="Welcome Back"
        subtitle="Login to your Flancify account"
      />

      <LoginForm />

      <Divider />

      <SocialLogin />

      <p className="mt-6 text-center text-sm text-gray-600">
        Don't have an account?{" "}
        <Link
          href="/register"
          className="font-semibold text-green-600 hover:underline"
        >
          Register
        </Link>
      </p>
    </AuthLayout>
  );
}
