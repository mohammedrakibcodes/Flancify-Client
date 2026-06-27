import axiosInstance from "./axiosInstance";

export const getTaskById = async (id) => {
  const { data } = await axiosInstance.get(`/tasks/${id}`);
  return data.result;
};
