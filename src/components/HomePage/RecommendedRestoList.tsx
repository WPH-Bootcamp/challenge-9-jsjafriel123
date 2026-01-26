// src/pages/RecommendedRestoPage.tsx
import { useRecommendedResto } from "../../hooks/useRecommendedResto";
// import { useRestaurants } from "@/hooks/useRestaurants";
import { Button } from "../ui/button";
import CardRestaurant from "../ui/CardRestaurant";
import { useState } from "react";

export const RecommendedRestoList = () => {
  // const [search, setSearch] = useState("");
  // const [category, setCategory] = useState<string | null>(null);
  const [page, setPage] = useState(1);
  const { data, isLoading, isFetching } = useRecommendedResto(page);

  const restos = data?.data.recommendations ?? [];
  console.log(restos);
  const hasNextPage = restos.length < 12 ? false : true;

  if (isLoading) {
    return (
      <section className="flex flex-col items-center px-4 pt-6 pb-12 lg:p-0 w-[393px] lg:w-[1200px] h-[814px] lg:h-[822px] gap-4 lg:gap-8 mb-10 lg:mb-20">
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <section className="flex flex-col items-center px-4 pt-6 pb-12 lg:p-0 w-[393px] lg:w-[1200px] h-[814px] lg:h-[822px] gap-4 lg:gap-8 mb-10 lg:mb-20">
      <div className="flex justify-between w-full h-[36px] lg:h-[42px] gap-2 ">
        <h2 className="font-extrabold text-[#0A0D12] text-[24px]/[36px] lg:text-[32px]/[42px] ">
          Recommended
        </h2>
        <button className="text-[#C12116] font-extrabold text-[16px]/[30px] lg:text-[18px]/[32px] cursor-pointer ">
          See All
        </button>
      </div>

      <div className="p-6 lg:p-4 grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-5 w-full h-[638px] lg:h-[668px] content-start overflow-x-hidden overflow-y-auto">
        {restos.map((resto) => (
          <CardRestaurant
            key={resto.id}
            id={resto.id}
            name={resto.name}
            star={resto.star}
            place={resto.place}
            logo={resto.logo}
            distance={resto.distance}
          />
        ))}
      </div>
      {isFetching && <p className="text-sm opacity-60">Loading more...</p>}
      <Button
        onClick={() => setPage((p) => p + 1)}
        disabled={!hasNextPage}
        variant={"outline"}
        size={"lg"}
        className="rounded-full"
      >
        Show More
      </Button>
    </section>
  );
};
