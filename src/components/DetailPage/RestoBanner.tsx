export const RestoBanner = () => {
  return (
    <section className="flex flex-row items-center justify-between w-[361px] lg:w-[1200px] h-[90px] lg:h-[120px]">
      <div className="flex flex-row items-center gap-2 w-[300px] lg:w-[1040px] h-[90px] lg:h-[120px]">
        <img
          src="\assets\logo-BurgerKing.svg"
          alt="Burger King"
          className="flex size-[90px] lg:size-[120px]"
        />
        <div className="flex flex-col w-[220px] lg:w-[908px] h-[90px] lg:h-[114px] justify-between gap-1">
          <p className="flex w-full font-extrabold text-[16px]/[30px] lg:text-[18px]/[32px] ">
            Burger King
          </p>
          <p className="flex w-full font-medium text-[14px]/[28px] lg:text-[16px]/[30px] ">
            ⭐ 4.9
          </p>
          <p className="flex w-full font-normal text-[14px]/[28px] lg:text-[16px]/[30px] ">
            Jakarta Selatan - 2.4 km
          </p>
        </div>
      </div>

      <div className="flex justify-center items-center lg-p-1 lg:gap-2 size-[44px] lg:w-[140px] lg:h-[44px] border border-[#D5D7DA] rounded-full">
        <img src="/assets/icon-Share0.svg" alt="Share" className="flex" />
        <span className="hidden lg:flex">Share</span>
      </div>
    </section>
  );
};
