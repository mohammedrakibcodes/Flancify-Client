"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

import { authClient } from "@/lib/auth-client";
import { logoutUser } from "@/services/authApi";
import useCurrentUser from "@/hooks/useCurrentUser";

import DashboardLayout from "@/components/dashboard/DashboardLayout";

export default function ClientDashboardLayout({ children }) {
  const router = useRouter();

  const { currentUser, loading } = useCurrentUser();

  useEffect(() => {
    if (loading) return;

    if (!currentUser) {
      router.replace("/login");
      return;
    }

    if (currentUser.role !== "client") {
      router.replace("/");
    }
  }, [loading, currentUser, router]);

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

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center">
        Loading...
      </div>
    );
  }

  if (!currentUser || currentUser.role !== "client") {
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
