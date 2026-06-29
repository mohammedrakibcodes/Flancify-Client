"use client";

import { FcGoogle } from "react-icons/fc";

import { signIn } from "@/lib/auth-client";

export default function SocialLogin() {
  const handleGoogleLogin = async () => {
    await signIn.social({
      provider: "google",
      callbackURL: "/",
    });
  };

  return (
    <button
      type="button"
      onClick={handleGoogleLogin}
      className="flex w-full items-center justify-center gap-3 rounded-xl border border-gray-300 bg-white py-3 font-medium transition hover:bg-gray-50"
    >
      <FcGoogle size={22} />
      Continue with Google
    </button>
  );
}
