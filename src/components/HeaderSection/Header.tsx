// import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import MobileMenu from "./MobileMenu";

const Header = () => {
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
        className={`fixed inset-x-0 top-0 z-30 flex w-full h-13 items-center justify-between px-4 lg:h-18 lg:px-60 lg:py-10
              ${
                isScrolled
                  ? "bg-white backdrop-blur-md shadow-md py-3" // Scrolled state
                  : "bg-black/0" //Top
              } transition-all duration-300    
        `}
      >
        {/* Logo */}
        <div className="flex w-auto lg:w-37 lg:gap-[15px]">
          <img
            src={` ${
              isScrolled ? "/assets/logo-red.svg" : "/assets/logo-white.svg"
            } `}
            alt="Logo"
            className="size-10 lg:size-10.5"
          />
          <p
            className={`hidden lg:flex lg:font-extrabold lg:text-[32px]/[42px] ${
              isScrolled ? "lg-text-black" : "lg:text-white"
            }`}
          >
            Foody
          </p>
        </div>
        <div className="flex items-center justify-end w-21 h-10 gap-4 lg:w-80 lg:h-12 lg:gap-6">
          <img
            src={` ${
              isScrolled ? "/assets/icon-Bag-Black.svg" : "/assets/icon-Bag.svg"
            } `}
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
          <p
            className={`hidden lg:flex lg:text-[18px]/[32px] ${isScrolled ? "lg:text-black" : "lg:text-white"}`}
          >
            {user.name}
          </p>
        </div>
      </div>
      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </header>
  );
};

export default Header;
