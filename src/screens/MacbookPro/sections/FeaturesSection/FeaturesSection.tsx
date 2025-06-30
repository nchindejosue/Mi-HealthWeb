import React from "react";
import { Section } from "../../../../components/ui/Section";
import { SectionHeader } from "../../../../components/ui/SectionHeader";
import { FeatureCard } from "../../../../components/ui/FeatureCard";
import { useLanguage } from "../../../../hooks/useLanguage";
import { translations } from "../../../../utils/translations";
import { Link, Shield, User, Lightbulb, Check } from "lucide-react";

export const FeaturesSection = (): JSX.Element => {
  const { language } = useLanguage();
  const t = translations[language].features;

  return (
    <Section id="features" className="relative">
      {/* Background gradients */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-96 h-96 bg-gradient-to-r from-project-blue/5 to-project-green/5 rounded-full blur-3xl animate-pulse top-20 left-10"></div>
        <div className="absolute w-80 h-80 bg-gradient-to-r from-project-green/5 to-project-blue/5 rounded-full blur-3xl animate-pulse bottom-20 right-10 delay-1000"></div>
      </div>

      <div className="relative z-10 space-y-12 md:space-y-16">
        <SectionHeader
          badge={t.badge}
          title={t.title}
          subtitle={t.subtitle}
          centered
        />

        {/* Feature cards grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {/* First row */}
          <FeatureCard
            icon={<Link className="w-8 h-8" />}
            title={t.cards.unite.title}
            description={t.cards.unite.description}
            variant="dark"
            className="animate-fade-in"
          />

          <div className="space-y-6 animate-fade-in delay-200">
            <FeatureCard
              icon={<Shield className="w-8 h-8" />}
              title={t.cards.security.title}
              description={t.cards.security.subtitle}
              variant="default"
            />
            
            <div className="space-y-4 p-6 bg-neutral-50 rounded-xl">
              {t.cards.security.points.map((point, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-project-blue/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-project-blue" />
                  </div>
                  <p className="text-body-sm text-neutral-700">{point}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Second row */}
          <FeatureCard
            icon={<User className="w-8 h-8" />}
            title={t.cards.control.title}
            description={t.cards.control.description}
            variant="default"
            className="animate-fade-in delay-300"
          />

          <FeatureCard
            icon={<Lightbulb className="w-8 h-8" />}
            title={t.cards.knowledge.title}
            description={t.cards.knowledge.description}
            variant="gradient"
            className="animate-fade-in delay-500"
          />
        </div>
      </div>
    </Section>
  );
};