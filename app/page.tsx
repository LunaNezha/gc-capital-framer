"use client";

import Drawer from "@/components/main/drawer";
import Navbar from "@/components/main/navbar";
import React, { useState } from "react";
import AboutSection from "@/components/sections/about";
import Header from "@/components/sections/header";
import TeamsSection from "@/components/sections/teams";
import PartnersSection from "@/components/sections/partners";
import Footer from "@/components/sections/footer";
import Image from "next/image";
import Separator from "@/public/images/separator.svg";
import Separator2 from "@/public/images/separator-2.svg";

type Props = {
  children: React.ReactNode;
};

export default function MainPage({ children }: Readonly<Props>) {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);

  return (
    <React.Fragment>
      <Drawer isSidebarOpen={sidebarOpen} setIsSidebarOpen={setSidebarOpen} />

      <div className="flex flex-col overflow-x-hidden">
        <Navbar isSidebarOpen={sidebarOpen} setIsSidebarOpen={setSidebarOpen} />

        <div className="flex flex-col">
          <Header />
          <AboutSection />
          <Image alt="separator image" src={Separator} className="w-full" />
          <TeamsSection />
          <PartnersSection />
          <Image alt="separator image" src={Separator2} className="w-full mt-20" />
          <Footer />
        </div>
      </div>
    </React.Fragment>
  );
}
