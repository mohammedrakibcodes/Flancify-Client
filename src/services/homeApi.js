import axiosInstance from "./axiosInstance";

export const getLatestTasks = async () => {
  const { data } = await axiosInstance.get("/tasks/latest");
  return data.result;
};

export const getTopFreelancers = async () => {
  const { data } = await axiosInstance.get("/users/freelancers/top");
  return data.result;
};

export const getHomeStats = async () => {
  const { data } = await axiosInstance.get("/stats");
  return data.result;
};
