"use client";
import Image from "next/image";
// import LogoLight from "@/assets/images/logo-light.png";
import { useState } from "react";
import logo from "@/assets/images/wizardLogo.png";
export default function Header() {
  const [isOpen, setMenu] = useState(true);
  const toggleMenu = () => {
    setMenu(!isOpen);
  };
  return (
    <>
      <div className="flex items-center justify-between pl-4 sm:pl-10 pr-4 sm:pr-10  bg-black text-white ">
        <div className="flex items-center gap-5 text-[14px] xl:text-[16px] ">
          <div>
            <Image
              alt="image"
              className="w-[100px] sm:w-[150px] xl:w-[198px]"
              src={logo}
            />
          </div>
          <div className=" !hidden lg:!flex items-center gap-5 ">
            <div className="border h-5 border-[#404040]"></div>
            <div className="text-[#787878] font-bold">
              Step into Secure Connectivity with Network Wizard!
            </div>
          </div>
        </div>
        <div className="flex items-center gap-5 font-bold text-[12px] xl:text-[14px]">
          <div className="!hidden lg:!flex gap-5">
            <div className="cursor-pointer">Home</div>
            <div className="cursor-pointer">About Us</div>
            <div className="cursor-pointer">Contact Us</div>
            <div className="border h-5 border-[#404040]"></div>
          </div>

          <div className="bg-[#1B8FDE] hover:bg-[#71ACD4] px-3 py-2 text-[10px] sm:text-[14px] rounded-2xl cursor-pointer">
            Call Us: +1(416)802-2906
          </div>
        </div>
      </div>
    </>
  );
}
