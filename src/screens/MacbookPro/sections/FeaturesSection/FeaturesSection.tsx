import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Card, CardContent } from "../../../../components/ui/card";
import { useLanguage } from "../../../../hooks/useLanguage";
import { translations } from "../../../../utils/translations";

export const FeaturesSection = (): JSX.Element => {
  const { language } = useLanguage();
  const t = translations[language].features;

  // Feature card data for the bottom section
  const featureCards = [
    {
      id: "unite-records",
      darkBg: true,
      title: t.cards.unite.title,
      description: t.cards.unite.description,
      icon: "🔗",
    },
    {
      id: "maximum-security",
      darkBg: false,
      title: t.cards.security.title,
      subtitle: t.cards.security.subtitle,
      icon: "🔒",
      checkpoints: t.cards.security.points,
    },
    {
      id: "your-health",
      darkBg: false,
      title: t.cards.control.title,
      description: t.cards.control.description,
      icon: "👤",
    },
    {
      id: "unlock-knowledge",
      darkBg: true,
      title: t.cards.knowledge.title,
      description: t.cards.knowledge.description,
      icon: "🧠",
    },
  ];

  return (
    <section id="features" className="flex flex-col w-full items-center justify-end gap-16 lg:gap-[138px] px-4 lg:px-[205px] py-0 relative">
      {/* Background gradients */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-96 h-96 bg-gradient-to-r from-project-blue/5 to-project-green/5 rounded-full blur-3xl animate-pulse top-20 left-10"></div>
        <div className="absolute w-80 h-80 bg-gradient-to-r from-project-green/5 to-project-blue/5 rounded-full blur-3xl animate-pulse bottom-20 right-10 animation-delay-2000"></div>
      </div>

      {/* Header section */}
      <div className="flex flex-col items-center gap-8 lg:gap-16 relative w-full">
        {/* Badge */}
        <div className="flex items-center justify-center relative">
          <Badge className="flex items-center justify-center gap-3 pl-3.5 pr-[18px] py-1.5 rounded-[999px] overflow-hidden border border-solid border-slate-200 [background:radial-gradient(50%_50%_at_50%_50%,rgba(218,249,251,1)_0%,rgba(230,246,247,1)_13%,rgba(244,254,255,1)_30%,rgba(251,253,253,1)_58%,rgba(236,247,252,1)_68%,rgba(238,244,246,1)_80%,rgba(218,249,251,1)_100%)]">
            <div className="gap-1 px-3 py-0 bg-shadeswhite rounded-[100px] border-[0.75px] border-solid border-[#bbcaf3] inline-flex items-center relative">
              <div className="relative w-[5px] h-[5px] bg-project-blue rounded-[100px] blur-[1.5px]" />
              <div className="relative w-fit mt-[-0.75px] font-paragraph-p2-regular font-[number:var(--paragraph-p2-regular-font-weight)] text-project-blue text-xs lg:text-[length:var(--paragraph-p2-regular-font-size)] tracking-[var(--paragraph-p2-regular-letter-spacing)] leading-[var(--paragraph-p2-regular-line-height)] whitespace-nowrap [font-style:var(--paragraph-p2-regular-font-style)]">
                MI-HEALTH
              </div>
            </div>
            <div className="relative flex-1 font-paragraph-p1-regular font-[number:var(--paragraph-p1-regular-font-weight)] text-[#1e293bbf] text-xs lg:text-[length:var(--paragraph-p1-regular-font-size)] text-center tracking-[var(--paragraph-p1-regular-letter-spacing)] leading-[var(--paragraph-p1-regular-line-height)] [font-style:var(--paragraph-p1-regular-font-style)]">
              {t.badge}
            </div>
            <div className="absolute w-[26px] h-[199px] top-[-79px] left-[-35px] bg-[#fffffff2] rotate-[26.88deg] blur-[2.5px]" />
          </Badge>
        </div>

        {/* Heading text */}
        <div className="flex flex-col items-center gap-4 lg:gap-[23px] relative w-full">
          <h2 className="text-project-blue text-xl md:text-2xl lg:text-[39px] font-semibold text-center tracking-[-0.8px] lg:tracking-[-1.56px] leading-[1.5] font-['Inter',Helvetica] max-w-full lg:max-w-[1200px]">
            {t.title}
          </h2>
          <p className="text-black text-lg md:text-xl lg:text-[28px] font-medium text-center tracking-[-0.3px] lg:tracking-[-0.56px] leading-[1.2] font-['Inter',Helvetica] max-w-full lg:max-w-[994px]">
            {t.subtitle}
          </p>
        </div>
      </div>

      {/* Feature cards section */}
      <div className="flex flex-col gap-4 lg:gap-7 w-full">
        {/* First row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-7 w-full">
          {/* Dark card - Unite Your Fragmented Health Records */}
          <Card className="bg-[#0b252b] rounded-[21.7px] overflow-hidden shadow-[0px_3.62px_18.09px_#00000014] border-none">
            <CardContent className="p-6 lg:p-[36.17px] flex flex-col items-center justify-center gap-4 lg:gap-[21.7px] relative min-h-[300px] lg:min-h-[443px]">
              {/* Background pattern */}
              <div className="absolute inset-0 bg-gradient-to-br from-project-blue/10 to-project-green/10 opacity-20"></div>
              
              {/* Feature illustration */}
              <div className="relative w-full h-32 lg:h-[200px] flex items-center justify-center z-10">
                <div className="text-6xl lg:text-8xl animate-bounce-slow">
                  {featureCards[0].icon}
                </div>
              </div>

              <div className="flex flex-col w-full items-start gap-3 lg:gap-[16.28px] relative z-10">
                <h3 className="text-white text-xl lg:text-[30.7px] font-bold tracking-[-0.4px] lg:tracking-[-0.61px] leading-[1.2] lg:leading-[25.3px] font-['Inter',Helvetica]">
                  {featureCards[0].title}
                </h3>
                <div className="flex items-center justify-between gap-2 lg:gap-[3.62px] w-full">
                  <p className="flex-1 opacity-60 text-white text-sm lg:text-[20.8px] font-normal tracking-[0] leading-[1.2] lg:leading-[21.7px] font-['Inter',Helvetica]">
                    {featureCards[0].description}
                  </p>
                  <div className="inline-flex items-center justify-center p-2 lg:p-[7.23px] rounded-[7.23px] border-[0.9px] border-solid border-[#ffffff99] shadow-[0px_3.62px_7.23px_#00000014]">
                    <div className="w-4 lg:w-[21.7px] h-4 lg:h-[21.7px] text-white">→</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Light card - Maximum Security */}
          <Card className="bg-shadeswhite rounded-[21.7px] border-[0.9px] border-solid border-slate-300 shadow-[0px_3.62px_18.09px_#00000014]">
            <CardContent className="p-4 lg:p-[25.32px] flex flex-col items-center gap-6 lg:gap-[29.84px]">
              <div className="relative w-full h-32 lg:h-[280.33px] bg-[#e0f8ff] rounded-[14.47px] overflow-hidden flex items-center justify-center">
                <div className="text-6xl lg:text-8xl animate-spin-slow">
                  {featureCards[1].icon}
                </div>
              </div>

              <div className="flex flex-col items-end gap-6 lg:gap-[28.94px] w-full">
                <div className="flex flex-col items-start gap-2 lg:gap-[10.85px] w-full">
                  <h3 className="text-project-blue text-lg lg:text-[20.8px] font-semibold tracking-[-0.3px] lg:tracking-[-0.42px] leading-[1.2] lg:leading-[25.3px] font-['Inter',Helvetica]">
                    {featureCards[1].title}
                  </h3>
                  <p className="text-black text-lg lg:text-[20.8px] font-medium tracking-[0] leading-[1.2] lg:leading-[25.3px] font-['Inter',Helvetica]">
                    {featureCards[1].subtitle}
                  </p>
                </div>

                <div className="flex flex-col items-start gap-4 lg:gap-[21.7px] w-full">
                  {featureCards[1].checkpoints.map((checkpoint, index) => (
                    <div
                      key={`security-point-${index}`}
                      className="flex items-center gap-3 lg:gap-[14.47px] w-full"
                    >
                      <div className="w-5 lg:w-[21.7px] h-5 lg:h-[21.7px] bg-[#007aff1a] rounded-full flex items-center justify-center flex-shrink-0">
                        <div className="text-project-blue text-xs">✓</div>
                      </div>
                      <p className="text-black text-sm lg:text-[16.3px] font-normal tracking-[0] leading-[1.2] lg:leading-[19.9px] font-['Inter',Helvetica]">
                        {checkpoint}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Second row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-7 w-full">
          {/* Light card - Your Health, Your Hands */}
          <Card className="bg-shadeswhite rounded-[21.7px] border-[0.9px] border-solid border-slate-300 shadow-[0px_3.62px_18.09px_#00000014]">
            <CardContent className="p-4 lg:p-[25.32px] flex flex-col items-start gap-2 lg:gap-[10.85px]">
              <div className="relative w-full h-32 lg:h-[280.33px] bg-[#e0f8ff] rounded-[14.47px] overflow-hidden flex items-center justify-center">
                <div className="text-6xl lg:text-8xl animate-pulse-slow">
                  {featureCards[2].icon}
                </div>
              </div>

              <div className="w-full flex flex-col items-start gap-4 lg:gap-[19.89px]">
                <h3 className="text-project-blue text-lg lg:text-[20.8px] font-semibold tracking-[-0.3px] lg:tracking-[-0.42px] leading-[1.2] lg:leading-[25.3px] font-['Inter',Helvetica]">
                  {featureCards[2].title}
                </h3>
                <div className="flex items-end justify-between gap-2 lg:gap-[10.85px] w-full">
                  <p className="flex-1 text-black text-sm lg:text-[20.8px] font-medium tracking-[0] leading-[1.2] lg:leading-[25.3px] font-['Inter',Helvetica]">
                    {featureCards[2].description}
                  </p>
                  <div className="inline-flex items-center justify-center gap-2 lg:gap-[9.04px] p-2 lg:p-[7.23px] rounded-[7.23px] border-[0.9px] border-solid border-slate-300 shadow-[0px_3.62px_7.23px_#00000014]">
                    <div className="w-4 lg:w-[21.7px] h-4 lg:h-[21.7px]">→</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Dark card - Unlock Your Health Knowledge */}
          <Card className="bg-[#0b252b] rounded-[21.7px] overflow-hidden shadow-[0px_3.62px_18.09px_#00000014] border-none">
            <CardContent className="p-6 lg:p-[36.17px] flex flex-col items-center justify-center gap-8 lg:gap-[57.87px] relative min-h-[300px] lg:min-h-[443px]">
              {/* Background pattern */}
              <div className="absolute inset-0 bg-gradient-to-br from-project-green/10 to-project-blue/10 opacity-20"></div>

              <div className="inline-flex items-center justify-center gap-2 lg:gap-[5.95px] p-4 lg:p-[9.52px] relative z-10 rounded-full overflow-hidden backdrop-blur-[4.46px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(4.46px)_brightness(100%)] bg-[linear-gradient(0deg,rgba(255,255,255,0.17)_0%,rgba(255,255,255,0.17)_100%),linear-gradient(227deg,rgba(0,0,0,0.25)_0%,rgba(255,255,255,0.25)_50%,rgba(0,0,0,0.25)_100%)]">
                <div className="flex w-32 lg:w-[226.07px] h-32 lg:h-[226.07px] items-center justify-center gap-2 lg:gap-[8.11px] bg-neutral-gray-300 rounded-full border-[none] shadow-[inset_0px_-1.81px_1.81px_#00000014,inset_0px_3.62px_1.81px_#ffffff4c]">
                  <div className="text-4xl lg:text-6xl animate-float">
                    {featureCards[3].icon}
                  </div>
                </div>
              </div>

              <div className="w-full flex flex-col items-start gap-4 lg:gap-[19.89px] relative z-10">
                <h3 className="text-white text-xl lg:text-[30.7px] font-bold tracking-[-0.4px] lg:tracking-[-0.61px] leading-[1.2] lg:leading-[25.3px] font-['Inter',Helvetica]">
                  {featureCards[3].title}
                </h3>
                <div className="flex items-end justify-between gap-2 lg:gap-[3.62px] w-full">
                  <p className="flex-1 opacity-60 text-white text-sm lg:text-[20.8px] font-normal tracking-[0] leading-[1.2] lg:leading-[21.7px] font-['Inter',Helvetica]">
                    {featureCards[3].description}
                  </p>
                  <div className="inline-flex items-center justify-center gap-2 lg:gap-[9.04px] p-2 lg:p-[7.23px] rounded-[7.23px] border-[0.9px] border-solid border-[#ffffff99] shadow-[0px_3.62px_7.23px_#00000014]">
                    <div className="w-4 lg:w-[21.7px] h-4 lg:h-[21.7px] text-white">→</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};