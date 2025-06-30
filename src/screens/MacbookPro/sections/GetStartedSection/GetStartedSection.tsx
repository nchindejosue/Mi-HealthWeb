import React from "react";
import { Button } from "../../../../components/ui/button";
import { Section } from "../../../../components/ui/Section";
import { SectionHeader } from "../../../../components/ui/SectionHeader";
import { useLanguage } from "../../../../hooks/useLanguage";
import { translations } from "../../../../utils/translations";

export const GetStartedSection = (): JSX.Element => {
  const { language } = useLanguage();
  const t = translations[language].getStarted;

  return (
    <Section id="get-started" background="secondary">
      <div className="space-y-12 md:space-y-16">
        <SectionHeader
          badge={t.badge}
          title={t.title}
          subtitle={t.subtitle}
          centered
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left side - Steps */}
          <div className="space-y-8 animate-slide-in-left">
            <div className="space-y-6">
              {t.steps.map((step, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <div className="w-8 h-8 bg-gradient-to-br from-project-blue to-project-green rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    {index + 1}
                  </div>
                  <p className="text-body text-neutral-700 leading-relaxed">
                    {step}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="btn btn-primary">
                {t.getStarted}
              </Button>
              <Button className="btn btn-secondary">
                {t.bookDemo}
              </Button>
            </div>
          </div>

          {/* Right side - Image */}
          <div className="animate-slide-in-right">
            <div className="relative">
              <img
                className="w-full h-auto rounded-2xl shadow-xl"
                alt="Health journey illustration"
                src="https://images.pexels.com/photos/3823204/pexels-photo-3823204.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-project-blue/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};