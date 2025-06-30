import React from "react";
import { Button } from "../../components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "../../components/ui/navigation-menu";
import { LanguageToggle } from "../../components/LanguageToggle";
import { ScrollToSection } from "../../components/ScrollToSection";
import { useLanguage } from "../../hooks/useLanguage";
import { translations } from "../../utils/translations";
import { AboutSection } from "./sections/AboutSection";
import { ContactSection } from "./sections/ContactSection/ContactSection";
import { DownloadSection } from "./sections/DownloadSection";
import { FaqSection } from "./sections/FaqSection";
import { FeaturesSection } from "./sections/FeaturesSection";
import { FooterSection } from "./sections/FooterSection";
import { GetStartedSection } from "./sections/GetStartedSection";
import { HeaderSection } from "./sections/HeaderSection";
import { PricingSection } from "./sections/PricingSection";
import { SecuritySection } from "./sections/SecuritySection";
import { TeamSection } from "./sections/TeamSection";
import { TestimonialsSection } from "./sections/TestimonialsSection";
import { UserProfileSection } from "./sections/UserProfileSection";
import { Menu, X } from "lucide-react";

export const MacbookPro = (): JSX.Element => {
  const { language } = useLanguage();
  const t = translations[language];
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  // Navigation menu items data
  const navItems = [
    { name: t.nav.features, active: true, targetId: "features" },
    { name: t.nav.product, active: false, targetId: "user-profile" },
    { name: t.nav.testimonials, active: false, targetId: "testimonials" },
    { name: t.nav.pricing, active: false, targetId: "pricing" },
    { name: t.nav.faq, active: false, targetId: "faq" },
    { name: t.nav.contact, active: false, targetId: "contact" },
  ];

  return (
    <div className="bg-white flex flex-row justify-center w-full">
      <div className="bg-white w-full relative">
        {/* Fixed navigation bar */}
        <div className="flex flex-col w-full items-center justify-center gap-2.5 pt-4 pb-2 px-4 lg:px-[120px] fixed top-0 left-0 z-50 backdrop-blur-md bg-white/90">
          <div className="flex w-full max-w-[1320px] items-center justify-between px-4 lg:px-9 py-4 lg:py-6 relative bg-neutral-gray-50 rounded-xl border border-solid border-slate-300 shadow-lg">
            {/* Logo */}
            <div className="relative flex items-center h-9 animate-fade-in">
              <div className="w-[41px] h-9 flex items-center justify-center">
                <img 
                  src="/src/assets/LOGO.png" 
                  alt="Mi-Health Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="ml-[2px]">
                <div className="[font-family:'Poppins',Helvetica] font-black text-transparent text-sm lg:text-base">
                  <span className="text-black">MI-</span>
                  <span className="text-[#01a0c6]">HEALTH</span>
                </div>
                <div className="[font-family:'Open_Sans',Helvetica] font-bold text-black text-[6px] lg:text-[8.4px]">
                  {language === 'en' ? 'Digitally Transforming Healthcare' : 'Transformation Numérique des Soins'}
                </div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <NavigationMenu className="hidden lg:flex">
              <NavigationMenuList>
                {navItems.map((item, index) => (
                  <NavigationMenuItem key={index}>
                    <ScrollToSection
                      targetId={item.targetId}
                      className={`inline-flex items-center justify-center gap-2.5 px-2 py-0.5 relative flex-[0_0_auto] rounded transition-all duration-300 hover:scale-105 ${
                        item.active
                          ? "bg-neutral-gray-50 border-[0.7px] border-solid border-slate-300 shadow-[0px_4px_15px_#00000014]"
                          : "hover:bg-neutral-gray-100"
                      }`}
                    >
                      <div
                        className={`relative w-fit mt-[-0.70px] font-paragraph-p2-semi-bold font-[number:var(--paragraph-p2-semi-bold-font-weight)] text-sm lg:text-[length:var(--paragraph-p2-semi-bold-font-size)] tracking-[var(--paragraph-p2-semi-bold-letter-spacing)] leading-[var(--paragraph-p2-semi-bold-line-height)] whitespace-nowrap [font-style:var(--paragraph-p2-semi-bold-font-style)] transition-colors ${
                          item.active
                            ? "text-shadesblack"
                            : "text-neutral-gray-600 hover:text-project-blue"
                        }`}
                      >
                        {item.name}
                      </div>
                    </ScrollToSection>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>

            {/* Mobile menu button */}
            <button
              className="lg:hidden p-2 rounded-md hover:bg-neutral-gray-100 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-neutral-gray-700" />
              ) : (
                <Menu className="w-6 h-6 text-neutral-gray-700" />
              )}
            </button>

            {/* CTA Button and Language Toggle - Desktop */}
            <div className="hidden lg:flex items-center gap-2">
              <ScrollToSection targetId="download">
                <Button className="bg-project-blue rounded-[20px] px-4 lg:px-6 py-2 hover:bg-project-blue/90 transition-all duration-300 hover:scale-105 hover:shadow-lg">
                  <span className="font-paragraph-p2-semi-bold font-[number:var(--paragraph-p2-semi-bold-font-weight)] text-neutral-gray-50 text-sm lg:text-[length:var(--paragraph-p2-semi-bold-font-size)] tracking-[var(--paragraph-p2-semi-bold-letter-spacing)] leading-[var(--paragraph-p2-semi-bold-line-height)] whitespace-nowrap [font-style:var(--paragraph-p2-semi-bold-font-style)]">
                    {t.nav.getStarted}
                  </span>
                </Button>
              </ScrollToSection>
              <LanguageToggle />
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden w-full max-w-[1320px] px-4 animate-slide-up">
              <div className="bg-neutral-gray-50 rounded-xl border border-solid border-slate-300 shadow-lg p-4 space-y-4">
                {navItems.map((item, index) => (
                  <ScrollToSection
                    key={index}
                    targetId={item.targetId}
                    className="block w-full text-left p-3 rounded-lg hover:bg-neutral-gray-100 transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <div className="font-paragraph-p2-semi-bold text-neutral-gray-700 hover:text-project-blue transition-colors">
                      {item.name}
                    </div>
                  </ScrollToSection>
                ))}
                
                <div className="flex items-center gap-2 pt-4 border-t border-slate-300">
                  <ScrollToSection targetId="download" className="flex-1">
                    <Button 
                      className="w-full bg-project-blue rounded-[20px] px-4 py-2 hover:bg-project-blue/90 transition-all duration-300"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <span className="font-paragraph-p2-semi-bold text-neutral-gray-50 text-sm">
                        {t.nav.getStarted}
                      </span>
                    </Button>
                  </ScrollToSection>
                  <LanguageToggle />
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="flex flex-col w-full items-center gap-16 lg:gap-[120px] pt-[140px] lg:pt-[200px] pb-0 px-0 bg-neutral-gray-50">
          <HeaderSection />
          <UserProfileSection />
          <FeaturesSection />
          <GetStartedSection />
          <SecuritySection />
          <PricingSection />
          <TeamSection />
          <TestimonialsSection />
          <FaqSection />
          <ContactSection />
          <DownloadSection />
          <AboutSection />
          <FooterSection />
        </div>
      </div>
    </div>
  );
};