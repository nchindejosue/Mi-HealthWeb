import React from "react";
import { Section } from "../../../../components/ui/Section";
import { SectionHeader } from "../../../../components/ui/SectionHeader";
import { Card, CardContent } from "../../../../components/ui/card";
import { useLanguage } from "../../../../hooks/useLanguage";
import { translations } from "../../../../utils/translations";
import { ShieldCheck, Lock, Globe, Key, Eye, Award, Shield, ArrowRight } from "lucide-react";

export const SecuritySection = (): JSX.Element => {
  const { language } = useLanguage();
  const t = translations[language].security;

  const securityIcons = [ShieldCheck, Lock, Globe, Key, Eye, Award];

  return (
    <Section id="security">
      <div className="space-y-12 md:space-y-16">
        {/* Header */}
        <div className="space-y-8">
          <SectionHeader
            badge={t.badge}
            title={t.title}
            subtitle={t.subtitle}
            centered={false}
          />

          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-gradient-to-br from-project-blue to-project-green rounded-xl flex items-center justify-center">
              <Shield className="w-8 h-8 text-white" />
            </div>
          </div>
        </div>

        {/* Security features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {t.features.map((feature, index) => {
            const IconComponent = securityIcons[index];
            return (
              <Card
                key={index}
                className="group bg-white border-neutral-200 hover:shadow-lg transition-all duration-300 hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 bg-project-blue/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-6 h-6 text-project-blue" />
                  </div>

                  <div className="space-y-2">
                    <h4 className="text-h5 font-semibold text-project-blue">
                      {feature.title}
                    </h4>
                    <p className="text-body text-neutral-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Footer section */}
        <div className="text-center space-y-6 animate-fade-in delay-700">
          <div className="w-16 h-16 bg-gradient-to-br from-project-blue to-project-green rounded-full flex items-center justify-center mx-auto">
            <Shield className="w-8 h-8 text-white" />
          </div>

          <h3 className="text-h4 font-semibold text-neutral-900 max-w-3xl mx-auto">
            {t.footer}
          </h3>

          <button className="inline-flex items-center gap-2 text-project-blue hover:text-project-blue-dark transition-colors group">
            <span className="text-body font-medium">{t.learnMore}</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </Section>
  );
};