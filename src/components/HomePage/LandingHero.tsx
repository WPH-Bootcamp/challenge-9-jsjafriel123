import { Input } from "../ui/input";

export const LandingHero = () => {
  return (
    <section className="flex relative justify-center items-center overflow-hidden w-full h-[648px] lg:h-[827px] bg-black">
      <img
        src="/assets/hero-Burger.svg"
        alt="Hero-Burger"
        className="flex h-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-radial from-black/90 to-transparent pointer-events-none"></div>
      <div className="absolute flex flex-col items-center gap-6 w-[349px] h-[228px] lg:w-[712px] lg:h-[200px] lg:gap-10">
        <h1 className="text-center text-white font-extrabold text-[36px]/[44px] lg:text-[36px]/[44px]">
          Explore Culinary Experiences
        </h1>
        <p className="font-bold text-center text-white text-[18px]/[32px] lg:text-[18px]/[32px] ">
          Search and refine your choice to discover the perfect restaurant.
        </p>
        <div className="relative flex justify-center items-center w-full">
          <Input
            type="search"
            placeholder="Search restaurants, food and drink"
            className="bg-white rounded-full pl-10 w-full h-12 lg:w-[604px] lg:h-14 lg:pl-12"
          />
          <img
            src="/assets/icon-Search.svg"
            alt="Search"
            className="absolute left-4 lg:left-18 cursor-pointer"
          />
        </div>
      </div>
    </section>
  );
};
