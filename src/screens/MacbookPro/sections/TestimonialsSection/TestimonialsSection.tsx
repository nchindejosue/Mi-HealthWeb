import React from "react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../../../components/ui/avatar";
import { Badge } from "../../../../components/ui/badge";
import { Card, CardContent } from "../../../../components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../../../components/ui/carousel";

export const TestimonialsSection = (): JSX.Element => {
  const testimonials = [
    {
      quote:
        "Mi-HEALTH has truly given me control over my medical history. No more lost papers or forgotten details – it's all there, accessible from my phone. A game-changer for my chronic condition management!",
      name: "Dev-Guy UIX",
      title: "UX Designer, Byem Assi Acca Cia",
      avatar: "/ellipse-698.png",
    },
    {
      quote:
        "The ease of sharing information with different specialists means I finally feel understood by my entire care team. My family history and allergies are always at their fingertips, leading to better, safer care.",
      name: "Dev-Guy UIX",
      title: "UX Designer, Byem Assi Acca Cia",
      avatar: "/ellipse-699.png",
    },
    {
      quote:
        "The ease of sharing information with different specialists means I finally feel understood by my entire care team. My family history and allergies are always at their fingertips, leading to better, safer care.",
      name: "Dev-Guy UIX",
      title: "UX Designer, Byem Assi Acca Cia",
      avatar: "/ellipse-699-1.png",
    },
  ];

  return (
    <section className="flex flex-col items-center gap-16 py-16 w-full bg-shadeswhite">
      <div className="flex items-center justify-center gap-3 px-3.5 py-1.5 rounded-[999px] border border-solid border-slate-200 [background:radial-gradient(50%_50%_at_50%_50%,rgba(218,249,251,1)_0%,rgba(230,246,247,1)_13%,rgba(244,254,255,1)_30%,rgba(251,253,253,1)_58%,rgba(236,247,252,1)_68%,rgba(238,244,246,1)_80%,rgba(218,249,251,1)_100%)] relative overflow-hidden">
        <Badge className="gap-1 px-3 py-0 bg-shadeswhite rounded-[100px] border-[0.75px] border-solid border-[#bbcaf3] flex items-center">
          <div className="w-[5px] h-[5px] bg-project-blue rounded-[100px] blur-[1.5px]" />
          <span className="font-paragraph-p2-regular text-project-blue">
            NHA
          </span>
        </Badge>

        <div className="flex-1 font-paragraph-p1-regular text-[#1e293bbf] text-center">
          Get Exclusive Access To Our Future Release
        </div>

        <div className="absolute w-[26px] h-[199px] top-[-79px] left-[-35px] bg-[#fffffff2] rotate-[26.88deg] blur-[2.5px]" />
      </div>

      <h2 className="font-heading-h4-semi-bold text-project-blue text-center max-w-3xl">
        Hear how Mi-HEALTH is transforming healthcare for patients and providers
        in Cameroon.
      </h2>

      <Carousel className="w-full max-w-[731px]">
        <CarouselContent>
          {testimonials.map((testimonial, index) => (
            <CarouselItem key={index}>
              <Card className="border-none shadow-none">
                <CardContent className="flex flex-col items-center gap-8 p-0">
                  <blockquote className="font-heading-h4-semi-bold text-black text-center">
                    &quot;{testimonial.quote}&quot;
                  </blockquote>

                  <div className="flex items-center gap-[3px]">
                    <Avatar className="w-[60px] h-[60px]">
                      <AvatarImage
                        src={testimonial.avatar}
                        alt="Testimonial author"
                      />
                      <AvatarFallback>UI</AvatarFallback>
                    </Avatar>

                    <div className="flex flex-col w-[283px] items-start gap-3">
                      <div className="font-subheading-semi-bold text-black">
                        {testimonial.name}
                      </div>
                      <div className="font-paragraph-p3-regular text-black">
                        {testimonial.title}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-0 bg-neutral-gray-100 opacity-75 rounded-[120px] w-12 h-12" />
        <CarouselNext className="right-0 bg-neutral-gray-100 opacity-75 rounded-[120px] w-12 h-12" />
      </Carousel>
    </section>
  );
};
