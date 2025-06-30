import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Card, CardContent } from "../../../../components/ui/card";

export const SecuritySection = (): JSX.Element => {
  // Security features data for mapping
  const securityFeatures = [
    {
      icon: "/group-3.png",
      title: "Secure Data Transfer",
      description:
        "Mi-Health securely transmits encrypted practice data from your system to the application.",
    },
    {
      icon: "/group-4.png",
      title: "No Misuse Of Your Data",
      description:
        "Mi-Health does not misuse your personal record data. Your data remains in your control.",
    },
    {
      icon: "/group-5.png",
      title: "Freedom Of Choice - 100%",
      description:
        "Mi-Health gives you the freedom to decide where you want to share which data – always with the necessary patient consent.",
    },
    {
      icon: "/group-6.png",
      title: "End-to-end Encryption",
      description:
        "All your sensitive health information is secured with AES-256 encryption at rest and TLS 1.3 during transmission",
    },
    {
      icon: "/group-7.png",
      title: "Full Transparency Of Data Queries",
      description:
        "Mi-Health allows you to view all access to your applications at any time.",
    },
    {
      icon: "/group-8.png",
      title: "Tested And Recommended By Experts",
      description:
        "Mi-Health is regularly audited for security and data protection and actively involves experts.",
    },
  ];

  return (
    <section className="flex flex-col gap-32 py-9 px-8 md:px-16 lg:px-[205px] w-full">
      {/* Header section */}
      <div className="flex flex-col items-start gap-8 w-full">
        <div className="flex flex-col items-center gap-1 w-full">
          <Badge
            className="flex items-center justify-center gap-3 px-3.5 py-1.5 rounded-full border border-solid border-slate-300 [background:radial-gradient(50%_50%_at_50%_50%,rgba(218,249,251,1)_0%,rgba(230,246,247,1)_13%,rgba(244,254,255,1)_30%,rgba(251,253,253,1)_58%,rgba(236,247,252,1)_68%,rgba(238,244,246,1)_80%,rgba(218,249,251,1)_100%)] relative"
            variant="outline"
          >
            <div className="gap-1 px-3 py-0 bg-shadeswhite rounded-[100px] border-[0.75px] border-solid border-primaryblue-100 inline-flex items-center">
              <div className="w-[5px] h-[5px] bg-project-blue rounded-[100px] blur-[1.5px]" />
              <span className="font-paragraph-p2-regular text-project-blue whitespace-nowrap">
                NHA
              </span>
            </div>
            <span className="flex-1 font-paragraph-p1-regular text-[#1e293bbf] text-center">
              Security and Privacy
            </span>
            <div className="absolute w-[26px] h-[199px] top-[-79px] left-[-35px] bg-[#fffffff2] rotate-[26.88deg] blur-[2.5px]" />
          </Badge>
        </div>

        <div className="flex flex-col w-full md:w-[726px] items-start gap-3">
          <div className="w-20 h-20 bg-[url(/svg-86345887-415.svg)] bg-[100%_100%]" />

          <div className="flex flex-col items-start gap-6 w-full">
            <h2 className="w-full mt-[-1px] font-heading-h2-small-semi-bold text-project-blue">
              Secure and data protection compliant
            </h2>

            <h3 className="w-full font-heading-h2-small-semi-bold text-black">
              Mi-Health ensures the secure transmission of your sensitive
              practice data – anytime, anywhere.
            </h3>
          </div>
        </div>
      </div>

      {/* Security features grid */}
      <div className="flex flex-wrap justify-between gap-16 w-full">
        {securityFeatures.map((feature, index) => (
          <Card
            key={index}
            className="w-full sm:w-[349px] border-none shadow-none"
          >
            <CardContent className="flex flex-col items-start gap-4 p-0">
              <div className="w-8 h-8 bg-[#007aff1a] rounded-full relative">
                <div className="w-[21px] h-[21px] absolute top-[5px] left-[5px] opacity-75">
                  <img
                    className="absolute w-[17px] h-[13px] top-[5px] left-0.5"
                    alt="Security icon"
                    src={feature.icon}
                  />
                </div>
              </div>

              <div className="flex flex-col items-start gap-2 w-full">
                <h4 className="w-full mt-[-1px] font-bold text-[#007aff] text-[23px] leading-[27.6px] [font-family:'Inter',Helvetica] tracking-[0]">
                  {feature.title}
                </h4>
                <p className="w-full font-paragraph-p3-semi-bold text-black">
                  {feature.description}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Footer section */}
      <div className="flex flex-col items-center justify-center gap-6 w-full">
        <img className="w-[60px] h-[60px]" alt="Log icon" src="/log-icon.svg" />

        <h3 className="w-full font-heading-h3-small-semi-bold text-black text-center">
          We do everything to ensure the best possible security and complete
          data protection.
        </h3>

        <button className="inline-flex items-center gap-1 text-project-blue hover:underline">
          <span className="font-paragraph-p3-regular whitespace-nowrap">
            More about security and data protection
          </span>
          <div className="relative w-8 h-8 opacity-75">
            <div className="absolute w-[11px] h-[3px] top-[18px] left-[15px] bg-project-blue rounded-xl -rotate-45" />
            <div className="absolute w-4 h-[3px] top-[15px] left-2 bg-project-blue rounded-xl" />
            <div className="absolute w-[11px] h-[3px] top-3 left-[15px] bg-project-blue rounded-xl rotate-45" />
          </div>
        </button>
      </div>
    </section>
  );
};
