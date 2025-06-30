import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card } from "../../../../components/ui/card";
import { Input } from "../../../../components/ui/input";

export const AboutSection = (): JSX.Element => {
  return (
    <section className="flex flex-col items-center gap-10 px-[120px] py-[60px] relative bg-shadeswhite w-full">
      <Badge
        variant="outline"
        className="gap-[18px] pl-1 pr-4 py-1 bg-neutral-gray-50 rounded-[100px] border-[0.7px] border-solid border-slate-300 inline-flex items-center"
      >
        <Badge
          variant="outline"
          className="gap-1 px-3 py-0 bg-shadeswhite rounded-[100px] border-[0.75px] border-solid border-primaryblue-100 inline-flex items-center"
        >
          <div className="relative w-[5px] h-[5px] bg-project-blue rounded-[100px] blur-[1.5px]" />
          <span className="relative w-fit mt-[-0.75px] font-paragraph-p2-regular text-project-blue text-[length:var(--paragraph-p2-regular-font-size)] tracking-[var(--paragraph-p2-regular-letter-spacing)] leading-[var(--paragraph-p2-regular-line-height)] whitespace-nowrap">
            klarzo
          </span>
        </Badge>

        <span className="relative w-fit mt-[-0.70px] font-paragraph-p2-regular text-neutral-gray-700 text-[length:var(--paragraph-p2-regular-font-size)] tracking-[var(--paragraph-p2-regular-letter-spacing)] leading-[var(--paragraph-p2-regular-line-height)] whitespace-nowrap">
          Join Thousands Of People In The Waiting List For an Exclusive Access !
        </span>
      </Badge>

      <div className="flex flex-col items-center justify-center gap-9 relative w-full">
        <h1 className="relative max-w-[712px] mt-[-1.00px] font-heading-h1-semi-bold text-project-blue text-[length:var(--heading-h1-semi-bold-font-size)] text-center tracking-[var(--heading-h1-semi-bold-letter-spacing)] leading-[var(--heading-h1-semi-bold-line-height)]">
          Join the Waiting List and Be Among The Exclusive First To Discover !
        </h1>

        <h2 className="relative max-w-[614px] font-heading-h4-small-semi-bold text-shadesblack text-[length:var(--heading-h4-small-semi-bold-font-size)] text-center tracking-[var(--heading-h4-small-semi-bold-letter-spacing)] leading-[var(--heading-h4-small-semi-bold-line-height)]">
          Register and secure your spot to be the first informed when the
          product is lunch, Special promotions and Exclusive Features. Join our
          Waiting List Today !
        </h2>
      </div>

      <div className="inline-flex items-center gap-[17px] relative">
        <Card className="flex w-[373px] px-4 py-2 rounded-lg border border-solid border-slate-300 shadow-shadow-XS items-center gap-2.5 relative bg-transparent">
          <Input
            placeholder="Enter Email"
            className="border-0 shadow-none p-0 h-auto text-neutral-gray-400 text-lg leading-[22px] font-medium placeholder:text-neutral-gray-400 focus-visible:ring-0 focus-visible:ring-offset-0"
          />
        </Card>

        <Button className="inline-flex justify-center px-4 py-2 bg-project-blue rounded-lg items-center gap-2.5 text-lg font-medium">
          Join Waiting List
        </Button>
      </div>
    </section>
  );
};
