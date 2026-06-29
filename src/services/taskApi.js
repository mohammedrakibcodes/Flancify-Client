import axiosInstance from "./axiosInstance";

export const getTaskById = async (id) => {
  const { data } = await axiosInstance.get(`/tasks/${id}`);
  return data.result;
};

export const getAllTasks = async ({
  search = "",
  category = "all",
  page = 1,
}) => {
  const { data } = await axiosInstance.get("/tasks", {
    params: {
      search,
      category,
      page,
    },
  });

  return data;
};
