import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Section } from "../../../../components/ui/Section";
import { ScrollToSection } from "../../../../components/ScrollToSection";
import { useLanguage } from "../../../../hooks/useLanguage";
import { translations } from "../../../../utils/translations";

export const HeaderSection = (): JSX.Element => {
  const { language } = useLanguage();
  const t = translations[language].header;

  return (
    <Section id="header" className="relative min-h-screen flex items-center justify-center">
      {/* Background gradients */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-96 h-96 bg-gradient-to-r from-project-blue/10 to-project-green/10 rounded-full blur-3xl animate-pulse top-20 left-10"></div>
        <div className="absolute w-80 h-80 bg-gradient-to-r from-project-green/10 to-project-blue/10 rounded-full blur-3xl animate-pulse bottom-20 right-10 delay-1000"></div>
      </div>

      {/* Background image */}
      <div 
        className="absolute inset-0 opacity-5 bg-cover bg-center hidden lg:block"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/4021779/pexels-photo-4021779.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)'
        }}
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Top banner */}
        <div className="flex justify-center mb-8 md:mb-12 animate-fade-in">
          <div className="flex items-center gap-3 px-4 py-2 bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200 rounded-full">
            <div className="flex items-center gap-2 px-3 py-1 bg-white rounded-full border border-blue-200">
              <div className="w-2 h-2 bg-project-blue rounded-full animate-pulse" />
              <span className="text-xs font-medium text-project-blue">MI-HEALTH</span>
            </div>
            <span className="text-sm text-neutral-600">{t.badge}</span>
          </div>
        </div>

        {/* Main content */}
        <div className="text-center space-y-8 md:space-y-12">
          {/* Headings */}
          <div className="space-y-4 md:space-y-6 animate-slide-up delay-200">
            <h1 className="text-responsive-display font-extrabold text-neutral-900 tracking-tight">
              <span className="block">{t.title1}</span>
              <span className="block text-project-blue animate-pulse">{t.title2}</span>
              <span className="block">{t.title3}</span>
              <span className="block text-project-blue animate-pulse">{t.title4}</span>
            </h1>

            <div className="space-y-2 max-w-4xl mx-auto">
              <p className="text-responsive-h3 font-semibold text-neutral-800">
                {t.subtitle1}
              </p>
              <p className="text-responsive-h3 font-semibold text-neutral-800">
                {t.subtitle2}
                <span className="inline-block w-1 h-8 bg-project-blue ml-1 animate-pulse"></span>
              </p>
            </div>
          </div>

          {/* Dashboard preview */}
          <div className="animate-slide-up delay-500">
            <Card className="max-w-5xl mx-auto bg-gradient-to-br from-neutral-50 to-neutral-100 border-neutral-200 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105">
              <CardContent className="p-0">
                <div className="relative h-48 md:h-64 lg:h-80 rounded-xl bg-gradient-to-br from-project-blue/5 to-project-green/5 overflow-hidden">
                  <div className="absolute inset-4 md:inset-8">
                    {/* Health data visualization */}
                    <div className="absolute top-4 left-0 w-full max-w-sm h-32 md:h-40 bg-gradient-to-br from-project-blue/10 to-project-green/10 rounded-xl animate-pulse">
                      <div className="p-4 space-y-3">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-project-blue/20 rounded-full"></div>
                          <div className="flex-1 h-4 bg-project-blue/20 rounded animate-pulse"></div>
                        </div>
                        <div className="space-y-2">
                          <div className="h-3 bg-project-green/20 rounded w-3/4 animate-pulse delay-200"></div>
                          <div className="h-3 bg-project-blue/20 rounded w-1/2 animate-pulse delay-300"></div>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-project-blue font-medium">
                            {language === 'en' ? 'Your Health Data' : 'Vos Données de Santé'}
                          </span>
                          <div className="w-6 h-6 bg-project-blue/30 rounded"></div>
                        </div>
                      </div>
                    </div>

                    {/* Dashboard elements */}
                    <div className="absolute top-0 right-0 w-full max-w-md h-full bg-gradient-to-br from-project-green/5 to-project-blue/5 rounded-xl flex items-center justify-center animate-float">
                      <div className="text-center space-y-2">
                        <div className="w-16 h-16 bg-gradient-to-br from-project-blue to-project-green rounded-xl mx-auto animate-spin-slow"></div>
                        <p className="text-sm font-medium text-project-blue opacity-60">
                          {language === 'en' ? 'Health Records Dashboard' : 'Tableau de Bord Médical'}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up delay-700">
            <ScrollToSection targetId="download">
              <Button className="btn btn-primary btn-lg">
                {t.getStarted}
              </Button>
            </ScrollToSection>

            <ScrollToSection targetId="contact">
              <Button className="btn btn-secondary btn-lg">
                {t.bookDemo}
              </Button>
            </ScrollToSection>
          </div>
        </div>
      </div>
    </Section>
  );
};