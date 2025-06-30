import React from "react";
import { Card, CardContent, CardFooter } from "../../../../components/ui/card";
import { Separator } from "../../../../components/ui/separator";
import { Section } from "../../../../components/ui/Section";
import { useLanguage } from "../../../../hooks/useLanguage";
import { translations } from "../../../../utils/translations";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

export const FooterSection = (): JSX.Element => {
  const { language } = useLanguage();
  const t = translations[language].footer;

  const socialIcons = [
    { icon: <Facebook className="w-4 h-4" />, link: "#", name: "Facebook" },
    { icon: <Twitter className="w-4 h-4" />, link: "#", name: "Twitter" },
    { icon: <Linkedin className="w-4 h-4" />, link: "#", name: "LinkedIn" },
    { icon: <Instagram className="w-4 h-4" />, link: "#", name: "Instagram" },
  ];

  return (
    <Section background="dark" padding="lg">
      <Card className="bg-project-primary-dark border-neutral-700 text-white">
        <CardContent className="p-6 md:p-12 space-y-8 md:space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Company Info */}
            <div className="space-y-6">
              {/* Logo */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-project-blue to-project-green rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-lg">M</span>
                </div>
                <div>
                  <div className="text-xl font-black">
                    <span className="text-white">MI-</span>
                    <span className="text-project-blue-light">HEALTH</span>
                  </div>
                  <div className="text-xs font-bold text-neutral-300 uppercase tracking-wide">
                    {language === 'en' ? 'Digital Healthcare' : 'Santé Numérique'}
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-body text-neutral-300 leading-relaxed max-w-md">
                {t.description}
              </p>

              {/* NHA HealthTech Reference */}
              <div className="bg-white/10 rounded-xl p-4 border border-white/20">
                <p className="text-body-sm text-neutral-300 mb-2">
                  {t.developedBy}:
                </p>
                <a 
                  href="https://nha-healthtech.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-project-blue-light hover:text-white transition-colors font-semibold text-lg"
                >
                  NHA-HEALTHTECH
                </a>
                <p className="text-xs text-neutral-400 mt-1">
                  {t.visitWebsite}
                </p>
              </div>

              {/* Social Media */}
              <div className="flex items-center gap-3">
                {socialIcons.map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <h4 className="text-h5 font-semibold text-white">
                {t.credentials}
              </h4>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <h5 className="text-body font-semibold text-white">
                    {t.email}
                  </h5>
                  <p className="text-body-sm text-neutral-300">
                    devguyuix@gmail.com
                  </p>
                </div>
                
                <div className="space-y-2">
                  <h5 className="text-body font-semibold text-white">
                    {t.telephone}
                  </h5>
                  <p className="text-body-sm text-neutral-300">
                    +237 654 935 347
                  </p>
                </div>
              </div>
            </div>
          </div>

          <Separator className="bg-white/20" />
        </CardContent>

        <CardFooter className="flex flex-col sm:flex-row justify-between items-center gap-4 p-6 md:p-12 pt-0">
          <p className="text-body-sm font-medium text-neutral-300">
            {t.since}
          </p>
          <p className="text-body-sm font-medium text-neutral-300">
            {t.rights}
          </p>
        </CardFooter>
      </Card>
    </Section>
  );
};