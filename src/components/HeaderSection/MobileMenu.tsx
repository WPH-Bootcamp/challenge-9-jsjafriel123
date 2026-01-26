import { useEffect } from "react";
import Overlay from "./Overlay";
import { Link, useLocation } from "react-router-dom";
import { useLogout } from "@/features/auth/useLogout";

type Props = {
  open: boolean;
  onClose: () => void;
};
const user = { name: "John Doe", avatar: "/assets/avatar-User.svg" };

export default function MobileMenu({ open, onClose }: Props) {
  const location = useLocation();
  const logout = useLogout();
  console.log(location.pathname);
  // Close menu on route change
  useEffect(() => {
    if (open) onClose();
  }, [location.pathname]); //close when navigate

  // Lock scroll when menu open
  // useEffect(() => {
  //   document.body.style.overflow = open ? "hidden" : "";
  //   return () => {
  //     document.body.style.overflow = "";
  //   };
  // }, [open]);

  return (
    <>
      <Overlay show={open} onClick={onClose} />

      <section
        className={`fixed flex flex-col top-0 right-41 h-[274px] w-[240px] p-5 gap-6 rounded-2xl bg-white  z-50 transform transition-transform duration-300 ${open ? "translate-y-0" : "-translate-y-full"}`}
      >
        <div className="flex flex-row h-[64px] w-full gap-2 items-center">
          <img src={user.avatar} alt={user.name} className="size-12" />
          <p className="text-[18px]/[32px]">{user.name}</p>
        </div>
        <div className="w-[201px] border border-[#E9EAB] "></div>

        <Link
          to="/userAddress"
          className="flex flex-row h-[30px] w-full gap-2 items-center"
        >
          <img
            src="/assets/icon-PinLoc.svg"
            alt="Location"
            className="size-6"
          />{" "}
          <span className="font-medium text-[16px]/[30px] text-[#0A0D12]">
            Delivery Address
          </span>
        </Link>
        <Link
          to="myOrder"
          className="flex flex-row h-[30px] w-full gap-2 items-center"
        >
          <img
            src="/assets/icon-MyOrder.svg"
            alt="My Order"
            className="size-6"
          />{" "}
          <span className="font-medium text-[16px]/[30px] text-[#0A0D12]">
            My Orders
          </span>
        </Link>
        <button
          type="button"
          onClick={logout}
          className="flex flex-row h-[30px] w-full gap-2 items-center cursor-pointer"
        >
          <img src="/assets/icon-Logout.svg" alt="Logout" className="size-6" />{" "}
          <span className="font-medium text-[16px]/[30px] text-[#0A0D12]">
            Logout
          </span>
        </button>
      </section>
    </>
  );
}
