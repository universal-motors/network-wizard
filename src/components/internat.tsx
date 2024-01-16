import React from "react";
import Image from "next/image";
import background from "@/assets/images/bacgroundImage.png";
import home from "@/assets/images/homeicon.png";
import tv from "@/assets/images/tvicon.png";
import voice from "@/assets/images/voiceicon.png";
import security from "@/assets/images/securityicon.png";
import wifigif from "@/assets/images/wifi.gif";
import simpli from "@/assets/images/simpli.png";
import assets from "@/assets/images/assets.png";
import avatar from "@/assets/images/avatar.png";
import StarIcon from "@mui/icons-material/Star";
export default function Internat() {
  return (
    <div>
      <div className="relative text-[white] w-full h-[700vh] md:h-[380vh] lg:h-[2200px] 2xl:h-[1800px]">
        <Image
          src={background}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            position: "absolute",
          }}
          alt=""
        />
        <div className="absolute w-[100%] flex flex-col items-center justify-center">
          <div className="flex flex-col lg:flex-row justify-center items-center 2xl:justify-evenly ml-2 mr-2 mt-20">
            <div className="w-[90%] sm:w-[565px]  text-[35px] font-bold ">
              Shop for internet, TV, Voice, and Home Security <br />
              <span className="text-[22px] font-semibold">
                {" "}
                What are you shopping for?
              </span>
            </div>
            <div className="flex flex-wrap justify-center gap-7">
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
          <div className="w-[100%] flex flex-col md:flex-row items-center justify-center sm:justify-evenly mt-6 pl-3 pr-3">
            <div className="w-[90%] sm:w-[611px]">
              <div>
                <Image style={{ width: "102px" }} src={wifigif} alt="" />
              </div>
              <div className="text-orange-500 text-[18px] font-semibold">
                Check your Internet Speed
              </div>
              <div className="text-[20px] sm:text-[36px] font-bold">
                Find the Best America's Internet
              </div>
              <div className="w-[90%] sm:w-[500px] text-[16px] mt-7">
                Many are looking for internet service in their area. Once the
                internet connection is established, it is interesting to see if
                the speed your were promised by providers such as Comcast or
                Verizon is accurate. Our internet speed test allows you to do
                just that. Press "Start Test" below to get started testing your
                connection.
              </div>
              <div className="flex items-center gap-5 mt-7">
                <div className="bg-orange-500 px-3 py-2 rounded-lg font-bold cursor-pointer">
                  Contact me
                </div>
                <div className="font-bold">Follow us:</div>
              </div>
            </div>
            <div className="w-[90%] sm:w-[503px] flex flex-col justify-center items-center mt-5 md:mt-0">
              <div className="text-[26px] font-bold">Must be Know!</div>
              <div>
                <div className="text-[16px] font-bold mt-7">
                  How do Speed Tests Work?
                </div>
                <hr className="mt-5" />
              </div>
              <div>
                <div className="text-[16px] font-bold  mt-7">
                  What do My Test Results Mean?
                </div>
                <hr className="mt-5" />
              </div>
              <div className="text-[16px] font-bold  mt-7">
                How to Increase internet speed?
              </div>
            </div>
          </div>

          <div className="flex flex-col-reverse lg:flex-row items-center gap-8 mt-10">
            <div className="w-[90%] lg:w-[971px] mt-7 lg:mt-0">
              <div>
                <div className="text-[18px] text-orange-500 font-bold">
                  Network Wizard, Your Guardian 24/7.
                </div>
                <div className="text-[36px] font-bold">
                  Get the Best Home Security
                </div>
                <div>
                  Discover TV, internet, business services, and more at Network
                  Wizard. Easily find the best home alarm security in four
                  steps. Choose from Vivint, Ring, ADT, SimpliSafe, and more.
                  Call +1 (416) 802-2907 for expert advice. Your seamless,
                  secure connection is a click away!
                </div>
                <div className="flex flex-wrap justify-center  gap-8 mt-5">
                  <div>
                    <Image src={simpli} alt="" />
                  </div>
                  <div>
                    <Image src={simpli} alt="" />
                  </div>
                  <div>
                    <Image src={simpli} alt="" />
                  </div>
                  <div>
                    <Image src={simpli} alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div>
              <Image src={assets} style={{ width: "402px" }} alt="" />
            </div>
          </div>
          <div className="text-[36px] font-bold text-center mt-10">
            Customer Feedback
          </div>
          <div className="text-[#C2BDBB]">Network Wizard Listens to You!</div>
          <div className="flex flex-wrap justify-center gap-5">
            <div className="w-[90%] sm:w-[455px] text-[16px] flex flex-col justify-center items-center mt-10">
              <div className="mt-4">
                <Image src={avatar} alt="" />
              </div>
              <div className="flex mt-4">
                <div className="text-orange-500">
                  <StarIcon />
                </div>
                <div className="text-orange-500">
                  <StarIcon />
                </div>
                <div className="text-orange-500">
                  <StarIcon />
                </div>
                <div className="text-orange-500">
                  <StarIcon />
                </div>
                <div className="text-orange-500">
                  <StarIcon />
                </div>
              </div>
              <div className="text-[#727274] font-bold mt-4">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et,
                libero. Consequuntur non cum aspernatur repudiandae ipsum veniam
                ipsa vero tenetur nisi? Voluptas vitae velit harum distinctio
                impedit explicabo? Eum, fugit.
              </div>
              <div className="font-bold mt-4">
                kingsley-chandler
                <span className="text-[#727274]">-Environmental Economics</span>
              </div>
            </div>
            <div className="w-[90%] sm:w-[455px] text-[16px] flex flex-col justify-center items-center mt-10">
              <div className="mt-4">
                <Image src={avatar} alt="" />
              </div>
              <div className="flex mt-4">
                <div className="text-orange-500">
                  <StarIcon />
                </div>
                <div className="text-orange-500">
                  <StarIcon />
                </div>
                <div className="text-orange-500">
                  <StarIcon />
                </div>
                <div className="text-orange-500">
                  <StarIcon />
                </div>
                <div className="text-orange-500">
                  <StarIcon />
                </div>
              </div>
              <div className="text-[#727274] font-bold mt-4">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et,
                libero. Consequuntur non cum aspernatur repudiandae ipsum veniam
                ipsa vero tenetur nisi? Voluptas vitae velit harum distinctio
                impedit explicabo? Eum, fugit.
              </div>
              <div className="font-bold mt-4">
                kingsley-chandler
                <span className="text-[#727274]">-Environmental Economics</span>
              </div>
            </div>
            <div className="w-[90%] sm:w-[455px] text-[16px] flex flex-col justify-center items-center mt-10">
              <div className="mt-4">
                <Image src={avatar} alt="" />
              </div>
              <div className="flex mt-4">
                <div className="text-orange-500">
                  <StarIcon />
                </div>
                <div className="text-orange-500">
                  <StarIcon />
                </div>
                <div className="text-orange-500">
                  <StarIcon />
                </div>
                <div className="text-orange-500">
                  <StarIcon />
                </div>
                <div className="text-orange-500">
                  <StarIcon />
                </div>
              </div>
              <div className="text-[#727274] font-bold mt-4">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et,
                libero. Consequuntur non cum aspernatur repudiandae ipsum veniam
                ipsa vero tenetur nisi? Voluptas vitae velit harum distinctio
                impedit explicabo? Eum, fugit.
              </div>
              <div className="font-bold mt-4">
                kingsley-chandler
                <span className="text-[#727274]">-Environmental Economics</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
