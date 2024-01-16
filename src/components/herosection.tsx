import React from "react";
import Image from "next/image";
import background from "@/assets/images/bacgroundImage.png";
import gif from "@/assets/images/wizard-gif.gif";
export default function Herosection() {
  return (
    <div className="flex flex-col text-white w-[100%] ">
      <div className="relative w-full flex flex-col h-[1010px] sm:h-[990px] lg:h-[750px] items-center">
        <Image
          src={background}
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            objectFit: "cover",
          }}
          alt="background"
        />
        <div className="absolute ">
          <div className="flex flex-col items-center mt-5">
            <div className="text-[24px] xl:text-[36px] font-bold text-center w-[90%] sm:w-[600px] lg:w-[900px] xl:w-[1173px]">
              Unlock a{" "}
              <span className="text-orange-500">World of Options!</span> With
              Multiple Providers at{" "}
              <span className="text-orange-500">Our Fingertips, </span>
              We'll Find the{" "}
              <span className="text-orange-500">Perfect Fit</span> for You.
            </div>
            <hr className="w-[90%] sm:w-[550px]  mt-10" />
          </div>
          <div className="flex flex-col lg:flex-row items-center justify-evenly mt-10">
            <div>
              <Image
                alt=""
                style={{ objectFit: "cover" }}
                className="w-[519px]"
                src={gif}
              />
            </div>
            <div className=" w-[90%] sm:w-[570px] flex flex-col gap-5">
              <div className="text-[24px] lg:text-[33px] font-bold">
                Let the Wizard find best Internet, TV & Home Security plans for
                you ❤️
              </div>
              <div className="font-bold">Name</div>
              <div>
                <input type="text" className="w-[95%] h-10 text-black pl-4" />
              </div>
              <div className="flex gap-3">
                <div>
                  <div>Email</div>
                  <div>
                    <input
                      type="text"
                      className="w-[85%] h-10  text-black pl-4"
                    />
                  </div>
                </div>
                <div>
                  <div>Phone</div>
                  <div>
                    <input
                      type="text"
                      className="w-[85%] h-10 text-black pl-4"
                    />
                  </div>
                </div>
                <div>
                  <div>ZIP Code</div>
                  <div>
                    <input
                      type="text"
                      className="w-[85%] h-10 text-black pl-4"
                    />
                  </div>
                </div>
              </div>
              <div>
                <button className="bg-orange-500 px-5 py-2 rounded-md hover:bg-white text-[white] hover:text-black">
                  submit
                </button>
              </div>
            </div>
          </div>
          <div className="text-center text-[30px] lg:text-[40px] font-bold">
            Network Wizard is the Authorized Dealer
          </div>
        </div>
      </div>
    </div>
  );
}
