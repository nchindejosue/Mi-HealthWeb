import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Section } from "../../../../components/ui/Section";
import { SectionHeader } from "../../../../components/ui/SectionHeader";
import { useLanguage } from "../../../../hooks/useLanguage";
import { translations } from "../../../../utils/translations";
import { Download, Smartphone, QrCode, Star } from "lucide-react";

export const DownloadSection = (): JSX.Element => {
  const { language } = useLanguage();
  const t = translations[language].download;

  return (
    <Section id="download" background="secondary" padding="xl" className="relative">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-96 h-96 bg-gradient-to-r from-project-blue/10 to-project-green/10 rounded-full blur-3xl animate-pulse top-10 left-10"></div>
        <div className="absolute w-80 h-80 bg-gradient-to-r from-project-green/10 to-project-blue/10 rounded-full blur-3xl animate-pulse bottom-10 right-10 delay-1000"></div>
      </div>

      <div className="relative z-10 space-y-12 md:space-y-16">
        <SectionHeader
          badge={t.badge}
          title={t.title}
          subtitle={t.subtitle}
          centered
        />

        {/* Download cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {/* Mobile Apps */}
          <Card className="group bg-white border-neutral-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in">
            <CardContent className="p-6 md:p-8 flex flex-col items-center gap-6 text-center">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-project-blue to-project-green rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Smartphone className="w-8 h-8 md:w-10 md:h-10 text-white" />
              </div>
              
              <div className="space-y-3">
                <h3 className="text-h5 font-semibold text-neutral-900">
                  {language === 'en' ? 'Mobile Apps' : 'Applications Mobiles'}
                </h3>
                <p className="text-body text-neutral-600">
                  {language === 'en' 
                    ? 'Download our app for iOS and Android devices' 
                    : 'Téléchargez notre app pour iOS et Android'
                  }
                </p>
              </div>
              
              <div className="flex flex-col gap-3 w-full">
                <Button className="w-full bg-black text-white hover:bg-gray-800 rounded-lg py-3 flex items-center gap-3 transition-all duration-300 hover:scale-105">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                  </svg>
                  <span className="text-sm font-medium">{t.playStore}</span>
                </Button>
                
                <Button className="w-full bg-black text-white hover:bg-gray-800 rounded-lg py-3 flex items-center gap-3 transition-all duration-300 hover:scale-105">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z"/>
                  </svg>
                  <span className="text-sm font-medium">{t.appStore}</span>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* QR Code */}
          <Card className="group bg-white border-neutral-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in delay-200">
            <CardContent className="p-6 md:p-8 flex flex-col items-center gap-6 text-center">
              <div className="w-32 h-32 md:w-40 md:h-40 bg-gradient-to-br from-neutral-100 to-neutral-200 border-2 border-neutral-300 rounded-2xl flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                <div className="w-24 h-24 md:w-32 md:h-32 bg-gradient-to-br from-project-blue/20 to-project-green/20 rounded-lg flex items-center justify-center">
                  <QrCode className="w-12 h-12 md:w-16 md:h-16 text-project-blue" />
                </div>
              </div>
              
              <div className="space-y-3">
                <h3 className="text-h5 font-semibold text-neutral-900">
                  {t.qrCode}
                </h3>
                <p className="text-body text-neutral-600">
                  {t.qrDescription}
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Features preview */}
          <Card className="group bg-gradient-to-br from-project-blue to-project-green border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in delay-300">
            <CardContent className="p-6 md:p-8 flex flex-col items-center gap-6 text-white text-center">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-white/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Star className="w-8 h-8 md:w-10 md:h-10 text-white animate-pulse" />
              </div>
              
              <div className="space-y-4">
                <h3 className="text-h5 font-semibold text-white">
                  {t.comingSoon}
                </h3>
                <ul className="space-y-2 text-sm text-white/90">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                    {t.features.offline}
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                    {t.features.sync}
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                    {t.features.security}
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                    {t.features.emergency}
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Additional CTA */}
        <div className="text-center">
          <p className="text-body text-neutral-600 mb-4">
            {language === 'en' 
              ? 'Get notified when the app is available' 
              : 'Soyez notifié quand l\'app sera disponible'
            }
          </p>
          <Button className="btn btn-primary btn-lg">
            <Download className="w-5 h-5" />
            {language === 'en' ? 'Notify Me' : 'Me Notifier'}
          </Button>
        </div>
      </div>
    </Section>
  );
};