import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../../../../components/ui/card";
import { Input } from "../../../../components/ui/input";
import { Textarea } from "../../../../components/ui/textarea";
import { Section } from "../../../../components/ui/Section";
import { SectionHeader } from "../../../../components/ui/SectionHeader";
import { useLanguage } from "../../../../hooks/useLanguage";
import { translations } from "../../../../utils/translations";
import { Mail, Phone, MapPin, Copy, Users, MessageSquare } from "lucide-react";

export const ContactSection = (): JSX.Element => {
  const { language } = useLanguage();
  const t = translations[language].contact;

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      title: t.info.email.title,
      content: t.info.email.content,
    },
    {
      icon: <Phone className="w-5 h-5" />,
      title: t.info.phone.title,
      content: t.info.phone.content,
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      title: t.info.location.title,
      content: t.info.location.content,
    },
  ];

  return (
    <Section id="contact">
      {/* Background gradients */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-96 h-96 bg-gradient-to-r from-project-blue/5 to-project-green/5 rounded-full blur-3xl animate-pulse top-20 left-10"></div>
        <div className="absolute w-80 h-80 bg-gradient-to-r from-project-green/5 to-project-blue/5 rounded-full blur-3xl animate-pulse bottom-20 right-10 delay-1000"></div>
      </div>

      <div className="relative z-10 space-y-12 md:space-y-16">
        <SectionHeader
          badge={t.badge}
          title={t.title}
          subtitle={t.subtitle}
          centered
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact form */}
          <Card className="bg-white border-neutral-200 shadow-lg animate-slide-in-left">
            <CardHeader>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-project-blue to-project-green rounded-xl flex items-center justify-center">
                  <MessageSquare className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-h5 font-semibold text-neutral-900">
                  {t.form.title}
                </CardTitle>
              </div>
            </CardHeader>

            <CardContent className="space-y-6">
              <form className="space-y-4">
                {/* Full Name */}
                <div className="space-y-2">
                  <label className="text-body-sm font-medium text-neutral-700">
                    {t.form.accountName}
                  </label>
                  <div className="relative">
                    <Input
                      className="pl-4 pr-4 py-3 border-neutral-300 focus:border-project-blue focus:ring-project-blue"
                      placeholder={t.form.accountNamePlaceholder}
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label className="text-body-sm font-medium text-neutral-700">
                    {t.form.email}
                  </label>
                  <div className="relative">
                    <Input
                      type="email"
                      className="pl-4 pr-4 py-3 border-neutral-300 focus:border-project-blue focus:ring-project-blue"
                      placeholder={t.form.emailPlaceholder}
                    />
                  </div>
                </div>

                {/* Phone */}
                <div className="space-y-2">
                  <label className="text-body-sm font-medium text-neutral-700">
                    {t.form.telephone}
                  </label>
                  <div className="relative">
                    <Input
                      type="tel"
                      className="pl-4 pr-4 py-3 border-neutral-300 focus:border-project-blue focus:ring-project-blue"
                      placeholder={t.form.telephonePlaceholder}
                    />
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label className="text-body-sm font-medium text-neutral-700">
                    {t.form.message}
                  </label>
                  <Textarea
                    className="min-h-[120px] border-neutral-300 focus:border-project-blue focus:ring-project-blue resize-none"
                    placeholder={t.form.messagePlaceholder}
                  />
                </div>

                <Button className="w-full btn btn-primary btn-lg">
                  {t.form.send}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact information */}
          <Card className="bg-white border-neutral-200 shadow-lg animate-slide-in-right">
            <CardHeader>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-project-green to-project-blue rounded-xl flex items-center justify-center">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-h5 font-semibold text-neutral-900">
                  {t.info.title}
                </CardTitle>
              </div>
            </CardHeader>

            <CardContent className="space-y-6">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-4 bg-neutral-50 rounded-xl hover:bg-neutral-100 transition-colors group"
                >
                  <div className="w-10 h-10 bg-white rounded-lg border border-neutral-200 flex items-center justify-center text-project-blue group-hover:scale-110 transition-transform">
                    {info.icon}
                  </div>

                  <div className="flex-1 space-y-1">
                    <h5 className="text-body-sm font-semibold text-neutral-900">
                      {info.title}
                    </h5>
                    <p className="text-body-sm text-neutral-600">
                      {info.content}
                    </p>
                  </div>

                  <button className="w-8 h-8 bg-white rounded-lg border border-neutral-200 flex items-center justify-center text-project-blue hover:bg-neutral-50 transition-colors">
                    <Copy className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </Section>
  );
};