import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import { Section } from "../../../../components/ui/Section";
import { SectionHeader } from "../../../../components/ui/SectionHeader";
import { useLanguage } from "../../../../hooks/useLanguage";
import { translations } from "../../../../utils/translations";

export const TeamSection = (): JSX.Element => {
  const { language } = useLanguage();
  const t = translations[language].team;

  // Team member data with Pexels images
  const teamMembers = [
    {
      image: "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&dpr=1",
      name: "Dr. Sarah Johnson",
      role: language === 'en' ? "President, NHA" : "Président, NHA",
    },
    {
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&dpr=1",
      name: "Michael Chen",
      role: language === 'en' ? "CTO, Software Dev" : "CTO, Développeur",
    },
    {
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&dpr=1",
      name: "Dr. Amina Hassan",
      role: language === 'en' ? "Medical Advisor" : "Conseiller Médical",
    },
    {
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&dpr=1",
      name: "James Wilson",
      role: language === 'en' ? "Software Developer" : "Développeur",
    },
    {
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&dpr=1",
      name: "Maria Rodriguez",
      role: language === 'en' ? "UI/UX Designer" : "Designer UI/UX",
    },
    {
      image: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&dpr=1",
      name: "David Kim",
      role: language === 'en' ? "Data Scientist" : "Scientifique des Données",
    },
    {
      image: "https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&dpr=1",
      name: "Dr. Lisa Thompson",
      role: language === 'en' ? "Health Consultant" : "Consultante Santé",
    },
    {
      image: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&dpr=1",
      name: "Ahmed Al-Rashid",
      role: language === 'en' ? "Backend Developer" : "Développeur Backend",
    },
  ];

  return (
    <Section id="team">
      <div className="space-y-12 md:space-y-16">
        <SectionHeader
          badge={t.badge}
          title={t.title}
          subtitle={t.subtitle}
          centered
        />

        {/* Team members grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
          {teamMembers.map((member, index) => (
            <Card
              key={index}
              className="group bg-white border-neutral-200 shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-3 md:p-4 space-y-3">
                <div className="aspect-[3/4] rounded-lg overflow-hidden bg-neutral-100">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                
                <div className="space-y-1 text-center">
                  <h4 className="text-body-sm font-semibold text-project-blue line-clamp-1">
                    {member.name}
                  </h4>
                  <p className="text-xs text-neutral-600 line-clamp-2">
                    {member.role}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
};