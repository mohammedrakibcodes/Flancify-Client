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

export const createTask = async (taskData) => {
  const { data } = await axiosInstance.post("/tasks", taskData, {
    withCredentials: true,
  });

  return data;
};

export const updateTask = async (id, taskData) => {
  const { data } = await axiosInstance.patch(`/tasks/${id}`, taskData, {
    withCredentials: true,
  });

  return data;
};

export const deleteTask = async (id) => {
  const { data } = await axiosInstance.delete(`/tasks/${id}`, {
    withCredentials: true,
  });

  return data;
};

export const getMyTasks = async (email) => {
  const { data } = await axiosInstance.get(`/tasks/client/${email}`, {
    withCredentials: true,
  });

  return data.result;
};
