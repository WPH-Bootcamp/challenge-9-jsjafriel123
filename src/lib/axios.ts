import axios from "axios";
import type { ApiResponse } from "@/types/api";
import { store } from "@/store";

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  //   timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use((config) => {
  const token = store.getState().auth.token;
  console.log("Redux token in interceptor:", token);

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    const data = error?.response?.data as ApiResponse<unknown> | undefined;

    return Promise.reject({
      status: error?.response?.status,
      message: data?.message ?? "Something went wrong",
      errors: data?.errors,
    });
  },
);
