import axios from "axios";

const api = axios.create({
  baseURL: "https://e-learning-api-production-a6d4.up.railway.app/api",
  headers: {
    "Content-Type": "application/json",
  },
});

// Attach token automatically
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});


api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Optionally redirect to login or clear token
      localStorage.removeItem("token");
    }
    return Promise.reject(error);
  }
);

export default api;
