import axios, { type AxiosError } from "axios";
import { API_URL } from "~/constants/constants";
import { refreshToken } from "./refresh";

export const http = axios.create({
  baseURL: API_URL,
  withCredentials: true,
});

http.interceptors.request.use((config) => {
  const authToken = localStorage.getItem("authToken");
  if (authToken && config.headers)
    config.headers.Authorization = `Bearer ${authToken}`;
  return config;
});

http.interceptors.response.use(
  (response) => response,
  async (error: AxiosError & { config?: any }) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const { data } = await refreshToken();
        const authToken = (data as any).authToken;
        if (authToken) {
          localStorage.setItem("authToken", authToken);
          if (originalRequest.headers) {
            originalRequest.headers.Authorization = `Bearer ${authToken}`;
          } else {
            originalRequest.headers = { Authorization: `Bearer ${authToken}` };
          }
          return http(originalRequest);
        }
      } catch {
        localStorage.removeItem("authToken");
        window.location.href = "/login";
        return Promise.reject(error);
      }
    }
    return Promise.reject(error);
  },
);
