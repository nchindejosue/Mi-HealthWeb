import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../../../../components/ui/avatar";
import { Card, CardContent } from "../../../../components/ui/card";
import { Section } from "../../../../components/ui/Section";
import { SectionHeader } from "../../../../components/ui/SectionHeader";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../../../../components/ui/carousel";
import { useLanguage } from "../../../../hooks/useLanguage";
import { translations } from "../../../../utils/translations";

export const TestimonialsSection = (): JSX.Element => {
  const { language } = useLanguage();
  const t = translations[language].testimonials;

  const testimonials = [
    {
      quote: t.quotes[0],
      name: "Dr. Marie Dubois",
      title: language === 'en' ? "Family Physician, Yaoundé" : "Médecin de Famille, Yaoundé",
      avatar: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=1",
    },
    {
      quote: t.quotes[1],
      name: "Jean-Paul Mbarga",
      title: language === 'en' ? "Patient, Douala" : "Patient, Douala",
      avatar: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=1",
    },
    {
      quote: t.quotes[2],
      name: "Dr. Fatima Nkomo",
      title: language === 'en' ? "Cardiologist, Bamenda" : "Cardiologue, Bamenda",
      avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=1",
    },
  ];

  return (
    <Section id="testimonials" background="secondary">
      <div className="space-y-12 md:space-y-16">
        <SectionHeader
          badge={t.badge}
          title={t.title}
          centered
        />

        <div className="max-w-4xl mx-auto">
          <Carousel className="w-full">
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index}>
                  <Card className="bg-white border-neutral-200 shadow-lg">
                    <CardContent className="p-8 md:p-12 text-center space-y-8">
                      <blockquote className="text-h4 md:text-h3 font-medium text-neutral-900 leading-relaxed">
                        "{testimonial.quote}"
                      </blockquote>

                      <div className="flex items-center justify-center gap-4">
                        <Avatar className="w-16 h-16">
                          <AvatarImage
                            src={testimonial.avatar}
                            alt={testimonial.name}
                          />
                          <AvatarFallback className="bg-project-blue text-white font-semibold">
                            {testimonial.name.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>

                        <div className="text-left">
                          <div className="text-h6 font-semibold text-neutral-900">
                            {testimonial.name}
                          </div>
                          <div className="text-body text-neutral-600">
                            {testimonial.title}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-0 bg-white border-neutral-200 hover:bg-neutral-50" />
            <CarouselNext className="right-0 bg-white border-neutral-200 hover:bg-neutral-50" />
          </Carousel>
        </div>
      </div>
    </Section>
  );
};