import api from "./api";

const createTask = async (projectId) => {
  const response = await api.post(`/tasks/${projectId}`);

  return response.data;
};

const getAllProjectTasks = async (projectId) => {
  const response = await api.get(`/tasks/${projectId}/all-tasks`);

  return response.data;
};

const getOneTask = async (taskId) => {
  const response = await api.get(`/tasks/${taskId}`);

  return response.data;
};

const getMyProjectTasks = async (projectId) => {
  const response = await api.get(`/tasks/${projectId}/my-tasks`);

  return response.data;
};

const updateOneTask = async (taskId) => {
  const response = await api.put(`/tasks/${taskId}`);

  return response.data;
};

const deleteOneTask = async (taskId) => {
  const response = await api.delete(`/tasks/${taskId}`);

  return response.data;
};

export {
  createTask,
  getAllProjectTasks,
  getOneTask,
  getMyProjectTasks,
  updateOneTask,
  deleteOneTask,
};
