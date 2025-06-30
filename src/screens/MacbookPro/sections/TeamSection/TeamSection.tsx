import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Card, CardContent } from "../../../../components/ui/card";

export const TeamSection = (): JSX.Element => {
  // Team member data for mapping
  const teamMembers = [
    {
      image: "/image.png",
      name: "Sir Harmony",
      role: "President, NHA",
    },
    {
      image: "/image-1.png",
      name: "Sir Harmony",
      role: "Software Dev, CTO",
    },
    {
      image: "/image-2.png",
      name: "Sir Harmony",
      role: "Software Dev, Technical Advisor",
    },
    {
      image: "/image-3.png",
      name: "Sir Harmony",
      role: "Software Dev",
    },
    {
      image: "/image-4.png",
      name: "Sir Harmony",
      role: "UI/UX Designer",
    },
    {
      image: "/image-5.png",
      name: "Sir Harmony",
      role: "Software Dev",
    },
    {
      image: "/image-6.png",
      name: "Sir Harmony",
      role: "Consultant",
    },
    {
      image: "/image-7.png",
      name: "Sir Harmony",
      role: "Software Dev",
    },
    {
      image: "/image-8.png",
      name: "Sir Harmony",
      role: "Software Dev",
    },
    {
      image: "/image-9.png",
      name: "Sir Harmony",
      role: "Software Dev",
    },
  ];

  return (
    <section className="flex flex-col items-center gap-16 px-4 md:px-16 lg:px-[205px] py-0 w-full">
      {/* Header badge */}
      <div className="flex w-full max-w-[278px] items-center justify-center gap-3 pl-3.5 pr-[18px] py-1.5 relative rounded-[999px] overflow-hidden border border-solid border-slate-300 [background:radial-gradient(50%_50%_at_50%_50%,rgba(218,249,251,1)_0%,rgba(230,246,247,1)_13%,rgba(244,254,255,1)_30%,rgba(251,253,253,1)_58%,rgba(236,247,252,1)_68%,rgba(238,244,246,1)_80%,rgba(218,249,251,1)_100%)]">
        <Badge className="gap-1 px-3 py-0 bg-shadeswhite rounded-[100px] border-[0.75px] border-solid border-[#bbcaf3] inline-flex items-center">
          <div className="relative w-[5px] h-[5px] bg-project-blue rounded-[100px] blur-[1.5px]" />
          <span className="relative w-fit mt-[-0.75px] font-paragraph-p2-regular text-project-blue">
            NHA
          </span>
        </Badge>

        <div className="relative flex-1 font-paragraph-p1-regular text-[#1e293bbf] text-center">
          Our Team
        </div>

        <div className="absolute w-[26px] h-[199px] top-[-79px] left-[-35px] bg-[#fffffff2] rotate-[26.88deg] blur-[2.5px]" />
      </div>

      {/* Section titles */}
      <div className="flex flex-col gap-4 w-full">
        <h2 className="font-heading-h2-small-semi-bold text-project-blue">
          Meet The Dynamic Team Behind NHA HEALTHTECH
        </h2>

        <h3 className="font-heading-h2-small-semi-bold text-black max-w-[796px]">
          Mi-HEALTH has been supported by various experts since its inception:
        </h3>
      </div>

      {/* Team members grid */}
      <div className="flex flex-wrap items-start justify-center gap-[44px_36px] w-full">
        {teamMembers.map((member, index) => (
          <Card
            key={`team-member-${index}`}
            className="w-[140.42px] h-[214.85px] overflow-hidden shadow-[0px_1.47px_2.93px_#00000014] border-[0.93px] border-solid border-slate-300 rounded-[7.33px]"
          >
            <CardContent className="flex flex-col items-start gap-[8.8px] pt-[11.73px] pb-[16.5px] px-[10.27px] p-0">
              <div
                className="relative self-stretch w-full h-[150.69px] rounded-[5.87px] bg-cover bg-center"
                style={{ backgroundImage: `url(${member.image})` }}
              />
              <div className="flex flex-col w-[80.29px] items-start gap-[4.4px]">
                <div className="self-stretch mt-[-0.37px] [font-family:'Inter',Helvetica] font-bold text-project-blue text-[10.3px] tracking-[-0.21px] leading-[12.5px]">
                  {member.name}
                </div>
                <div className="self-stretch [font-family:'Inter',Helvetica] font-medium text-neutral-gray-600 text-[8.4px] tracking-[-0.17px] leading-[10.3px]">
                  {member.role}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
