interface CategoryCard {
  logo: string;
  description: string;
}

const CardCategory = (category: CategoryCard) => {
  return (
    <div className="flex flex-col w-[106px] h-[132px] lg:w-[161px] lg:h-[138px] lg:gap-2.5 ">
      <div className="flex justify-center items-center w-full h-[100px] rounded-xl lg:p-2 lg:gap-2 border shadow-[0_0_20px_#CBCACA40]">
        <img
          src={category.logo}
          alt={category.description}
          className="size-[48px] lg:size-[65px] "
        />
      </div>
      <p className="text-center font-bold text-[14px]/[28px] lg:text-[18px]/[32px] ">
        {category.description}
      </p>
    </div>
  );
};

export default CardCategory;
