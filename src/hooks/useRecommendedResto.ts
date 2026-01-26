import { useQuery } from "@tanstack/react-query";
import { getRecommendedResto } from "../services/getRecommendedResto";
import type { RecommendedRestoResponse } from "../types/recommendation";
import { keepPreviousData } from "@tanstack/react-query";

export const useRecommendedResto = (page: number) => {
  return useQuery<RecommendedRestoResponse>({
    queryKey: ["recommended-resto", page],
    queryFn: () => getRecommendedResto({ page, limit: 12 }),
    placeholderData: keepPreviousData,
  });
};
