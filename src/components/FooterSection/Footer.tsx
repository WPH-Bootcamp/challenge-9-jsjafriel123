const Footer = () => {
  return (
    <section
      id="footer"
      className="flex justify-center w-screen h-[620px] lg:h-[490px] z-50 bg-black"
    >
      <div className="flex flex-col lg:flex-row lg:w-[1440px] h-full lg:justify-between py-10 px-4 gap-6 lg:gap-0 lg:py-20 lg:px-30 border-t border-[#D5D7DA]">
        <picture>
          <source
            srcSet="/assets/multimedia-container-lg.svg"
            media="(min-width: 1024px)"
          />
          <img
            src="/assets/multimedia-container-sm.svg"
            alt="Multimedia"
            className="flex w-[361px] h-[224px] lg:w-[380px] lg:h-[284px]"
          />
        </picture>
        {/* <!-- Text --> */}
        <div className="flex flex-row justify-between w-[361px] h-[292px] lg:w-[610px] lg:h-full">
          {/* Explore */}
          <div className="flex flex-col w-[172.5px] h-[292px] lg:w-[200px] lg:h-[330px] ">
            <h3 className="font-extrabold text-[#FDFDFD] text-[14px]/[28px] lg:text-[16px]/[30px] ">
              Explore
            </h3>
            <p className="font-normal text-[#FDFDFD] text-[14px]/[28px] lg:text-[16px]/[30px]">
              All Food
            </p>
            <p className="font-normal text-[#FDFDFD] text-[14px]/[28px] lg:text-[16px]/[30px]">
              Nearby
            </p>
            <p className="font-normal text-[#FDFDFD] text-[14px]/[28px] lg:text-[16px]/[30px]">
              Discount
            </p>
            <p className="font-normal text-[#FDFDFD] text-[14px]/[28px] lg:text-[16px]/[30px]">
              Best Seller
            </p>
            <p className="font-normal text-[#FDFDFD] text-[14px]/[28px] lg:text-[16px]/[30px]">
              Delivery
            </p>
            <p className="font-normal text-[#FDFDFD] text-[14px]/[28px] lg:text-[16px]/[30px]">
              Lunch
            </p>
          </div>
          {/* Help */}
          <div className="flex flex-col w-[172.5px] h-[292px] lg:w-[200px] lg:h-[330px] ">
            <h3 className="font-extrabold text-[#FDFDFD] text-[14px]/[28px] lg:text-[16px]/[30px] ">
              Help
            </h3>
            <p className="font-normal text-[#FDFDFD] text-[14px]/[28px] lg:text-[16px]/[30px]">
              How to Order
            </p>
            <p className="font-normal text-[#FDFDFD] text-[14px]/[28px] lg:text-[16px]/[30px]">
              Payment Methods
            </p>
            <p className="font-normal text-[#FDFDFD] text-[14px]/[28px] lg:text-[16px]/[30px]">
              Track My Order
            </p>
            <p className="font-normal text-[#FDFDFD] text-[14px]/[28px] lg:text-[16px]/[30px]">
              FAQ
            </p>
            <p className="font-normal text-[#FDFDFD] text-[14px]/[28px] lg:text-[16px]/[30px]">
              Contact Us
            </p>
          </div>
        </div>
      </div>
      <div></div>
    </section>
  );
};

export default Footer;
