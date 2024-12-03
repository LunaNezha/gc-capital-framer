"use client";

import Link from "next/link";
import { MAIN_ROUTES } from "@/routes/main-routes";
import { MenusType } from "@/@types/menus.type";
import { cn } from "@/utils/classnames";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
import Logo from "@/public/images/logo.png";

type Props = {
  isSidebarOpen: boolean;
  setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Navbar = (props: Props) => {
  const { isSidebarOpen, setIsSidebarOpen } = props;
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const pathname = usePathname();

  const menuItems: MenusType[] = [
    { name: "Home", href: MAIN_ROUTES.HOME },
    { name: "About", href: MAIN_ROUTES.ABOUT },
    { name: "Teams", href: MAIN_ROUTES.TEAMS },
    { name: "Contact Us", href: MAIN_ROUTES.CONTACT_US },
  ];

  const toggleVisibility = () => {
    window.scrollY > 10 ? setIsScrolled(true) : setIsScrolled(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div
      className={cn(
        isScrolled &&
          "border border-white/10 bg-black/60 py-4 backdrop-blur-[6px] md:py-5",
        !isScrolled && "border-0 border-transparent bg-transparent",
        "fixed inset-x-0 top-0 z-40 flex items-center justify-between px-6 py-4 transition-all duration-300 ease-in-out md:justify-center md:px-10 md:py-6",
      )}
    >
      {/* left side nav */}
      <div className="flex items-center justify-start gap-x-3 text-white md:hidden lg:gap-x-4">
        <Image src={Logo} alt="logo image" className="size-10 sm:size-12" />

        <div className="flex-col font-azeret-mono sm:flex">
          <h3 className="text-sm font-bold sm:text-base">GC Capital</h3>
          <h6 className="text-xs opacity-70">Golden Carrot Capital</h6>
        </div>
      </div>

      {/* menu items */}
      <nav className="hidden items-center justify-center md:flex">
        <ul role="list" className="flex items-center gap-14">
          {menuItems.map((item) => (
            <li key={item.name} className="group">
              <Link
                href={item.href}
                className={cn(
                  "font-bowlby-one tracking-wide text-white transition-all duration-200 ease-in group-hover:text-broom-400 md:text-sm lg:text-base xl:text-lg",
                  pathname === item.href && "text-broom-400",
                )}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* toggle mobile menu button */}
      <button
        type="button"
        onClick={() => setIsSidebarOpen(true)}
        className="md:hidden"
      >
        <i className="fi fi-rr-bars-staggered text-2xl text-white duration-300 hover:text-broom-400 sm:text-3xl"></i>
      </button>
    </div>
  );
};

export default Navbar;
