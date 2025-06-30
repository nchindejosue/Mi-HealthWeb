import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card } from "../../../../components/ui/card";

export const GetStartedSection = (): JSX.Element => {
  // Data for the steps
  const steps = [
    {
      text: "Sign Up in Seconds Create your secure account in just 30 seconds and begin your healthier journey.",
    },
    {
      text: "Enter or Import Your Data Manually input your medical history or seamlessly integrate with existing EHRs.",
    },
    {
      text: "Share & Sync Across Clinics Effortlessly share your records with doctors and facilities for coordinated care.",
    },
    {
      text: "Receive AI-Powered Insights Get personalized insights and reminders to help you make smarter health decisions.",
    },
  ];

  return (
    <section className="flex flex-col items-center justify-center gap-16 px-6 md:px-16 lg:px-[205px] py-0 relative w-full">
      {/* Banner */}
      <Card className="flex w-full max-w-[278px] items-center justify-center gap-3 pl-3.5 pr-[18px] py-1.5 relative rounded-[999px] overflow-hidden border border-solid border-slate-200 [background:radial-gradient(50%_50%_at_50%_50%,rgba(218,249,251,1)_0%,rgba(230,246,247,1)_13%,rgba(244,254,255,1)_30%,rgba(251,253,253,1)_58%,rgba(236,247,252,1)_68%,rgba(238,244,246,1)_80%,rgba(218,249,251,1)_100%)]">
        <div className="gap-1 px-3 py-0 bg-shadeswhite rounded-[100px] border-[0.75px] border-solid border-primaryblue-100 inline-flex items-center relative">
          <div className="relative w-[5px] h-[5px] bg-project-blue rounded-[100px] blur-[1.5px]" />
          <div className="relative w-fit mt-[-0.75px] font-paragraph-p2-regular font-[number:var(--paragraph-p2-regular-font-weight)] text-project-blue text-[length:var(--paragraph-p2-regular-font-size)] tracking-[var(--paragraph-p2-regular-letter-spacing)] leading-[var(--paragraph-p2-regular-line-height)] whitespace-nowrap [font-style:var(--paragraph-p2-regular-font-style)]">
            NHA
          </div>
        </div>

        <div className="relative flex-1 font-paragraph-p1-regular font-[number:var(--paragraph-p1-regular-font-weight)] text-[#1e293bbf] text-[length:var(--paragraph-p1-regular-font-size)] text-center tracking-[var(--paragraph-p1-regular-letter-spacing)] leading-[var(--paragraph-p1-regular-line-height)] [font-style:var(--paragraph-p1-regular-font-style)]">
          Get Exclusive Access To Our Future Release
        </div>

        <div className="absolute w-[26px] h-[199px] top-[-79px] left-[-35px] bg-[#fffffff2] rotate-[26.88deg] blur-[2.5px]" />
      </Card>

      {/* Main content */}
      <div className="flex flex-col md:flex-row items-center gap-10 relative w-full">
        <div className="flex flex-col items-start gap-11 relative flex-1">
          {/* Headings */}
          <div className="flex flex-col items-start gap-4 relative w-full">
            <h2 className="relative w-full mt-[-1.00px] font-heading-h3-semi-bold font-[number:var(--heading-h3-semi-bold-font-weight)] text-project-blue text-[length:var(--heading-h3-semi-bold-font-size)] tracking-[var(--heading-h3-semi-bold-letter-spacing)] leading-[var(--heading-h3-semi-bold-line-height)] [font-style:var(--heading-h3-semi-bold-font-style)]">
              Your Health Journey, Simplified in 3 Easy Steps
            </h2>

            <h3 className="relative w-full font-heading-h5-semi-bold font-[number:var(--heading-h5-semi-bold-font-weight)] text-black text-[length:var(--heading-h5-semi-bold-font-size)] tracking-[var(--heading-h5-semi-bold-letter-spacing)] leading-[var(--heading-h5-semi-bold-line-height)] [font-style:var(--heading-h5-semi-bold-font-style)]">
              Getting started with Mi-HEALTH is fast, intuitive, and designed
              for you.
            </h3>
          </div>

          {/* Steps */}
          <div className="flex flex-col items-start gap-6 relative w-full">
            {steps.map((step, index) => (
              <p
                key={index}
                className="relative w-full [font-family:'Inter',Helvetica] font-medium text-black text-[23px] tracking-[-0.46px] leading-7"
              >
                {step.text}
              </p>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex items-start gap-2.5 relative">
            <Button className="px-10 py-2 bg-project-blue rounded-[20px] text-shadeswhite font-paragraph-p2-semi-bold font-[number:var(--paragraph-p2-semi-bold-font-weight)] text-[length:var(--paragraph-p2-semi-bold-font-size)] tracking-[var(--paragraph-p2-semi-bold-letter-spacing)] leading-[var(--paragraph-p2-semi-bold-line-height)]">
              Get Started
            </Button>

            <Button
              variant="outline"
              className="px-10 py-2 rounded-[20px] border border-solid border-slate-300 text-neutral-gray-900 font-paragraph-p2-semi-bold font-[number:var(--paragraph-p2-semi-bold-font-weight)] text-[length:var(--paragraph-p2-semi-bold-font-size)] tracking-[var(--paragraph-p2-semi-bold-letter-spacing)] leading-[var(--paragraph-p2-semi-bold-line-height)]"
            >
              Book a Demo
            </Button>
          </div>
        </div>

        {/* Image */}
        <img
          className="relative w-full md:w-[620px] h-auto md:h-[529px] object-contain"
          alt="Health journey illustration"
          src="/rectangle-5649.svg"
        />
      </div>
    </section>
  );
};
