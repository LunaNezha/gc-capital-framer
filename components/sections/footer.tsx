import Link from "next/link";
import React from "react";

const Footer = () => {
  const generalLinks = [
    { name: "Home", url: "/" },
    { name: "About Us", url: "/about" },
    { name: "Team", url: "/teams" },
  ];

  const resoursesLinks = [
    { name: "Contact Us", url: "/contact-us" },
    { name: "Privacy Policy", url: "/" },
  ];

  return (
    <div className="bg-toledo-950 px-6 py-10 sm:py-12 md:py-14">
      <div className="container relative mx-auto flex w-11/12 flex-col gap-16 sm:w-10/12">
        {/* sections */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4 md:gap-10">
          {/* introcustion */}
          <div className="grid md:col-span-2">
            <p className="font-azeret-mono text-sm font-light text-white md:text-base md:leading-8">
              Golden Carrot Capital (GC.Capital) is a premier investment firm
              dedicated empowering growth and innovation across various
              industries.
            </p>
          </div>

          {/* general links */}
          <div className="flex flex-col gap-2 md:gap-4">
            <h4 className="font-azeret-mono text-broom-400 text-base font-bold capitalize">
              General
            </h4>

            <div className="flex flex-col gap-2">
              {generalLinks.map((item, index) => (
                <Link
                  key={index}
                  href={item.name}
                  className="hover:text-broom-400 font-azeret-mono text-sm capitalize text-white duration-200 ease-in md:text-base"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* resources links */}
          <div className="flex flex-col gap-2 md:gap-4">
            <h4 className="font-azeret-mono text-broom-400 text-base font-bold capitalize">
              Resourses
            </h4>

            <div className="flex flex-col gap-2">
              {resoursesLinks.map((item, index) => (
                <Link
                  key={index}
                  href={item.name}
                  className="hover:text-broom-400 font-azeret-mono text-sm capitalize text-white duration-200 ease-in md:text-base"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* copyright */}
        <div className="font-azeret-mono flex flex-col items-center justify-center text-center text-xs md:text-sm font-light text-white">
          <span>GC CAPITAL © 2024</span>
          <span>All Rights Reserved</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
