"use client";

import { createContext, useContext } from "react";
import { useQuery } from "@tanstack/react-query";

import { useSession } from "@/lib/auth-client";
import axiosInstance from "@/services/axiosInstance";

const UserContext = createContext(null);

export default function UserProvider({ children }) {
  const { data: session, isPending } = useSession();

  const { data, isLoading } = useQuery({
    queryKey: ["current-user", session?.user?.email],

    enabled: !!session?.user?.email,

    queryFn: async () => {
      const res = await axiosInstance.get("/users/email", {
        params: {
          email: session.user.email,
        },
      });

      return res.data.result;
    },
  });

  return (
    <UserContext.Provider
      value={{
        currentUser: data || null,
        loading: isPending || isLoading,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export const useUser = () => useContext(UserContext);
