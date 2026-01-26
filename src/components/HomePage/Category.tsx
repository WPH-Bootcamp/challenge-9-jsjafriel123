import CardCategory from "../ui/CardCategory";

export const Category = () => {
  return (
    <section className="w-[393px] h-[332px] grid grid-cols-3 gap-5 px-4 py-6 lg:flex lg:justify-between lg:p-0 lg:my-8 lg:w-[1200px] lg:h-[138px] object-center">
      {/* Card Category */}
      <CardCategory
        logo="/assets/logo-AllFood.svg"
        description="All Restaurant"
      />
      <CardCategory logo="/assets/logo-Location.svg" description="Nearby" />
      <CardCategory logo="/assets/logo-Discount.svg" description="Discount" />
      <CardCategory
        logo="/assets/logo-BestSeller.svg"
        description="Best Seller"
      />
      <CardCategory logo="/assets/logo-Delivery.svg" description="Delivery" />
      <CardCategory logo="/assets/logo-Lunch.svg" description="Lunch" />
    </section>
  );
};
