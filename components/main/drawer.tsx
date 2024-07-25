import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  TransitionChild,
} from "@headlessui/react";
import Image from "next/image";
import { cn } from "@/utils/classnames";
import LogoImage from "@/public/images/logo.png";
import Link from "next/link";
import { MAIN_ROUTES } from "@/routes/main-routes";
import { MenusType } from "@/@types/menus.type";
import { usePathname } from "next/navigation";

type Props = {
  isSidebarOpen: boolean;
  setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const menuItems: MenusType[] = [
  { name: "Home", href: MAIN_ROUTES.HOME },
  { name: "About", href: MAIN_ROUTES.ABOUT },
  { name: "Teams", href: MAIN_ROUTES.TEAMS },
  { name: "Contact Us", href: MAIN_ROUTES.CONTACT_US },
];

const Drawer = (props: Props) => {
  const { isSidebarOpen, setIsSidebarOpen } = props;
  const pathname = usePathname();

  return (
    <Dialog
      className={cn("relative z-50", isSidebarOpen && "hideen")}
      open={isSidebarOpen}
      onClose={setIsSidebarOpen}
    >
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-black transition-opacity duration-300 ease-linear data-[closed]:opacity-0"
      />

      <div className="fixed inset-0 flex">
        <DialogPanel
          transition
          className="relative flex w-full max-w-xs flex-1 transform border-r border-white/5 transition duration-300 ease-in-out data-[closed]:-translate-x-full"
        >
          {/* close sidebar */}
          <TransitionChild>
            <div
              onClick={() => setIsSidebarOpen(false)}
              className="group absolute left-auto right-5 top-5 flex cursor-pointer justify-center duration-300 ease-in-out data-[closed]:opacity-0"
            >
              <i className="fi fi-sr-cross-small text-2xl text-white transition-all group-hover:text-rose-400" />
            </div>
          </TransitionChild>

          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className="flex grow flex-col gap-y-8 overflow-y-auto bg-black px-5 py-10">
            {/* lgoo */}
            <Image
              src={LogoImage}
              alt="logo image"
              className="mx-auto flex size-28"
            />

            {/* menu items */}
            <nav className="flex flex-1 flex-col">
              <ul role="list" className="flex flex-col items-center gap-3">
                {menuItems.map((item) => (
                  <li key={item.name} className="group">
                    <Link
                      href={item.href}
                      className={cn(
                        "group-hover:text-broom-400 font-bowlby-one text-sm tracking-wide text-white transition-all duration-200 ease-in",
                        pathname === item.href && "text-broom-400",
                      )}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* footer */}
            <div className="mt-auto flex flex-col items-center text-white">
              <p className="font-azeret-mono flex text-center text-xs font-normal opacity-70 duration-100">
                GC CAPITAL © 2024 <br /> All Rights Reserved
              </p>
            </div>
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  );
};

export default Drawer;
