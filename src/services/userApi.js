import axiosInstance from "./axiosInstance";

export const getUserById = async (id) => {
  const { data } = await axiosInstance.get(`/users/id/${id}`);
  return data.result;
};
