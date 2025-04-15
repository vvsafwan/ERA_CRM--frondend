// axiosInstance.js
import axios from "axios";
import { apiConfig } from "./apiConfig";

export const createApi = (tokenKey) => {
  const api = axios.create({
    baseURL: apiConfig.BASE_URL,
  });

  api.interceptors.request.use((config) => {
    const token = localStorage.getItem(tokenKey);
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  });

  return api;
};

// userApi.js
export const userApi = createApi("userToken");

// adminApi.js
export const adminApi = createApi("adminToken");