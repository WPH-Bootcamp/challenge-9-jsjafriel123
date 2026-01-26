import type { Recommendation } from "@/types/recommendation";

interface CardRestaurantProps {
  resto: Recommendation;
}

const CardRestaurant = ({ resto }: CardRestaurantProps) => {
  return (
    <div className="flex items-center w-full h-[114px] rounded-2xl p-3 gap-2 lg:w-full lg:h-[152px] lg:gap-3 bg-white border shadow-[0_0_20px_#CBCACA40] hover:scale-105 cursor-pointer">
      <div className="relative size-[90px] lg:size-[120px] rounded-2xl">
        <img
          src={resto.logo}
          alt={resto.name}
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>
      <div className="flex flex-col w-[193px] lg:w-[228px] h-[90px] lg:h-[96px] justify-between gap-1">
        <p className="font-extrabold text-[16px]/[30px] lg:text-[18px]/[32px] ">
          {resto.name}
        </p>
        <p className="font-medium text-[14px]/[28px] lg:text-[16px]/[30px] ">
          ⭐ {resto.star}
        </p>
        <p className="font-normal text-[14px]/[28px] lg:text-[16px]/[30px] ">
          {resto.place} - {resto.distance} km
        </p>
      </div>
    </div>
  );
};

export default CardRestaurant;
