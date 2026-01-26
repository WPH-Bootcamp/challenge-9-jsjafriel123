export const SlidingHero = () => {
  return (
    <section className="flex flex-col mt-30 items-center overflow-hidden w-[361px] lg:w-[1200px] h-[281px] lg:h-[470px]">
      <div className="grid w-full h-full grid-cols-1 lg:grid-cols-4 lg:grid-rows-3 lg:gap-5">
        <img
          src="/assets/hero-Burger1.svg"
          alt="Hero"
          className="lg:col-start-1 lg:col-span-2 lg:row-start-1 lg:row-span-3 w-full h-[261px] lg:h-full object-cover object-center rounded-2xl"
        />
        <img
          src="/assets/hero-Burger.svg"
          alt="Hero"
          className="lg:col-start-3 lg:col-span-2 lg:row-start-1 lg:row-span-2 w-full h-[261px] lg:h-full object-cover object-center rounded-2xl"
        />
        <img
          src="/assets/hero-Burger2.svg"
          alt="Hero"
          className="lg:col-start-3 lg:row-start-3 w-full h-[261px] lg:h-full object-cover object-center rounded-2xl"
        />
        <img
          src="/assets/hero-Burger3.svg"
          alt="Hero"
          className="lg:col-start-4 lg:row-start-3 w-full h-[261px] lg:h-full object-cover object-center rounded-2xl"
        />
      </div>

      <div className="gap-1 lg:hidden">
        <button className="size-2 rounded-full bg-[#C12116]"></button>
        <button className="size-2 rounded-full bg-[#D9D9D9]"></button>
        <button className="size-2 rounded-full bg-[#D9D9D9]"></button>
      </div>
    </section>
  );
};
