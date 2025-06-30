import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { ScrollToSection } from "../../../../components/ScrollToSection";
import { useLanguage } from "../../../../hooks/useLanguage";
import { translations } from "../../../../utils/translations";

export const HeaderSection = (): JSX.Element => {
  const { language } = useLanguage();
  const t = translations[language].header;

  return (
    <section id="header" className="flex flex-col items-center gap-8 lg:gap-[60px] relative px-4 lg:px-0">
      {/* Background gradients */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-96 h-96 bg-gradient-to-r from-project-blue/10 to-project-green/10 rounded-full blur-3xl animate-pulse top-20 left-10"></div>
        <div className="absolute w-80 h-80 bg-gradient-to-r from-project-green/10 to-project-blue/10 rounded-full blur-3xl animate-pulse bottom-20 right-10 animation-delay-2000"></div>
      </div>

      {/* Top banner with gradient background */}
      <div className="flex w-full max-w-[278px] items-center justify-center gap-3 pl-3.5 pr-[18px] py-1.5 relative rounded-[999px] overflow-hidden border border-solid border-slate-200 [background:radial-gradient(50%_50%_at_50%_50%,rgba(218,249,251,1)_0%,rgba(230,246,247,1)_13%,rgba(244,254,255,1)_30%,rgba(251,253,253,1)_58%,rgba(236,247,252,1)_68%,rgba(238,244,246,1)_80%,rgba(218,249,251,1)_100%)] animate-fade-in">
        <Badge className="inline-flex items-center gap-1 px-3 py-0 relative bg-shadeswhite rounded-[100px] border-[0.75px] border-solid border-[#bbcaf3]">
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

      {/* Main content container */}
      <div className="flex flex-col items-center gap-6 lg:gap-8 relative max-w-6xl mx-auto">
        {/* Background image - hidden on mobile */}
        <div className="absolute w-[1283px] h-[697px] top-[-74px] left-[-179px] bg-[url(https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)] bg-cover bg-center opacity-5 hidden lg:block" />

        {/* Headings section */}
        <div className="flex flex-col items-center gap-2 relative w-full">
          {/* First heading row - YOUR HEALTH RECORDS */}
          <div className="flex flex-col lg:flex-row items-center gap-2 lg:gap-5 relative animate-slide-up">
            <h1 className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-extrabold text-neutral-gray-900 text-3xl md:text-5xl lg:text-[75px] text-center tracking-[-1.5px] lg:tracking-[-3.00px] leading-[1.2] lg:leading-[90.0px] whitespace-nowrap">
              {t.title1}
            </h1>

            <div className="flex flex-col items-center lg:items-start gap-2.5 relative">
              <div className="relative w-full lg:w-[666px] h-auto lg:h-[85px]">
                <div className="flex flex-col w-full lg:w-[1020px] items-center lg:items-start gap-4 lg:gap-8 relative lg:left-[-178px]">
                  <div className="flex flex-col w-full items-center gap-4 relative">
                    <div className="flex items-center gap-2 lg:gap-5 relative">
                      <div className="flex flex-col items-center lg:items-start gap-2.5 relative">
                        <div className="relative w-full lg:w-[667px] h-auto lg:h-[102px]">
                          <div className="relative h-auto lg:h-[90px]">
                            <div className="flex items-center justify-center gap-2.5">
                              <h1 className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-extrabold text-project-blue text-3xl md:text-5xl lg:text-[75px] text-center tracking-[-1.5px] lg:tracking-[-3.00px] leading-[1.2] lg:leading-[90.0px] whitespace-nowrap animate-text-glow">
                                {t.title2}
                              </h1>
                            </div>

                            <div className="w-full lg:w-[667px] absolute h-auto lg:h-[90px] top-0 left-0">
                              <div className="items-center gap-2.5 inline-flex justify-center relative">
                                <div className="absolute w-32 lg:w-[139px] h-64 lg:h-[279px] top-[-40px] lg:top-[-93px] left-[-60px] lg:left-[-119px] animate-float">
                                  <div className="w-full h-full bg-gradient-to-br from-project-blue/20 to-project-green/20 rounded-lg blur-sm"></div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Second heading row - YOUR SECURE CONTROL */}
          <div className="flex flex-col lg:flex-row items-center justify-center gap-2 lg:gap-5 relative w-full animate-slide-up animation-delay-200">
            <h1 className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-extrabold text-neutral-gray-900 text-3xl md:text-5xl lg:text-[75px] text-center tracking-[-1.5px] lg:tracking-[-3.00px] leading-[1.2] lg:leading-[90.0px] whitespace-nowrap">
              {t.title3}
            </h1>

            <div className="flex flex-col items-center justify-end gap-2.5 relative">
              <div className="relative w-full lg:w-[654px] h-auto lg:h-[85px]">
                <div className="flex flex-col items-center lg:items-start gap-4 lg:gap-8 relative">
                  <div className="flex flex-col items-center gap-4 relative">
                    <div className="flex items-center justify-center gap-2 lg:gap-5 relative">
                      <div className="flex flex-col w-full lg:w-[654px] items-center lg:items-start gap-2.5 relative">
                        <div className="relative w-full lg:w-[741px] h-auto lg:h-[102px] lg:mr-[-87.00px]">
                          <div className="relative w-full lg:w-[654px] h-auto lg:h-[90px]">
                            <div className="flex items-center justify-center gap-2.5">
                              <h1 className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-extrabold text-[#007aff] text-3xl md:text-5xl lg:text-[75px] text-center tracking-[-1.5px] lg:tracking-[-3.00px] leading-[1.2] lg:leading-[90.0px] whitespace-nowrap animate-text-glow">
                                {t.title4}
                              </h1>
                            </div>

                            <div className="w-full lg:w-[654px] absolute h-auto lg:h-[90px] top-0 left-0">
                              <div className="items-center gap-2.5 inline-flex justify-center relative">
                                <div className="absolute w-32 lg:w-[137px] h-64 lg:h-[278px] top-[-40px] lg:top-[-93px] left-[-50px] lg:left-[-105px] animate-float animation-delay-1000">
                                  <div className="w-full h-full bg-gradient-to-br from-project-green/20 to-project-blue/20 rounded-lg blur-sm"></div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Subtitle text */}
        <div className="flex flex-col w-full max-w-[924px] items-center relative animate-slide-up animation-delay-400 px-4">
          <h2 className="relative w-full mt-[-1.00px] [font-family:'Inter',Helvetica] font-semibold text-black text-lg md:text-xl lg:text-[25px] text-center tracking-[-0.25px] lg:tracking-[-0.50px] leading-8 lg:leading-10">
            {t.subtitle1}
          </h2>

          <div className="flex items-end justify-center gap-1 relative w-full mt-2">
            <h2 className="relative w-fit [font-family:'Inter',Helvetica] font-semibold text-black text-lg md:text-xl lg:text-2xl text-center tracking-[-0.24px] lg:tracking-[-0.48px] leading-[1.2]">
              <br /> {t.subtitle2}
            </h2>

            <div className="h-8 lg:h-[42px] items-end flex-[0_0_auto] inline-flex justify-center relative">
              <div className="relative w-3.5 h-8 lg:h-[45px] mt-[-3.00px] -ml-1">
                <div className="absolute -top-0.5 left-0 font-paragraph-p2-regular font-[number:var(--paragraph-p2-regular-font-weight)] text-[#007aff] text-lg lg:text-[length:var(--paragraph-p2-regular-font-size)] tracking-[var(--paragraph-p2-regular-letter-spacing)] leading-[var(--paragraph-p2-regular-line-height)] whitespace-nowrap [font-style:var(--paragraph-p2-regular-font-style)] animate-blink">
                  |
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Dashboard preview card */}
        <Card className="relative w-full max-w-[900px] h-48 lg:h-60 bg-neutral-gray-50 rounded-[25px] overflow-hidden border-[0.5px] border-solid border-slate-300 animate-slide-up animation-delay-600 hover:shadow-xl transition-all duration-500 hover:scale-105 mx-4 lg:mx-0">
          <CardContent className="p-0">
            <div className="relative h-48 lg:h-60 rounded-[25px] bg-gradient-to-br from-project-blue/5 to-project-green/5">
              <div className="absolute inset-4 lg:inset-10">
                {/* Doctor's office section */}
                <div className="absolute w-full max-w-[330px] h-32 lg:h-[156px] top-4 lg:top-[22px] left-0 rounded-[15px] bg-[linear-gradient(180deg,rgba(53,206,215,0.08)_0%,rgba(53,206,215,0.16)_100%)] animate-pulse-slow">
                  <div className="absolute w-full h-16 lg:h-[76px] top-8 lg:top-10 left-0">
                    {/* Placeholder for medical data visualization */}
                    <div className="absolute w-full h-4 lg:h-5 top-6 lg:top-7 left-0 bg-gradient-to-r from-project-blue/30 to-project-green/30 rounded animate-slide-right"></div>
                    <div className="absolute w-2/3 h-4 lg:h-5 top-6 lg:top-7 left-0 bg-gradient-to-r from-project-green/30 to-project-blue/30 rounded animate-slide-left"></div>

                    {/* Data badge */}
                    <div className="absolute w-32 lg:w-[179px] h-8 lg:h-[47px] top-3 lg:top-3.5 left-4 lg:left-[18px] bg-neutral-gray-50 rounded-[200px] overflow-hidden shadow-[0px_4px_10.4px_-3.5px_#16023113,0px_0.48px_1.26px_-1.75px_#1602312a] animate-bounce-slow">
                      <div className="relative h-full rounded-[200px] flex items-center justify-center">
                        <div className="text-xs lg:text-[13.8px] font-medium text-project-blue">
                          {language === 'en' ? 'Your Health Data' : 'Vos Données de Santé'}
                        </div>
                        <div className="absolute inset-0 rounded-[200px] border-2 border-solid border-[#05a5ce59]" />
                      </div>
                    </div>

                    {/* Icon box */}
                    <div className="absolute w-12 lg:w-[76px] h-12 lg:h-[76px] top-0 right-8 lg:right-[76px] bg-neutral-gray-50 rounded-[20px] overflow-hidden shadow-[0px_4px_10.4px_-3.5px_#16023113,0px_0.48px_1.26px_-1.75px_#1602312a] animate-spin-slow">
                      <div className="relative h-full rounded-[20px] flex items-center justify-center">
                        <div className="w-6 lg:w-[49px] h-6 lg:h-[43px] bg-gradient-to-br from-project-blue to-project-green rounded"></div>
                        <div className="absolute inset-0 rounded-[20px] border-2 border-solid border-[#05a5ce59]" />
                      </div>
                    </div>

                    {/* Small icon */}
                    <div className="absolute w-8 lg:w-11 h-8 lg:h-11 top-2 lg:top-[15px] right-0 lg:right-[44px] bg-neutral-gray-50 rounded-[60px] overflow-hidden shadow-[0px_4px_10.4px_-3.5px_#16023113,0px_0.48px_1.26px_-1.75px_#1602312a] animate-pulse">
                      <div className="relative h-full rounded-[60px] flex items-center justify-center">
                        <div className="w-4 lg:w-6 h-4 lg:h-6 bg-project-blue rounded-full"></div>
                        <div className="absolute inset-0 rounded-[60px] border-2 border-solid border-[#05a5ce59]" />
                      </div>
                    </div>
                  </div>

                  <div className="absolute h-4 lg:h-[18px] top-2 lg:top-3 left-16 lg:left-24 opacity-60 text-xs lg:text-[13.8px] font-medium text-project-blue">
                    {language === 'en' ? "Your Doctor's Office" : 'Cabinet de votre Médecin'}
                  </div>
                </div>

                {/* Badge slider visualization */}
                <div className="absolute w-full max-w-[440px] h-32 lg:h-[200px] top-0 right-0 animate-float">
                  <div className="w-full h-full bg-gradient-to-br from-project-green/10 to-project-blue/10 rounded-lg flex items-center justify-center">
                    <div className="text-xs lg:text-sm font-medium text-project-blue opacity-60">
                      {language === 'en' ? 'Health Records Dashboard' : 'Tableau de Bord Médical'}
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute inset-0 rounded-[25px] border border-solid border-[#13388214]" />
            </div>
          </CardContent>
        </Card>

        {/* Call to action buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-2.5 relative animate-slide-up animation-delay-800 px-4">
          <ScrollToSection targetId="download">
            <Button className="w-full sm:w-auto px-6 lg:px-10 py-2 bg-project-blue rounded-[20px] font-paragraph-p2-semi-bold font-[number:var(--paragraph-p2-semi-bold-font-weight)] text-shadeswhite text-sm lg:text-[length:var(--paragraph-p2-semi-bold-font-size)] tracking-[var(--paragraph-p2-semi-bold-letter-spacing)] leading-[var(--paragraph-p2-semi-bold-line-height)] [font-style:var(--paragraph-p2-semi-bold-font-style)] hover:bg-project-blue/90 transition-all duration-300 hover:scale-105 hover:shadow-lg">
              {t.getStarted}
            </Button>
          </ScrollToSection>

          <ScrollToSection targetId="contact">
            <Button
              variant="outline"
              className="w-full sm:w-auto px-6 lg:px-10 py-2 rounded-[20px] border border-solid border-slate-300 font-paragraph-p2-semi-bold font-[number:var(--paragraph-p2-semi-bold-font-weight)] text-neutral-gray-900 text-sm lg:text-[length:var(--paragraph-p2-semi-bold-font-size)] tracking-[var(--paragraph-p2-semi-bold-letter-spacing)] leading-[var(--paragraph-p2-semi-bold-line-height)] [font-style:var(--paragraph-p2-semi-bold-font-style)] hover:bg-neutral-gray-100 transition-all duration-300 hover:scale-105"
            >
              {t.bookDemo}
            </Button>
          </ScrollToSection>
        </div>
      </div>

      {/* Background gradient */}
      <div className="absolute w-96 lg:w-[961px] h-96 lg:h-[871px] top-32 lg:top-[132px] right-0 lg:left-[1035px] rounded-[558.72px_0px_0px_558.72px] [background:radial-gradient(50%_50%_at_21%_3%,rgba(6,180,190,0.12)_72%,rgba(255,255,255,1)_100%)] opacity-75 animate-pulse-slow" />
    </section>
  );
};