import api from "./api";

const createProject = async (projectBody) => {
  const response = await api.post("/porjects", projectBody);

  return response.data;
};

const getAllProjects = async () => {
  const response = await api.get("/projects");

  return response.data;
};

const getOneProject = async (projectId) => {
  const response = await api.get(`/projects/${projectId}`);

  return response.data;
};

const getMyProjects = async () => {
  const response = await api.get("/projects//my-projects");

  return response.data;
};

const updateOneProject = async (projectId, projectBody) => {
  const response = await api.put(`/projects/${projectId}`, projectBody);

  return response.data;
};

const addMembers = async (projectId) => {
  const response = await api.put(`/projects/${projectId}/update-memebers`);

  return response.data;
};

export {
  createProject,
  getAllProjects,
  getOneProject,
  getMyProjects,
  updateOneProject,
  addMembers,
};
