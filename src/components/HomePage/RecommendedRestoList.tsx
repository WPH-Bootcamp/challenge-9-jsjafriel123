// src/pages/RecommendedRestoPage.tsx
import { useRecommendedResto } from "../../hooks/useRecommendedResto";
import { Button } from "../ui/button";
import CardRestaurant from "../ui/CardRestaurant";

export const RecommendedRestoList = () => {
  const { data, isLoading, isError } = useRecommendedResto();

  if (isLoading) {
    return <div className="p-6">Loading recommendations...</div>;
  }

  if (isError) {
    return <div className="p-6 text-red-500">Failed to load restaurants</div>;
  }

  const restos = data?.data.recommendations ?? [];
  console.log(restos);
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

      <div className="p-6 lg:p-0 grid grid-cols-1 grid-rows-5 lg:grid-cols-3 lg:grid-rows-4 gap-4 lg:gap-5 w-full h-[638px] lg:h-[668px] overflow-y-auto">
        {restos.slice(0, 5).map((resto) => (
          <CardRestaurant key={resto.id} resto={resto} />
        ))}
      </div>
      <Button variant={"outline"} size={"lg"} className="rounded-full">
        Show More
      </Button>
    </section>
  );
};
