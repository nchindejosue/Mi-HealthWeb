import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../../components/ui/accordion";
import { Badge } from "../../../../components/ui/badge";

export const FaqSection = (): JSX.Element => {
  // FAQ data for the left column
  const leftFaqItems = [
    {
      question: "What is Mi-Health",
      answer:
        "NHA-HEALTHTECH is a HealthTech startup registered in Cameroon, in the pre-seed phase, created to develop and make available health technology and digital health solutions for individuals/patients and healthcare facilities in Africa, particularly in Cameroon.",
      defaultOpen: true,
    },
    {
      question: "Is my health information truly private and secure?",
      answer: "",
    },
    {
      question: "Can Mi-HEALTH integrate with my current doctor's system?",
      answer: "",
    },
    {
      question: "What kind of support is available if I encounter issues?",
      answer: "",
    },
    {
      question: "Can I use Mi-HEALTH offline?",
      answer: "",
    },
  ];

  // FAQ data for the right column
  const rightFaqItems = [
    {
      question: "How does Mi-HEALTH ensure data accuracy?",
      answer: "",
    },
    {
      question: "Is my health information truly private and secure?",
      answer: "",
    },
    {
      question: "Are there free access for premium features?",
      answer: "",
    },
    {
      question: "What kind of support is available if I encounter issues?",
      answer: "",
    },
    {
      question: "Can I use Mi-HEALTH offline?",
      answer: "",
    },
  ];

  return (
    <section className="flex flex-col items-center gap-16 py-20 bg-shadeswhite">
      <div className="flex flex-col items-center gap-10 px-4 md:px-[120px] w-full">
        <div className="flex items-center justify-center gap-3 pl-3.5 pr-[18px] py-1.5 rounded-[999px] overflow-hidden border border-solid border-slate-300 [background:radial-gradient(50%_50%_at_50%_50%,rgba(218,249,251,1)_0%,rgba(230,246,247,1)_13%,rgba(244,254,255,1)_30%,rgba(251,253,253,1)_58%,rgba(236,247,252,1)_68%,rgba(238,244,246,1)_80%,rgba(218,249,251,1)_100%)]">
          <Badge className="gap-1 px-3 py-0 bg-shadeswhite rounded-[100px] border-[0.75px] border-solid border-[#bbcaf3] inline-flex items-center">
            <div className="relative w-[5px] h-[5px] bg-project-blue rounded-[100px] blur-[1.5px]" />
            <span className="relative w-fit mt-[-0.75px] font-paragraph-p2-regular text-project-blue">
              NHA
            </span>
          </Badge>

          <div className="relative flex-1 font-paragraph-p1-regular text-[#1e293bbf] text-center">
            All What You Need To know to Get Started
          </div>

          <div className="absolute w-[26px] h-[199px] top-[-79px] left-[-35px] bg-[#fffffff2] rotate-[26.88deg] blur-[2.5px]" />
        </div>

        <div className="flex flex-col items-center justify-center gap-9 w-full">
          <h2 className="max-w-[588px] font-heading-h2-small-semi-bold text-project-blue text-center">
            Find The Answers To All Your Questions
          </h2>

          <h4 className="max-w-[636px] font-heading-h4-small-semi-bold text-shadesblack text-center">
            Go through the frequently asked questions concerning NHA HEALTHTECH.
            Need help? Contact our team for support at all instance
          </h4>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-start justify-center gap-[27px] px-4 md:px-[120px] w-full">
        {/* Left column */}
        <div className="flex flex-col w-full md:w-1/2 gap-5">
          <Accordion type="single" collapsible defaultValue="item-0">
            {leftFaqItems.map((item, index) => (
              <AccordionItem
                key={`left-faq-${index}`}
                value={`item-${index}`}
                className="mb-5 bg-shadeswhite rounded-xl border border-solid border-slate-300 overflow-hidden"
              >
                <AccordionTrigger className="px-4 py-5 font-paragraph-p3-semi-bold text-neutral-gray-900 hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="px-4 py-5 font-paragraph-p2-semi-bold text-neutral-gray-500">
                  {item.answer || "No answer provided yet."}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Right column */}
        <div className="flex flex-col w-full md:w-1/2 gap-5">
          <Accordion type="single" collapsible>
            {rightFaqItems.map((item, index) => (
              <AccordionItem
                key={`right-faq-${index}`}
                value={`item-${index}`}
                className="mb-5 bg-shadeswhite rounded-xl border border-solid border-slate-300 overflow-hidden"
              >
                <AccordionTrigger className="px-4 py-5 font-paragraph-p3-semi-bold text-neutral-gray-900 hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="px-4 py-5 font-paragraph-p2-semi-bold text-neutral-gray-500">
                  {item.answer || "No answer provided yet."}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
