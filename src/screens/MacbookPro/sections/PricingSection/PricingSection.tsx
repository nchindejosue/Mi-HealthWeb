import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Section } from "../../../../components/ui/Section";
import { SectionHeader } from "../../../../components/ui/SectionHeader";
import { Separator } from "../../../../components/ui/separator";
import { ToggleGroup, ToggleGroupItem } from "../../../../components/ui/toggle-group";
import { useLanguage } from "../../../../hooks/useLanguage";
import { translations } from "../../../../utils/translations";
import { User, Briefcase, Globe, Check, Star } from "lucide-react";

export const PricingSection = (): JSX.Element => {
  const { language } = useLanguage();
  const t = translations[language].pricing;

  const pricingPlans = [
    {
      id: "individual",
      name: t.plans.individual.name,
      description: t.plans.individual.description,
      price: "0",
      currency: "XAF",
      icon: <User className="w-8 h-8" />,
      popular: false,
      features: t.plans.individual.features,
    },
    {
      id: "pro",
      name: t.plans.pro.name,
      description: t.plans.pro.description,
      price: "10K",
      currency: "XAF",
      icon: <Briefcase className="w-8 h-8" />,
      popular: true,
      features: t.plans.pro.features,
    },
    {
      id: "limitless",
      name: t.plans.limitless.name,
      description: t.plans.limitless.description,
      price: "15K",
      currency: "XAF",
      icon: <Globe className="w-8 h-8" />,
      popular: false,
      features: t.plans.limitless.features,
    },
  ];

  return (
    <Section id="pricing" background="secondary">
      {/* Background gradients */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-96 h-96 bg-gradient-to-r from-project-blue/10 to-project-green/10 rounded-full blur-3xl animate-pulse top-20 left-10"></div>
        <div className="absolute w-80 h-80 bg-gradient-to-r from-project-green/10 to-project-blue/10 rounded-full blur-3xl animate-pulse bottom-20 right-10 delay-1000"></div>
      </div>

      <div className="relative z-10 space-y-12 md:space-y-16">
        <SectionHeader
          badge={t.badge}
          title={t.title}
          subtitle={t.subtitle}
          centered
        />

        {/* Pricing toggle */}
        <div className="flex justify-center">
          <ToggleGroup
            type="single"
            defaultValue="monthly"
            className="bg-neutral-200 p-1 rounded-xl"
          >
            <ToggleGroupItem
              value="monthly"
              className="flex-1 px-6 py-3 rounded-lg text-sm font-medium data-[state=on]:bg-white data-[state=on]:shadow-sm transition-all"
            >
              {t.monthly}
            </ToggleGroupItem>
            <ToggleGroupItem
              value="annual"
              className="flex-1 px-6 py-3 rounded-lg text-sm font-medium data-[state=on]:bg-white data-[state=on]:shadow-sm transition-all"
            >
              {t.annual}
            </ToggleGroupItem>
          </ToggleGroup>
        </div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {pricingPlans.map((plan, index) => (
            <Card
              key={plan.id}
              className={`relative bg-white border-neutral-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in ${
                plan.popular ? 'ring-2 ring-project-blue' : ''
              }`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <div className="bg-project-blue text-white px-4 py-1 rounded-full text-xs font-medium flex items-center gap-1">
                    <Star className="w-3 h-3" />
                    {t.plans.pro.popular}
                  </div>
                </div>
              )}

              <CardContent className="p-6 md:p-8 space-y-6">
                {/* Plan header */}
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-project-blue to-project-green rounded-xl flex items-center justify-center text-white">
                    {plan.icon}
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-h5 font-bold text-neutral-900">
                      {plan.name}
                    </h3>
                    <p className="text-body-sm text-neutral-600">
                      {plan.description}
                    </p>
                  </div>

                  {/* Price */}
                  <div className="flex items-end gap-2">
                    <span className={`text-5xl font-bold ${
                      plan.popular 
                        ? 'bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent'
                        : 'text-neutral-900'
                    }`}>
                      {plan.price}
                    </span>
                    <span className={`text-lg font-semibold ${
                      plan.popular 
                        ? 'bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent'
                        : 'text-neutral-900'
                    }`}>
                      {plan.currency}
                    </span>
                    <span className="text-body text-neutral-500 mb-1">
                      {t.perUser}
                    </span>
                  </div>
                </div>

                {/* CTA buttons */}
                <div className="space-y-3">
                  <Button className="w-full btn btn-primary">
                    {t.getStarted}
                  </Button>
                  <Button className="w-full btn btn-secondary">
                    {plan.popular ? t.tryFree : t.contactSales}
                  </Button>
                </div>

                <Separator />

                {/* Features */}
                <div className="space-y-4">
                  <div className="space-y-2">
                    <h4 className="text-h6 font-semibold text-neutral-900">
                      {t.characteristics}
                    </h4>
                    <p className="text-body-sm text-neutral-600">
                      {t.characteristicsDesc}
                    </p>
                  </div>

                  <div className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-start gap-3"
                      >
                        <div className="w-5 h-5 bg-project-blue/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-3 h-3 text-project-blue" />
                        </div>
                        <p className="text-body-sm text-neutral-700">
                          {feature}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
};