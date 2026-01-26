import { useQuery, keepPreviousData } from "@tanstack/react-query";
import { getRestaurants } from "../services/getRestaurants";
import type { RestaurantQueryParams } from "../services/getRestaurants";
import type { RestaurantListResponse } from "../types/restaurant";

export const useRestaurants = (params: RestaurantQueryParams) => {
  return useQuery<RestaurantListResponse>({
    queryKey: ["Restaurant", params],
    queryFn: () => getRestaurants(params),
    placeholderData: keepPreviousData,
  });
};
