import Image from "next/image";
import React from "react";
import HeaderImage from "@/public/images/header.svg";

const Header = () => {
  return (
    <div className="flex h-dvh sm:h-auto">
      <Image alt="" src={HeaderImage} className="h-full w-full object-cover" />
    </div>
  );
};

export default Header;
