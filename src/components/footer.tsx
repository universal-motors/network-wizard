import React from "react";
import Image from "next/image";
import wizardImage from "@/assets/images/wizardImage.png";
import home from "@/assets/images/homeicon.png";
import tv from "@/assets/images/tvicon.png";
import voice from "@/assets/images/voiceicon.png";
import security from "@/assets/images/securityicon.png";
export default function Footer() {
  return (
    <div className="bg-orange-500">
      <div className="flex flex-col lg:flex-row justify-center items-center 2xl:justify-between ml-2 mr-2 pt-6 pl-5 pr-5">
        <div className="w-[90%] sm:w-[565px]  text-[35px] font-bold text-white">
          Shop for internet, TV, Voice, and Home Security <br />
          <span className="text-[22px] font-semibold">
            {" "}
            What are you shopping for?
          </span>{" "}
          <br />
          <span className="text-[13px] font-bold bg-black px-4 py-2 rounded-2xl cursor-pointer">
            Call Us +1 (416) 802-2906
          </span>
        </div>
        <div className="flex flex-wrap justify-center mt-6 lg:mt-0 gap-7">
          <div className="w-[221px] h-[222px] bg-white flex flex-col justify-center items-center rounded-lg">
            <Image src={home} alt="" />
            <div className="text-black text-[18px] font-bold">Internet</div>
          </div>
          <div className="w-[221px] h-[222px] bg-white flex flex-col justify-center items-center rounded-lg">
            <Image src={tv} alt="" />
            <div className="text-black text-[18px] font-bold">TV</div>
          </div>
          <div className="w-[221px] h-[222px] bg-white flex flex-col justify-center items-center rounded-lg">
            <Image src={voice} alt="" />
            <div className="text-black text-[18px] font-bold">Voice</div>
          </div>
          <div className="w-[221px] h-[222px] bg-white flex flex-col justify-center items-center rounded-lg">
            <Image src={security} alt="" />
            <div className="text-black text-[18px] font-bold">
              Home Security
            </div>
          </div>
        </div>
      </div>
      <div className="text-white mt-14 ml-7">
        <div className="text-[22px] font-bold">Disclaimer:</div>
        <div className="mt-5 mr-10">
          All Rights Reserved. Pricing and promotions may vary by region, please
          call to confirm availability and set up service. Network Wizard is a
          website intended for research, review and comparison, and as such,
          falls under “Fair Use”. Network Wizard does not offer internet, TV, or
          home phone service. All trademarks, logos, etc. remain the property of
          their respective owners and are used by Network Wizard only to
          describe products and services offered by each respective trademark
          holder. The use of any third party trademarks on this site in no way
          indicates any relationship between Network Wizard and the holders of
          said trademarks, nor any endorsements of Network Wizard by the holders
          of said trademarks.
        </div>
      </div>
      <div className="mt-6 flex justify-between items-center pl-2 sm:pl-5 pr-4 sm:pr-9">
        <div>
          <Image
            className="w-[150px] sm:w-[220px] mr-1"
            src={wizardImage}
            alt=""
          />
        </div>
        <div className="text-[#DBD4CC] text-[9px] sm:text-[14px] font-bold flex gap-4 sm:gap-9">
          <div className="cursor-pointer">Home</div>
          <div className="cursor-pointer">About Us</div>
          <div className="cursor-pointer">Contact Us</div>
        </div>
      </div>
      <hr className="ml-5 mr-9" />
      <div className="text-white text-center text-[10px] sm:text-[14px] pt-3">
        <span className="font-bold">Network Wizard</span> Created By{" "}
        <span className="text-red-700 font-bold">Black Crescent Int.</span>{" "}
        Copyright 2024-25
      </div>
    </div>
  );
}
