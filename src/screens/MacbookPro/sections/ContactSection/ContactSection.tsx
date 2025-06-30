import { CopyIcon, MailIcon, MapPinIcon, PhoneIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../../../components/ui/card";
import { Input } from "../../../../components/ui/input";
import { Textarea } from "../../../../components/ui/textarea";
import { useLanguage } from "../../../../hooks/useLanguage";
import { translations } from "../../../../utils/translations";

export const ContactSection = (): JSX.Element => {
  const { language } = useLanguage();
  const t = translations[language].contact;

  // Contact information data
  const contactInfo = [
    {
      icon: <MailIcon className="w-6 h-6" />,
      title: t.info.email.title,
      content: t.info.email.content,
    },
    {
      icon: <PhoneIcon className="w-6 h-6" />,
      title: t.info.phone.title,
      content: t.info.phone.content,
    },
    {
      icon: <MapPinIcon className="w-6 h-6" />,
      title: t.info.location.title,
      content: t.info.location.content,
    },
  ];

  return (
    <section id="contact" className="flex flex-col w-full items-center gap-8 lg:gap-16 pb-12 lg:pb-20">
      {/* Background gradients */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-96 h-96 bg-gradient-to-r from-project-blue/5 to-project-green/5 rounded-full blur-3xl animate-pulse top-20 left-10"></div>
        <div className="absolute w-80 h-80 bg-gradient-to-r from-project-green/5 to-project-blue/5 rounded-full blur-3xl animate-pulse bottom-20 right-10 animation-delay-2000"></div>
      </div>

      <div className="flex flex-col items-center gap-6 lg:gap-10 px-4 lg:px-[120px] w-full">
        {/* Badge with title */}
        <div className="flex w-full max-w-[278px] items-center justify-center gap-3 pl-3.5 pr-[18px] py-1.5 rounded-[999px] overflow-hidden border border-solid border-slate-300 [background:radial-gradient(50%_50%_at_50%_50%,rgba(218,249,251,1)_0%,rgba(230,246,247,1)_13%,rgba(244,254,255,1)_30%,rgba(251,253,253,1)_58%,rgba(236,247,252,1)_68%,rgba(238,244,246,1)_80%,rgba(218,249,251,1)_100%)]">
          <div className="gap-1 px-3 py-0 bg-shadeswhite rounded-[100px] border-[0.75px] border-solid border-[#bbcaf3] inline-flex items-center">
            <div className="w-[5px] h-[5px] bg-project-blue rounded-[100px] blur-[1.5px]" />
            <div className="w-fit mt-[-0.75px] font-paragraph-p2-regular font-[number:var(--paragraph-p2-regular-font-weight)] text-project-blue text-xs lg:text-[length:var(--paragraph-p2-regular-font-size)] tracking-[var(--paragraph-p2-regular-letter-spacing)] leading-[var(--paragraph-p2-regular-line-height)] whitespace-nowrap [font-style:var(--paragraph-p2-regular-font-style)]">
              MI-HEALTH
            </div>
          </div>

          <div className="relative flex-1 font-paragraph-p1-regular font-[number:var(--paragraph-p1-regular-font-weight)] text-[#1e293bbf] text-xs lg:text-[length:var(--paragraph-p1-regular-font-size)] text-center tracking-[var(--paragraph-p1-regular-letter-spacing)] leading-[var(--paragraph-p1-regular-line-height)] [font-style:var(--paragraph-p1-regular-font-style)]">
            {t.badge}
          </div>

          <div className="absolute w-[26px] h-[199px] top-[-79px] left-[-35px] bg-[#fffffff2] rotate-[26.88deg] blur-[2.5px]" />
        </div>

        {/* Section heading */}
        <div className="flex flex-col items-center justify-center gap-6 lg:gap-9 relative w-full">
          <h2 className="w-full max-w-[712px] mt-[-1.00px] font-heading-h2-small-semi-bold font-[number:var(--heading-h2-small-semi-bold-font-weight)] text-project-blue text-xl lg:text-[length:var(--heading-h2-small-semi-bold-font-size)] text-center tracking-[var(--heading-h2-small-semi-bold-letter-spacing)] leading-[var(--heading-h2-small-semi-bold-line-height)] [font-style:var(--heading-h2-small-semi-bold-font-style)]">
            {t.title}
          </h2>

          <h4 className="w-full max-w-[614px] font-heading-h4-small-semi-bold font-[number:var(--heading-h4-small-semi-bold-font-weight)] text-shadesblack text-lg lg:text-[length:var(--heading-h4-small-semi-bold-font-size)] text-center tracking-[var(--heading-h4-small-semi-bold-letter-spacing)] leading-[var(--heading-h4-small-semi-bold-line-height)] [font-style:var(--heading-h4-small-semi-bold-font-style)]">
            {t.subtitle}
          </h4>
        </div>
      </div>

      {/* Cards container */}
      <div className="w-full items-center justify-center">
        <div className="flex flex-col lg:flex-row items-start gap-6 px-4 lg:px-[120px] py-0 w-full">
          {/* Contact form card */}
          <Card className="flex flex-col items-start gap-6 p-4 flex-1 bg-shadeswhite rounded-xl border border-solid border-slate-200">
            <CardHeader className="p-0 w-full">
              <div className="flex h-[50px] items-center gap-4 w-full">
                <div className="w-[57.06px] h-[50px] bg-gradient-to-br from-project-blue to-project-green rounded-lg flex items-center justify-center text-white text-2xl">
                  👥
                </div>
                <CardTitle className="flex-1 font-heading-h5-semi-bold font-[number:var(--heading-h5-semi-bold-font-weight)] text-neutral-gray-900 text-lg lg:text-[length:var(--heading-h5-semi-bold-font-size)] tracking-[var(--heading-h5-semi-bold-letter-spacing)] leading-[var(--heading-h5-semi-bold-line-height)] [font-style:var(--heading-h5-semi-bold-font-style)]">
                  {t.form.title}
                </CardTitle>
              </div>
            </CardHeader>

            <CardContent className="p-0 w-full">
              <form className="flex flex-col items-start gap-4 w-full">
                {/* Account Name field */}
                <div className="flex flex-col items-start gap-1.5 w-full">
                  <label className="self-stretch mt-[-1.00px] font-caption-semi-bold font-[number:var(--caption-semi-bold-font-weight)] text-neutral-gray-700 text-sm lg:text-[length:var(--caption-semi-bold-font-size)] tracking-[var(--caption-semi-bold-letter-spacing)] leading-[var(--caption-semi-bold-line-height)] [font-style:var(--caption-semi-bold-font-style)]">
                    {t.form.accountName}
                  </label>
                  <div className="flex items-center gap-2 p-2 w-full rounded-lg border border-solid border-slate-300">
                    <div className="w-6 h-6 text-project-blue">👤</div>
                    <Input
                      className="border-0 p-0 shadow-none h-auto font-paragraph-p2-regular font-[number:var(--paragraph-p2-regular-font-weight)] text-neutral-gray-400 text-sm lg:text-[length:var(--paragraph-p2-regular-font-size)] tracking-[var(--paragraph-p2-regular-letter-spacing)] leading-[var(--paragraph-p2-regular-line-height)] [font-style:var(--paragraph-p2-regular-font-style)]"
                      placeholder={t.form.accountNamePlaceholder}
                    />
                  </div>
                </div>

                {/* Email field */}
                <div className="flex flex-col items-start gap-1.5 w-full">
                  <label className="self-stretch mt-[-1.00px] font-caption-semi-bold font-[number:var(--caption-semi-bold-font-weight)] text-neutral-gray-700 text-sm lg:text-[length:var(--caption-semi-bold-font-size)] tracking-[var(--caption-semi-bold-letter-spacing)] leading-[var(--caption-semi-bold-line-height)] [font-style:var(--caption-semi-bold-font-style)]">
                    {t.form.email}
                  </label>
                  <div className="flex items-center gap-2 p-2 w-full rounded-lg border border-solid border-slate-300">
                    <div className="w-6 h-6 text-project-blue">📧</div>
                    <Input
                      className="border-0 p-0 shadow-none h-auto font-paragraph-p2-regular font-[number:var(--paragraph-p2-regular-font-weight)] text-neutral-gray-400 text-sm lg:text-[length:var(--paragraph-p2-regular-font-size)] tracking-[var(--paragraph-p2-regular-letter-spacing)] leading-[var(--paragraph-p2-regular-line-height)] [font-style:var(--paragraph-p2-regular-font-style)]"
                      placeholder={t.form.emailPlaceholder}
                      type="email"
                    />
                  </div>
                </div>

                {/* Telephone field */}
                <div className="flex flex-col items-start gap-1.5 w-full">
                  <label className="self-stretch mt-[-1.00px] font-caption-semi-bold font-[number:var(--caption-semi-bold-font-weight)] text-neutral-gray-700 text-sm lg:text-[length:var(--caption-semi-bold-font-size)] tracking-[var(--caption-semi-bold-letter-spacing)] leading-[var(--caption-semi-bold-line-height)] [font-style:var(--caption-semi-bold-font-style)]">
                    {t.form.telephone}
                  </label>
                  <div className="flex items-center gap-2 p-2 w-full rounded-lg border border-solid border-slate-300">
                    <div className="w-6 h-6 text-project-blue">📞</div>
                    <Input
                      className="border-0 p-0 shadow-none h-auto font-paragraph-p2-regular font-[number:var(--paragraph-p2-regular-font-weight)] text-neutral-gray-400 text-sm lg:text-[length:var(--paragraph-p2-regular-font-size)] tracking-[var(--paragraph-p2-regular-letter-spacing)] leading-[var(--paragraph-p2-regular-line-height)] [font-style:var(--paragraph-p2-regular-font-style)]"
                      placeholder={t.form.telephonePlaceholder}
                      type="tel"
                    />
                  </div>
                </div>

                {/* Message field */}
                <div className="flex flex-col items-start gap-1.5 w-full">
                  <label className="self-stretch mt-[-1.00px] font-caption-semi-bold font-[number:var(--caption-semi-bold-font-weight)] text-neutral-gray-700 text-sm lg:text-[length:var(--caption-semi-bold-font-size)] tracking-[var(--caption-semi-bold-letter-spacing)] leading-[var(--caption-semi-bold-line-height)] [font-style:var(--caption-semi-bold-font-style)]">
                    {t.form.message}
                  </label>
                  <div className="h-32 lg:h-[142px] flex items-start gap-2 p-2 w-full rounded-lg border border-solid border-slate-300 relative">
                    <Textarea
                      className="border-0 p-0 shadow-none h-full resize-none font-paragraph-p2-regular font-[number:var(--paragraph-p2-regular-font-weight)] text-neutral-gray-400 text-sm lg:text-[length:var(--paragraph-p2-regular-font-size)] tracking-[var(--paragraph-p2-regular-letter-spacing)] leading-[var(--paragraph-p2-regular-line-height)] [font-style:var(--paragraph-p2-regular-font-style)]"
                      placeholder={t.form.messagePlaceholder}
                    />
                  </div>
                </div>

                {/* Submit button */}
                <Button className="w-full justify-center px-4 py-2 bg-project-blue rounded-lg text-shadeswhite font-medium text-lg leading-[22px] hover:bg-project-blue/90 transition-colors">
                  {t.form.send}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact information card */}
          <Card className="flex flex-col items-start gap-6 p-4 flex-1 bg-shadeswhite rounded-xl border border-solid border-slate-300">
            <CardHeader className="p-0 w-full">
              <div className="flex h-[50px] items-center gap-4 w-full">
                <div className="w-[57.06px] h-[50px] bg-gradient-to-br from-project-green to-project-blue rounded-lg flex items-center justify-center text-white text-2xl">
                  📞
                </div>
                <CardTitle className="flex-1 font-heading-h5-semi-bold font-[number:var(--heading-h5-semi-bold-font-weight)] text-neutral-gray-900 text-lg lg:text-[length:var(--heading-h5-semi-bold-font-size)] tracking-[var(--heading-h5-semi-bold-letter-spacing)] leading-[var(--heading-h5-semi-bold-line-height)] [font-style:var(--heading-h5-semi-bold-font-style)]">
                  {t.info.title}
                </CardTitle>
              </div>
            </CardHeader>

            <CardContent className="p-0 w-full">
              <div className="flex flex-col items-start gap-4 w-full">
                {contactInfo.map((info, index) => (
                  <div
                    key={`contact-info-${index}`}
                    className="flex items-center justify-end gap-4 lg:gap-6 px-4 lg:px-7 py-4 w-full bg-shadeswhite rounded-2xl border border-solid border-slate-300 hover:shadow-md transition-shadow"
                  >
                    <div className="gap-2.5 p-2 rounded-lg border border-solid shadow-shadow-XS inline-flex items-center justify-center border-slate-300 text-project-blue">
                      {info.icon}
                    </div>

                    <div className="flex flex-col items-start gap-2.5 flex-1">
                      <h5 className="self-stretch mt-[-1.00px] font-heading-h5-semi-bold font-[number:var(--heading-h5-semi-bold-font-weight)] text-neutral-gray-900 text-sm lg:text-[length:var(--heading-h5-semi-bold-font-size)] tracking-[var(--heading-h5-semi-bold-letter-spacing)] leading-[var(--heading-h5-semi-bold-line-height)] [font-style:var(--heading-h5-semi-bold-font-style)]">
                        {info.title}
                      </h5>

                      <p className="self-stretch font-paragraph-p2-regular font-[number:var(--paragraph-p2-regular-font-weight)] text-black text-xs lg:text-[length:var(--paragraph-p2-regular-font-size)] tracking-[var(--paragraph-p2-regular-letter-spacing)] leading-[var(--paragraph-p2-regular-line-height)] [font-style:var(--paragraph-p2-regular-font-style)]">
                        {info.content}
                      </p>
                    </div>

                    <button className="gap-2.5 p-2 rounded-lg border border-solid shadow-shadow-XS inline-flex items-center justify-center border-slate-300 hover:bg-neutral-gray-50 transition-colors">
                      <CopyIcon className="w-6 h-6 text-project-blue" />
                    </button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};