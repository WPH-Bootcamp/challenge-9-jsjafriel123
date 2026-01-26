import { api } from "@/lib/axios"; // your axios instance
import type { RestaurantListResponse } from "../types/restaurant";

export interface RestaurantQueryParams {
  search?: string;
  location?: string;
  range?: number;
  priceMin?: number;
  priceMax?: number;
  rating?: number;
  category?: string;
  page?: number;
  limit?: number;
}

export const getRestaurants = async (
  params: RestaurantQueryParams,
): Promise<RestaurantListResponse> => {
  const res = await api.get("/resto", {
    params,
  });

  return res.data;
};
