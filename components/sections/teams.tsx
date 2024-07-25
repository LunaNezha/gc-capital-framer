import { TeamMemberType } from "@/@types/team-members.type";
import React from "react";
import TeamMember1 from "@/public/images/team-member-1.png";
import TeamMember2 from "@/public/images/team-member-2.png";
import TeamMember3 from "@/public/images/team-member-3.png";
import TeamMember4 from "@/public/images/team-member-4.png";
import Image from "next/image";

const TeamsSection = () => {
  const teamMembers: TeamMemberType[] = [
    { name: "GC", image: TeamMember1 },
    { name: "@BuildrJ", image: TeamMember2 },
    { name: "Ashlynn", image: TeamMember3 },
    { name: "Hopper", image: TeamMember4 },
  ];

  return (
    <div className="bg-black py-10 sm:py-12 md:py-14">
      <div className="container mx-auto flex items-center justify-center">
        {/* content */}
        <div className="flex w-11/12 flex-col items-center justify-center gap-6 text-center sm:w-9/12 md:w-8/12 lg:w-6/12">
          <h1 className="text-broom-400 text-stroke-2 md:text-stroke-4 text-shadow-default font-bowlby-one text-3xl uppercase sm:text-4xl md:text-5xl lg:text-6xl xl:text-8xl">
            our team
          </h1>

          {/* team items */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-8">
            {teamMembers.map((item, index) => (
              <div key={index} className="flex flex-col gap-2 sm:gap-4">
                <Image
                  src={item.image}
                  alt={item.name}
                  className="size-28 object-contain sm:size-32 md:size-40"
                />
                <span className="font-azeret-mono text-broom-400 text-sm md:text-base">
                  {item.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamsSection;
