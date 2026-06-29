"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

import { authClient } from "@/lib/auth-client";

import useAuth from "@/hooks/useAuth";
import useCurrentUser from "@/hooks/useCurrentUser";

import { logoutUser } from "@/services/authApi";

import DashboardLayout from "@/components/dashboard/DashboardLayout";

export default function ClientDashboardLayout({ children }) {
  const router = useRouter();

  const { user, loading: authLoading } = useAuth();

  const { currentUser, loading: currentUserLoading } = useCurrentUser();

  useEffect(() => {
    if (authLoading || currentUserLoading) return;

    if (!user) {
      router.replace("/login");
      return;
    }

    if (!currentUser) return;

    if (currentUser.role !== "client") {
      router.replace("/");
    }
  }, [authLoading, currentUserLoading, user, currentUser, router]);

  const handleLogout = async () => {
    try {
      await authClient.signOut();

      await logoutUser();

      toast.success("Logged out successfully.");

      router.replace("/");
      router.refresh();
    } catch {
      toast.error("Logout failed.");
    }
  };

  if (authLoading || currentUserLoading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <span className="loading loading-spinner loading-lg text-green-600"></span>
      </div>
    );
  }

  if (!user || !currentUser) {
    return null;
  }

  if (currentUser.role !== "client") {
    return null;
  }

  return (
    <DashboardLayout
      title="Client Dashboard"
      user={currentUser}
      onLogout={handleLogout}
    >
      {children}
    </DashboardLayout>
  );
}
