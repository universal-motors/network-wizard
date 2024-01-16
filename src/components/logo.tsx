import React from "react";
import Image from "next/image";
import optimum from "@/assets/images/sweperImg.png";
export default function Logo() {
  return (
    <div className="flex justify-evenly flex-wrap ">
      <Image src={optimum} alt="" />
      <Image src={optimum} alt="" />
      <Image src={optimum} alt="" />
      <Image src={optimum} alt="" />
      <Image src={optimum} alt="" />
      <Image src={optimum} alt="" />
    </div>
  );
}
