import axiosInstance from "./axiosInstance";

export const getClientDashboard = async (email) => {
  const { data } = await axiosInstance.get(`/dashboard/client/${email}`, {
    withCredentials: true,
  });

  return data.result;
};

export const getClientStats = async (email) => {
  const { data } = await axiosInstance.get("/dashboard/client-stats", {
    params: {
      email,
    },
    withCredentials: true,
  });

  return data.result;
};

export const getFreelancerStats = async (email) => {
  const { data } = await axiosInstance.get("/dashboard/freelancer-stats", {
    params: {
      email,
    },
    withCredentials: true,
  });

  return data.result;
};
