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
    { name: t.nav.download, targetId: "download" },
    { name: t.nav.features, targetId: "features" },
    { name: t.nav.product, targetId: "user-profile" },
    { name: t.nav.testimonials, targetId: "testimonials" },
    { name: t.nav.pricing, targetId: "pricing" },
    { name: t.nav.faq, targetId: "faq" },
    { name: t.nav.contact, targetId: "contact" },
  ];

  return (
    <div className="bg-white flex flex-row justify-center w-full min-h-screen">
      <div className="bg-white w-full relative">
        {/* Fixed navigation bar */}
        <div className="flex flex-col w-full items-center justify-center gap-2 pt-4 pb-2 px-4 lg:px-8 fixed top-0 left-0 z-50 backdrop-blur-md bg-white/95 border-b border-neutral-200/50">
          <div className="flex w-full max-w-7xl items-center justify-between px-4 lg:px-6 py-3 lg:py-4 relative bg-neutral-50/80 rounded-xl border border-neutral-200 shadow-sm">
            {/* Logo */}
            <div className="relative flex items-center h-8 lg:h-10 animate-fade-in">
              <div className="w-8 h-8 lg:w-10 lg:h-10 flex items-center justify-center">
                <div className="w-full h-full bg-gradient-to-br from-project-blue to-project-green rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm lg:text-base">M</span>
                </div>
              </div>
              <div className="ml-2">
                <div className="font-black text-sm lg:text-base">
                  <span className="text-neutral-900">MI-</span>
                  <span className="text-project-blue">HEALTH</span>
                </div>
                <div className="font-bold text-[6px] lg:text-[8px] text-neutral-600 uppercase tracking-wide">
                  {language === 'en' ? 'Digital Healthcare' : 'Santé Numérique'}
                </div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <NavigationMenu className="hidden lg:flex">
              <NavigationMenuList className="flex items-center gap-1">
                {navItems.map((item, index) => (
                  <NavigationMenuItem key={index}>
                    <ScrollToSection
                      targetId={item.targetId}
                      className="inline-flex items-center justify-center px-3 py-2 text-sm font-medium text-neutral-600 hover:text-project-blue hover:bg-neutral-100 rounded-lg transition-all duration-200 focus-ring"
                    >
                      {item.name}
                    </ScrollToSection>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>

            {/* Mobile menu button */}
            <button
              className="lg:hidden p-2 rounded-lg hover:bg-neutral-100 transition-colors focus-ring"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5 text-neutral-700" />
              ) : (
                <Menu className="w-5 h-5 text-neutral-700" />
              )}
            </button>

            {/* CTA Button and Language Toggle - Desktop */}
            <div className="hidden lg:flex items-center gap-3">
              <ScrollToSection targetId="download">
                <Button className="btn btn-primary px-6 py-2 text-sm">
                  {t.nav.getStarted}
                </Button>
              </ScrollToSection>
              <LanguageToggle />
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden w-full max-w-7xl px-4 animate-slide-up">
              <div className="bg-white rounded-xl border border-neutral-200 shadow-lg p-4 space-y-2">
                {navItems.map((item, index) => (
                  <ScrollToSection
                    key={index}
                    targetId={item.targetId}
                    className="block w-full text-left p-3 rounded-lg hover:bg-neutral-50 transition-colors focus-ring"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <div className="font-medium text-neutral-700 hover:text-project-blue transition-colors">
                      {item.name}
                    </div>
                  </ScrollToSection>
                ))}
                
                <div className="flex items-center gap-3 pt-4 border-t border-neutral-200">
                  <ScrollToSection targetId="download" className="flex-1">
                    <Button 
                      className="w-full btn btn-primary py-2 text-sm"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {t.nav.getStarted}
                    </Button>
                  </ScrollToSection>
                  <LanguageToggle />
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Main content with proper top spacing */}
        <div className="flex flex-col w-full items-center gap-16 lg:gap-24 pt-24 lg:pt-32 pb-0 px-0">
          <HeaderSection />
          <DownloadSection />
          <UserProfileSection />
          <FeaturesSection />
          <GetStartedSection />
          <SecuritySection />
          <PricingSection />
          <TeamSection />
          <TestimonialsSection />
          <FaqSection />
          <ContactSection />
          <AboutSection />
          <FooterSection />
        </div>
      </div>
    </div>
  );
};