import React from "react";
import Image from "next/image";
import UtopiaPartnerImage from "@/public/images/utopia-brand.png";
import BottomLeftImage from "@/public/images/bottom-left-partners.svg";

const PartnersSection = () => {
  return (
    <div className="bg-black py-10 pb-0 sm:py-14 md:py-16">
      <div className="container relative mx-auto flex flex-col items-center justify-center gap-8">
        {/* content */}
        <div className="flex flex-col items-center justify-center gap-8 text-center md:gap-14">
          <h1 className="text-broom-400 text-stroke-1 sm:text-stroke-2 text-shadow-default font-bowlby-one text-2xl capitalize sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
            partners
          </h1>

          {/* team items */}
          <div className="flex items-center justify-center">
            <Image
              alt="partner image"
              src={UtopiaPartnerImage}
              className="w-full md:w-10/12 object-contain"
            />
          </div>
        </div>

        {/* image */}
        <Image
          alt="bottom left image"
          src={BottomLeftImage}
          className="ml-5 mr-auto w-24 object-contain md:w-28 lg:w-40"
        />
      </div>
    </div>
  );
};

export default PartnersSection;
