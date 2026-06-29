import axiosInstance from "./axiosInstance";

export const logoutUser = async () => {
  const { data } = await axiosInstance.post("/auth/logout");
  return data;
};
