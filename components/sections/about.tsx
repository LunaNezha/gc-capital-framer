import Image from "next/image";
import React from "react";
import TopLeftImage from "@/public/images/top-left-about.svg";
import BottomRightImage from "@/public/images/bottom-right-about.svg";

const AboutSection = () => {
  return (
    <div className="bg-flush-mahogany-600 py-10 sm:py-12 md:py-14">
      <div className="container relative mx-auto flex flex-col items-center justify-center gap-8">
        {/* top/left image */}
        <Image
          alt="top left image about"
          src={TopLeftImage}
          className="ml-5 mr-auto w-28 object-contain md:w-32 lg:w-52"
        />

        {/* content */}
        <div className="flex w-11/12 flex-col items-center justify-center gap-2 text-center sm:w-9/12 md:w-8/12 md:gap-6 lg:w-7/12 xl:w-6/12">
          <h1 className="text-broom-400 text-stroke-2 md:text-stroke-4 text-shadow-default font-bowlby-one text-3xl uppercase sm:text-4xl md:text-5xl lg:text-6xl xl:text-8xl">
            About us
          </h1>

          <p className="font-azeret-mono flex text-sm leading-6 text-white md:text-base lg:leading-8">
            Golden Carrot Capital (GC.Capital) is a premier investment firm
            dedicated empowering growth and innovation across various
            industries. Founded on the principles of excellence, intergrity, and
            strategic foresight, we specialize in providing capital solutions
            and strategic guidance to buinesses poised for expansion and
            success.
          </p>
        </div>

        {/* bottom/right image */}
        <Image
          alt="bottom right image about"
          src={BottomRightImage}
          className="ml-auto mr-5 w-28 object-contain md:w-32 lg:w-52"
        />
      </div>
    </div>
  );
};

export default AboutSection;
