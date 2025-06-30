import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { useLanguage } from "../../../../hooks/useLanguage";
import { translations } from "../../../../utils/translations";

export const DownloadSection = (): JSX.Element => {
  const { language } = useLanguage();
  const t = translations[language].download;

  return (
    <section id="download" className="flex flex-col items-center gap-16 py-20 px-4 md:px-16 lg:px-[120px] relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-gradient-to-r from-project-blue/20 to-project-green/20 rounded-full blur-3xl animate-pulse top-10 left-10"></div>
        <div className="absolute w-80 h-80 bg-gradient-to-r from-project-green/20 to-project-blue/20 rounded-full blur-3xl animate-pulse bottom-10 right-10 animation-delay-2000"></div>
      </div>

      {/* Header badge */}
      <div className="flex items-center justify-center gap-3 pl-3.5 pr-[18px] py-1.5 relative rounded-[999px] overflow-hidden border border-solid border-slate-200 [background:radial-gradient(50%_50%_at_50%_50%,rgba(218,249,251,1)_0%,rgba(230,246,247,1)_13%,rgba(244,254,255,1)_30%,rgba(251,253,253,1)_58%,rgba(236,247,252,1)_68%,rgba(238,244,246,1)_80%,rgba(218,249,251,1)_100%)] animate-fade-in">
        <Badge className="gap-1 px-3 py-0 bg-shadeswhite rounded-[100px] border-[0.75px] border-solid border-[#bbcaf3] inline-flex items-center">
          <div className="relative w-[5px] h-[5px] bg-project-blue rounded-[100px] blur-[1.5px] animate-pulse" />
          <span className="relative w-fit mt-[-0.75px] font-paragraph-p2-regular text-project-blue">
            NHA
          </span>
        </Badge>

        <div className="relative flex-1 font-paragraph-p1-regular text-[#1e293bbf] text-center">
          {t.badge}
        </div>

        <div className="absolute w-[26px] h-[199px] top-[-79px] left-[-35px] bg-[#fffffff2] rotate-[26.88deg] blur-[2.5px]" />
      </div>

      {/* Main content */}
      <div className="flex flex-col items-center gap-10 relative z-10">
        <div className="flex flex-col items-center gap-6 text-center">
          <h2 className="font-heading-h2-small-semi-bold text-project-blue animate-slide-up">
            {t.title}
          </h2>
          <p className="font-heading-h4-small-semi-bold text-shadesblack max-w-2xl animate-slide-up animation-delay-200">
            {t.subtitle}
          </p>
        </div>

        {/* Download cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
          {/* Mobile Apps */}
          <Card className="bg-shadeswhite rounded-2xl border border-solid border-slate-300 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-slide-up animation-delay-400">
            <CardContent className="p-8 flex flex-col items-center gap-6">
              <div className="w-20 h-20 bg-gradient-to-br from-project-blue to-project-green rounded-2xl flex items-center justify-center animate-bounce-slow">
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.523 15.3414c-.5511 0-.9993-.4482-.9993-.9993s.4482-.9993.9993-.9993.9993.4482.9993.9993-.4482.9993-.9993.9993zm-11.046 0c-.5511 0-.9993-.4482-.9993-.9993s.4482-.9993.9993-.9993.9993.4482.9993.9993-.4482.9993-.9993.9993zm11.046-6.6772c-.5511 0-.9993-.4482-.9993-.9993s.4482-.9993.9993-.9993.9993.4482.9993.9993-.4482.9993-.9993.9993zm-11.046 0c-.5511 0-.9993-.4482-.9993-.9993s.4482-.9993.9993-.9993.9993.4482.9993.9993-.4482.9993-.9993.9993z"/>
                </svg>
              </div>
              
              <div className="flex flex-col gap-4 w-full">
                <Button className="w-full bg-black text-white hover:bg-gray-800 rounded-lg py-3 flex items-center gap-3 transition-all duration-300 hover:scale-105">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                  </svg>
                  {t.playStore}
                </Button>
                
                <Button className="w-full bg-black text-white hover:bg-gray-800 rounded-lg py-3 flex items-center gap-3 transition-all duration-300 hover:scale-105">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z"/>
                  </svg>
                  {t.appStore}
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* QR Code */}
          <Card className="bg-shadeswhite rounded-2xl border border-solid border-slate-300 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-slide-up animation-delay-600">
            <CardContent className="p-8 flex flex-col items-center gap-6">
              <div className="w-40 h-40 bg-white border-2 border-slate-200 rounded-2xl flex items-center justify-center animate-pulse">
                <div className="w-32 h-32 bg-gradient-to-br from-project-blue to-project-green opacity-20 rounded-lg flex items-center justify-center">
                  <svg className="w-16 h-16 text-project-blue" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M3,11H5V13H3V11M11,5H13V9H11V5M9,11H13V15H9V11M15,11H17V13H15V11M19,5H21V9H19V5M5,5H9V9H5V5M3,19H5V21H3V19M5,19H9V21H5V19M11,19H13V21H11V19M15,19H17V21H15V19M19,19H21V21H19V19Z"/>
                  </svg>
                </div>
              </div>
              
              <div className="text-center">
                <h3 className="font-heading-h5-semi-bold text-neutral-gray-900 mb-2">
                  {t.qrCode}
                </h3>
                <p className="font-paragraph-p2-regular text-neutral-gray-600 text-sm">
                  {language === 'en' ? 'Quick access to download' : 'Accès rapide au téléchargement'}
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Features preview */}
          <Card className="bg-gradient-to-br from-project-blue to-project-green rounded-2xl border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-slide-up animation-delay-800">
            <CardContent className="p-8 flex flex-col items-center gap-6 text-white">
              <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center animate-spin-slow">
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4M12,6A6,6 0 0,0 6,12A6,6 0 0,0 12,18A6,6 0 0,0 18,12A6,6 0 0,0 12,6M12,8A4,4 0 0,1 16,12A4,4 0 0,1 12,16A4,4 0 0,1 8,12A4,4 0 0,1 12,8Z"/>
                </svg>
              </div>
              
              <div className="text-center">
                <h3 className="font-heading-h5-semi-bold text-white mb-4">
                  {language === 'en' ? 'Coming Soon' : 'Bientôt Disponible'}
                </h3>
                <ul className="text-sm space-y-2 text-white/90">
                  <li>• {language === 'en' ? 'Offline Access' : 'Accès Hors Ligne'}</li>
                  <li>• {language === 'en' ? 'Real-time Sync' : 'Synchronisation Temps Réel'}</li>
                  <li>• {language === 'en' ? 'Biometric Security' : 'Sécurité Biométrique'}</li>
                  <li>• {language === 'en' ? 'Emergency Access' : 'Accès d\'Urgence'}</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};