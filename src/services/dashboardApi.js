import axiosInstance from "./axiosInstance";

export const getClientStats = async () => {
  const { data } = await axiosInstance.get("/dashboard/client-stats");

  return data.result;
};

export const getFreelancerStats = async () => {
  const { data } = await axiosInstance.get("/dashboard/freelancer-stats");

  return data.result;
};
