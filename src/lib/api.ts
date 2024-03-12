import axios from "axios";
import { User } from "../@types/user";

const API_BASE_URL = "http://10.0.0.129:3000";

const getJobs = async () => {
  const response = await axios.get(`${API_BASE_URL}/vagas`);
  return response.data;
};

const getUser = async (id: string) => {
  const response = await axios.get(`${API_BASE_URL}/usuarios/${id}`);
  return response.data;
}

const getUsers = async () => {
  const response = await axios.get(`${API_BASE_URL}/usuarios`);
  return response.data;
};

const postUsers = async (data: User) => {
  const response = await axios.post(`${API_BASE_URL}/usuarios`, data);
  return response.status;
};

const putUser = async (id: string, data: User) => {
  const response = await axios.put(`${API_BASE_URL}/usuarios/${id}`, data);
  return response.status;
}

const api = {
  jobs: {
    get: getJobs,
  },
  user: {
    get: getUser,
  },
  users: {
    get: getUsers,
    post: postUsers,
    put: putUser
  },
};

export default api;
