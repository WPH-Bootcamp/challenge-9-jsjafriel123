import { api } from "@/lib/axios"; // your axios instance
import type { RecommendedRestoResponse } from "../types/recommendation";

export const getRecommendedResto =
  async (): Promise<RecommendedRestoResponse> => {
    const res = await api.get("/resto/recommended");
    return res.data;
  };
