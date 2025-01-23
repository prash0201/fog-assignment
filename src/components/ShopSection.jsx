import React from "react";
import image from "../assets/logos/Rectangle 1.png";
import arrow from "../assets/logos/dashicons_arrow-down-alt2.png";
const ShopSection = () => {
  return (
    <div className="flex relative w-[100%] h-[19.65rem]">
      <div>
        <img src={image} alt="" className="w-[100%] h-[100%]" />
      </div>

      <div className="flex absolute flex-col w-full translate-x-[45%] translate-y-[130%]  ">
        <div>
          <div>
            <p className="lg:text-[3rem] md:text-[1.5rem] ">Shop</p>
          </div>
          <div className="flex   w-full  ">
            <p className="text-[1rem] ">Home</p>
            <img src={arrow} alt="" className="w-[0.75rem] h-[1.25rem] mt-1" />
            <p className="text-[1rem]">Shop</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopSection;
