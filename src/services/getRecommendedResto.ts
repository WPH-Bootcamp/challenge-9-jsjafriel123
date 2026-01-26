import { api } from "@/lib/axios"; // your axios instance
import type { RecommendedRestoResponse } from "../types/recommendation";

export const getRecommendedResto = async ({
  page = 1,
  limit = 12,
}: {
  page?: number;
  limit?: number;
}): Promise<RecommendedRestoResponse> => {
  const res = await api.get("/resto/recommended", { params: { page, limit } });
  return res.data;
};
