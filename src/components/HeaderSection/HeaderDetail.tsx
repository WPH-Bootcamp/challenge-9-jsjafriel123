// import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import MobileMenu from "./MobileMenu";

const HeaderDetail = () => {
  // const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Toggle state based on scroll position
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const user = { name: "John Doe", avatar: "/assets/avatar-User.svg" };

  return (
    <header className="relative">
      {/* Top Bar */}
      <div
        className="fixed inset-x-0 top-0 z-30 flex w-full h-13 items-center justify-between px-4 lg:h-18 lg:px-60 lg:py-10 bg-white shadow-md py-3   
        "
      >
        {/* Logo */}
        <div className="flex w-auto lg:w-37 lg:gap-[15px]">
          <img
            src="/assets/logo-red.svg"
            alt="Logo"
            className="size-10 lg:size-10.5"
          />
          <p className="hidden lg:flex lg:font-extrabold lg:text-[32px]/[42px] lg:text-black">
            Foody
          </p>
        </div>
        <div className="flex items-center justify-end w-21 h-10 gap-4 lg:w-80 lg:h-12 lg:gap-6">
          <img
            src="/assets/icon-Bag-Black.svg"
            alt="Basket"
            className="size-7 lg:size-8"
          />
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="group relative overflow-visible"
          >
            <img
              src={user.avatar}
              alt="User"
              className="size-10 lg:size-12 object-cover transition-transform group-hover:scale-110"
            />
          </button>
          <p className="hidden lg:flex lg:text-[18px]/[32px] lg:text-black">
            {user.name}
          </p>
        </div>
      </div>
      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </header>
  );
};

export default HeaderDetail;
