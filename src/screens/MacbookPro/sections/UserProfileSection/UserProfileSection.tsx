import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Card, CardContent } from "../../../../components/ui/card";
import { useLanguage } from "../../../../hooks/useLanguage";
import { translations } from "../../../../utils/translations";

export const UserProfileSection = (): JSX.Element => {
  const { language } = useLanguage();
  const t = translations[language].userProfile;

  // Feature data for mapping
  const features = [
    {
      icon: "🏥",
      title: t.features.phr.title,
      description: t.features.phr.description,
    },
    {
      icon: "💻",
      title: t.features.telemedicine.title,
      description: t.features.telemedicine.description,
    },
    {
      icon: "🤖",
      title: t.features.ai.title,
      description: t.features.ai.description,
    },
  ];

  return (
    <section id="user-profile" className="flex flex-col w-full items-center gap-8 lg:gap-16 px-4 lg:px-[205px] py-0 relative">
      {/* Background gradients */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-64 h-64 bg-gradient-to-r from-project-blue/5 to-project-green/5 rounded-full blur-3xl animate-pulse top-10 left-10"></div>
        <div className="absolute w-80 h-80 bg-gradient-to-r from-project-green/5 to-project-blue/5 rounded-full blur-3xl animate-pulse bottom-10 right-10 animation-delay-2000"></div>
      </div>

      {/* What makes us unique badge */}
      <div className="flex items-center justify-center gap-3 pl-3.5 pr-[18px] py-1.5 relative rounded-[999px] overflow-hidden border border-solid border-slate-200 [background:radial-gradient(50%_50%_at_50%_50%,rgba(218,249,251,1)_0%,rgba(230,246,247,1)_13%,rgba(244,254,255,1)_30%,rgba(251,253,253,1)_58%,rgba(236,247,252,1)_68%,rgba(238,244,246,1)_80%,rgba(218,249,251,1)_100%)] animate-fade-in">
        <Badge className="gap-1 px-3 py-0 bg-shadeswhite rounded-[100px] border-[0.75px] border-solid border-[#bbcaf3] inline-flex items-center">
          <div className="relative w-[5px] h-[5px] bg-project-blue rounded-[100px] blur-[1.5px] animate-pulse" />
          <span className="relative w-fit mt-[-0.75px] font-paragraph-p2-regular font-[number:var(--paragraph-p2-regular-font-weight)] text-project-blue text-xs lg:text-[length:var(--paragraph-p2-regular-font-size)] tracking-[var(--paragraph-p2-regular-letter-spacing)] leading-[var(--paragraph-p2-regular-line-height)] whitespace-nowrap [font-style:var(--paragraph-p2-regular-font-style)]">
            MI-HEALTH
          </span>
        </Badge>

        <div className="relative flex-1 font-paragraph-p1-regular font-[number:var(--paragraph-p1-regular-font-weight)] text-[#1e293bbf] text-xs lg:text-[length:var(--paragraph-p1-regular-font-size)] text-center tracking-[var(--paragraph-p1-regular-letter-spacing)] leading-[var(--paragraph-p1-regular-line-height)] [font-style:var(--paragraph-p1-regular-font-style)]">
          {t.badge}
        </div>

        <div className="absolute w-[26px] h-[199px] top-[-79px] left-[-35px] bg-[#fffffff2] rotate-[26.88deg] blur-[2.5px]" />
      </div>

      {/* Main content card */}
      <Card className="flex items-start justify-between p-6 lg:p-16 relative w-full bg-shadeswhite rounded-[32px] border border-solid border-slate-300 shadow-[0px_2px_10px_#00000026] animate-slide-up hover:shadow-xl transition-all duration-500 hover:scale-[1.02]">
        <CardContent className="flex flex-col lg:flex-row items-start justify-between gap-8 lg:gap-10 p-0 w-full">
          {/* Left side - Company info */}
          <div className="flex flex-col items-start gap-4 relative flex-1 animate-slide-left">
            <h2 className="relative w-full mt-[-1.00px] font-heading-h2-bold font-[number:var(--heading-h2-bold-font-weight)] text-project-blue text-2xl lg:text-[length:var(--heading-h2-bold-font-size)] tracking-[var(--heading-h2-bold-letter-spacing)] leading-[var(--heading-h2-bold-line-height)] [font-style:var(--heading-h2-bold-font-style)]">
              {t.title}
            </h2>

            <h3 className="relative w-full font-heading-h2-small-bold font-[number:var(--heading-h2-small-bold-font-weight)] text-neutral-gray-900 text-lg lg:text-[length:var(--heading-h2-small-bold-font-size)] tracking-[var(--heading-h2-small-bold-letter-spacing)] leading-[var(--heading-h2-small-bold-line-height)] [font-style:var(--heading-h2-small-bold-font-style)]">
              {t.subtitle}
            </h3>
          </div>

          {/* Right side - Features */}
          <div className="flex flex-col w-full lg:w-[630px] items-start gap-6 lg:gap-10 relative">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`flex items-center gap-4 lg:gap-6 relative w-full animate-slide-right hover:scale-105 transition-all duration-300 hover:bg-neutral-gray-50 rounded-lg p-4 -m-4`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Feature icon */}
                <div className="relative w-[50px] lg:w-[60px] h-[50px] lg:h-[60px] flex-shrink-0 animate-bounce-slow bg-gradient-to-br from-project-blue/10 to-project-green/10 rounded-xl flex items-center justify-center text-2xl lg:text-3xl">
                  {feature.icon}
                </div>

                {/* Feature content */}
                <div className="flex flex-col items-start justify-center gap-2 lg:gap-3 relative flex-1">
                  <h4 className={`relative w-full mt-[-1.00px] font-heading-h4-bold font-[number:var(--heading-h4-bold-font-weight)] text-[#007aff] text-lg lg:text-[length:var(--heading-h4-bold-font-size)] tracking-[var(--heading-h4-bold-letter-spacing)] leading-[var(--heading-h4-bold-line-height)] [font-style:var(--heading-h4-bold-font-style)]`}>
                    {feature.title}
                  </h4>

                  <div className="flex flex-col items-start gap-1 relative w-full">
                    <p className="relative w-full mt-[-1.00px] font-heading-h5-semi-bold font-[number:var(--heading-h5-semi-bold-font-weight)] text-neutral-gray-900 text-sm lg:text-[length:var(--heading-h5-semi-bold-font-size)] tracking-[var(--heading-h5-semi-bold-letter-spacing)] leading-[var(--heading-h5-semi-bold-line-height)] [font-style:var(--heading-h5-semi-bold-font-style)]">
                      {feature.description}
                    </p>

                    <button className="relative font-paragraph-p2-semi-bold font-[number:var(--paragraph-p2-semi-bold-font-weight)] text-neutral-gray-900 text-sm lg:text-[length:var(--paragraph-p2-semi-bold-font-size)] tracking-[var(--paragraph-p2-semi-bold-letter-spacing)] leading-[var(--paragraph-p2-semi-bold-line-height)] text-left [font-style:var(--paragraph-p2-semi-bold-font-style)] hover:text-project-blue transition-colors">
                      {language === 'en' ? 'Learn more' : 'En savoir plus'}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  );
};