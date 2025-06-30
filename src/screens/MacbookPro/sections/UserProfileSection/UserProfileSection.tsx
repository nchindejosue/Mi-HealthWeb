import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import { Section } from "../../../../components/ui/Section";
import { SectionHeader } from "../../../../components/ui/SectionHeader";
import { useLanguage } from "../../../../hooks/useLanguage";
import { translations } from "../../../../utils/translations";
import { Heart, Video, Brain } from "lucide-react";

export const UserProfileSection = (): JSX.Element => {
  const { language } = useLanguage();
  const t = translations[language].userProfile;

  const features = [
    {
      icon: <Heart className="w-8 h-8 text-project-blue" />,
      title: t.features.phr.title,
      description: t.features.phr.description,
    },
    {
      icon: <Video className="w-8 h-8 text-project-blue" />,
      title: t.features.telemedicine.title,
      description: t.features.telemedicine.description,
    },
    {
      icon: <Brain className="w-8 h-8 text-project-blue" />,
      title: t.features.ai.title,
      description: t.features.ai.description,
    },
  ];

  return (
    <Section id="user-profile" background="secondary">
      <div className="space-y-12 md:space-y-16">
        <SectionHeader
          badge={t.badge}
          title={t.title}
          subtitle={t.subtitle}
          centered
        />

        <Card className="bg-white border-neutral-200 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] animate-slide-up">
          <CardContent className="p-6 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Left side - Company info */}
              <div className="space-y-6 animate-slide-in-left">
                <div className="space-y-4">
                  <h2 className="text-h2 font-bold text-project-blue">
                    {t.title}
                  </h2>
                  <h3 className="text-h4 font-semibold text-neutral-900">
                    {t.subtitle}
                  </h3>
                </div>
              </div>

              {/* Right side - Features */}
              <div className="space-y-6">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-4 rounded-xl hover:bg-neutral-50 transition-all duration-300 hover:scale-105 animate-slide-in-right"
                    style={{ animationDelay: `${index * 200}ms` }}
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-project-blue/10 to-project-green/10 rounded-xl flex items-center justify-center">
                      {feature.icon}
                    </div>

                    <div className="space-y-2">
                      <h4 className="text-h5 font-semibold text-project-blue">
                        {feature.title}
                      </h4>
                      <p className="text-body text-neutral-600 leading-relaxed">
                        {feature.description}
                      </p>
                      <button className="text-body-sm font-medium text-neutral-900 hover:text-project-blue transition-colors">
                        {language === 'en' ? 'Learn more' : 'En savoir plus'}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </Section>
  );
};