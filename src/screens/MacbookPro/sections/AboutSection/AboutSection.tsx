import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card } from "../../../../components/ui/card";
import { Input } from "../../../../components/ui/input";
import { Section } from "../../../../components/ui/Section";
import { SectionHeader } from "../../../../components/ui/SectionHeader";
import { useLanguage } from "../../../../hooks/useLanguage";
import { translations } from "../../../../utils/translations";

export const AboutSection = (): JSX.Element => {
  const { language } = useLanguage();
  const t = translations[language].about;

  return (
    <Section id="about" background="secondary">
      <div className="space-y-12 md:space-y-16 text-center">
        <SectionHeader
          badge={t.badge}
          title={t.title}
          subtitle={t.subtitle}
          centered
        />

        <div className="max-w-md mx-auto">
          <Card className="flex items-center gap-3 p-2 bg-white border-neutral-200 shadow-sm rounded-xl">
            <Input
              placeholder={t.emailPlaceholder}
              className="flex-1 border-0 shadow-none focus:ring-0 focus-visible:ring-0 text-base"
            />
            <Button className="btn btn-primary px-6">
              {t.joinWaitlist}
            </Button>
          </Card>
        </div>
      </div>
    </Section>
  );
};