import axiosInstance from "./axiosInstance";

export const getUserById = async (id) => {
  const { data } = await axiosInstance.get(`/users/id/${id}`);
  return data.result;
};

export const getAllFreelancers = async ({
  search = "",
  skill = "all",
  page = 1,
}) => {
  const { data } = await axiosInstance.get("/users/freelancers", {
    params: {
      search,
      skill,
      page,
    },
  });

  return data;
};
