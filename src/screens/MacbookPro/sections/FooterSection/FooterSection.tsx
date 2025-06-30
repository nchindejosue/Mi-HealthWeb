import React from "react";
import { Card, CardContent, CardFooter } from "../../../../components/ui/card";
import { Separator } from "../../../../components/ui/separator";
import { useLanguage } from "../../../../hooks/useLanguage";
import { translations } from "../../../../utils/translations";

export const FooterSection = (): JSX.Element => {
  const { language } = useLanguage();
  const t = translations[language].footer;

  // Social media icons data
  const socialIcons = [
    { src: "https://images.pexels.com/photos/1552617/pexels-photo-1552617.jpeg?auto=compress&cs=tinysrgb&w=24&h=24&dpr=1", alt: "Facebook", link: "#" },
    { src: "https://images.pexels.com/photos/1552617/pexels-photo-1552617.jpeg?auto=compress&cs=tinysrgb&w=24&h=24&dpr=1", alt: "Twitter", link: "#" },
    { src: "https://images.pexels.com/photos/1552617/pexels-photo-1552617.jpeg?auto=compress&cs=tinysrgb&w=24&h=24&dpr=1", alt: "LinkedIn", link: "#" },
    { src: "https://images.pexels.com/photos/1552617/pexels-photo-1552617.jpeg?auto=compress&cs=tinysrgb&w=24&h=24&dpr=1", alt: "Instagram", link: "#" },
  ];

  return (
    <section className="flex flex-col items-center justify-center gap-16 py-9 w-full px-4 lg:px-0">
      <footer className="w-full max-w-7xl px-4 lg:px-[120px]">
        <Card className="bg-project-primary-dark rounded-3xl p-4 lg:p-8 text-white">
          <CardContent className="p-0 space-y-6 lg:space-y-9">
            <div className="flex flex-col space-y-6 lg:space-y-9 w-full">
              <div className="flex flex-col lg:flex-row justify-between gap-8">
                {/* Company Info Section */}
                <div className="flex flex-col gap-6 lg:gap-9 max-w-full lg:max-w-[442px]">
                  {/* Logo */}
                  <div className="relative flex items-center h-[40px] lg:h-[50px]">
                    <div className="w-[46px] lg:w-[57px] h-[40px] lg:h-[50px] flex items-center justify-center">
                      <img 
                        src="/src/assets/LOGO.png" 
                        alt="Mi-Health Logo" 
                        className="w-full h-full object-contain filter brightness-0 invert"
                      />
                    </div>
                    <div className="ml-2">
                      <div className="font-black text-lg lg:text-[25.5px]">
                        <span className="text-white">MI-</span>
                        <span className="text-[#46d5fa] text-lg lg:text-[25.8px]">
                          HEALTH
                        </span>
                      </div>
                      <div className="font-['Open_Sans',Helvetica] font-bold text-[9px] lg:text-[11.6px]">
                        {language === 'en' ? 'Digitally Transforming Healthcare' : 'Transformation Numérique des Soins'}
                      </div>
                    </div>
                  </div>

                  {/* Company Description */}
                  <p className="font-paragraph-p2-regular text-neutral-gray-300 text-sm lg:text-base leading-relaxed">
                    {t.description}
                  </p>

                  {/* NHA HealthTech Reference */}
                  <div className="bg-white/10 rounded-lg p-4 border border-white/20">
                    <p className="text-sm text-neutral-gray-300 mb-2">
                      {language === 'en' ? 'Developed by:' : 'Développé par:'}
                    </p>
                    <a 
                      href="https://nha-healthtech.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-[#46d5fa] hover:text-white transition-colors font-semibold text-lg"
                    >
                      NHA-HEALTHTECH
                    </a>
                    <p className="text-xs text-neutral-gray-400 mt-1">
                      {language === 'en' ? 'Visit our startup website' : 'Visitez notre site web de startup'}
                    </p>
                  </div>

                  {/* Social Media Icons */}
                  <div className="flex items-center gap-[11px]">
                    {socialIcons.map((icon, index) => (
                      <a
                        key={`social-icon-${index}`}
                        href={icon.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex p-2 bg-shadeswhite rounded-full overflow-hidden hover:bg-neutral-gray-100 transition-colors"
                      >
                        <div className="w-[18px] h-[18px] bg-project-blue rounded-full"></div>
                      </a>
                    ))}
                  </div>
                </div>

                {/* Credentials Section */}
                <div className="flex flex-col gap-4 max-w-full lg:max-w-[503px]">
                  <h4 className="font-heading-h4-small-semi-bold text-neutral-gray-50 text-lg lg:text-xl">
                    {t.credentials}
                  </h4>
                  <div className="flex flex-col lg:flex-row justify-between gap-4">
                    <div className="flex flex-col gap-2 min-w-[170px]">
                      <h5 className="font-subheading-semi-bold text-neutral-gray-50">
                        {t.email}
                      </h5>
                      <p className="font-paragraph-p2-regular text-neutral-gray-300 text-sm lg:text-base">
                        devguyuix@gmail.com
                      </p>
                    </div>
                    <div className="flex flex-col gap-2">
                      <h5 className="font-subheading-semi-bold text-neutral-gray-50">
                        {t.telephone}
                      </h5>
                      <p className="font-paragraph-p2-regular text-neutral-gray-300 text-sm lg:text-base">
                        +237 654 935 347 - 621 614 304
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <Separator className="bg-neutral-gray-300/20" />
            </div>
          </CardContent>

          <CardFooter className="flex flex-col lg:flex-row justify-between p-0 pt-6 lg:pt-9 gap-4 lg:gap-0">
            <p className="font-heading-h4-semi-bold text-neutral-gray-50 whitespace-nowrap text-sm lg:text-base">
              {t.since}
            </p>
            <p className="font-heading-h4-semi-bold text-neutral-gray-50 text-center lg:text-right text-sm lg:text-base">
              {t.rights}
            </p>
          </CardFooter>
        </Card>
      </footer>
    </section>
  );
};