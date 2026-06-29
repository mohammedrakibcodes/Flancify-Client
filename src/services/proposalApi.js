import axiosInstance from "./axiosInstance";

export const getTaskProposals = async (taskId) => {
  const { data } = await axiosInstance.get(`/proposals/task/${taskId}`, {
    withCredentials: true,
  });

  return data.result;
};

export const acceptProposal = async (id) => {
  const { data } = await axiosInstance.patch(
    `/proposals/${id}/accept`,
    {},
    {
      withCredentials: true,
    },
  );

  return data;
};
