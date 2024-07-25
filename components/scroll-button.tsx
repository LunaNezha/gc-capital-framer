"use client";

import React, { useEffect, useState } from "react";
import { cn } from "@/utils/classnames";
import { Button } from "./buttons";

const ScrollButton = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  const toggleVisibility = () => {
    window.scrollY > 500 ? setIsScrolled(true) : setIsScrolled(false);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <Button
      type="button"
      intent={"filled-yellow"}
      padding={"square-md"}
      textSize={"md"}
      round={"full"}
      title="Scroll to Top"
      onClick={scrollToTop}
      className={cn(
        "fixed bottom-4 left-auto right-5 top-auto opacity-0 transition-opacity duration-200",
        isScrolled ? "opacity-100" : "opacity-0",
      )}
    >
      <i className="fi fi-rr-arrow-small-up"></i>
    </Button>
  );
};

export default ScrollButton;
