import React from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../../../../components/ui/accordion";
import { Section } from "../../../../components/ui/Section";
import { SectionHeader } from "../../../../components/ui/SectionHeader";
import { useLanguage } from "../../../../hooks/useLanguage";
import { translations } from "../../../../utils/translations";

export const FaqSection = (): JSX.Element => {
  const { language } = useLanguage();
  const t = translations[language].faq;

  // Split questions into two columns
  const midpoint = Math.ceil(t.questions.length / 2);
  const leftQuestions = t.questions.slice(0, midpoint);
  const rightQuestions = t.questions.slice(midpoint);

  return (
    <Section id="faq" background="secondary">
      <div className="space-y-12 md:space-y-16">
        <SectionHeader
          badge={t.badge}
          title={t.title}
          subtitle={t.subtitle}
          centered
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {/* Left column */}
          <div className="space-y-4">
            <Accordion type="single" collapsible defaultValue="item-0">
              {leftQuestions.map((item, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-white rounded-xl border border-neutral-200 shadow-sm mb-4 overflow-hidden"
                >
                  <AccordionTrigger className="px-6 py-4 text-h6 font-semibold text-neutral-900 hover:no-underline hover:bg-neutral-50 transition-colors">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 py-4 text-body text-neutral-600 leading-relaxed">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Right column */}
          <div className="space-y-4">
            <Accordion type="single" collapsible>
              {rightQuestions.map((item, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-white rounded-xl border border-neutral-200 shadow-sm mb-4 overflow-hidden"
                >
                  <AccordionTrigger className="px-6 py-4 text-h6 font-semibold text-neutral-900 hover:no-underline hover:bg-neutral-50 transition-colors">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 py-4 text-body text-neutral-600 leading-relaxed">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </Section>
  );
};