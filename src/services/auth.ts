import { api } from "@/lib/axios";
import type { ApiResponse } from "@/types/api";
import type { AuthData, RegisterPayload, LoginPayload } from "@/types/auth";

export const register = async (
  payload: RegisterPayload,
): Promise<ApiResponse<AuthData>> => {
  const res = await api.post<ApiResponse<AuthData>>("/auth/register", payload);
  return res.data;
};

export const login = async (
  payload: LoginPayload,
): Promise<ApiResponse<AuthData>> => {
  const res = await api.post<ApiResponse<AuthData>>("/auth/login", payload);
  return res.data;
};
