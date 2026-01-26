import { useQuery } from "@tanstack/react-query";
import { getRecommendedResto } from "../services/getRecommendedResto";
import type { RecommendedRestoResponse } from "../types/recommendation";

export const useRecommendedResto = () => {
  return useQuery<RecommendedRestoResponse>({
    queryKey: ["recommended-resto"],
    queryFn: getRecommendedResto,
    // enabled: !!token, // ⛔ prevents early 401

    // caching strategy
    staleTime: 1000 * 60 * 5, // 5 minutes fresh
    gcTime: 1000 * 60 * 10, // 10 minutes in cache
  });
};

// import { useQuery } from "@tanstack/react-query";
// import { getRecommendedResto } from "../services/getRecommendedResto";
// import type { RecommendedRestoResponse } from "../types/recommendation";
// import { useAppSelector } from "@/store/hooks";

// export const useRecommendedResto = () => {
//   const token = useAppSelector((state) => state.auth.token);

//   return useQuery<RecommendedRestoResponse>({
//     queryKey: ["recommended-resto", token],
//     queryFn: getRecommendedResto,
//     enabled: !!token, // ✅ now matches interceptor
//     staleTime: 1000 * 60 * 5,
//     gcTime: 1000 * 60 * 10,
//   });
// };
