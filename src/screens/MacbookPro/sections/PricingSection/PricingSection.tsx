import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Separator } from "../../../../components/ui/separator";
import {
  ToggleGroup,
  ToggleGroupItem,
} from "../../../../components/ui/toggle-group";

export const PricingSection = (): JSX.Element => {
  // Pricing plan data
  const pricingPlans = [
    {
      id: "individual",
      name: "Individual Plan",
      description: "Perfect for personal health management.",
      price: "0",
      currency: "XAF",
      iconSrc: "/icon-1.png",
      popular: false,
      bgColor: "bg-shadeswhite",
      textColor: "text-neutral-gray-900",
      secondaryTextColor: "text-neutral-gray-500",
      features: [
        "Basic PHR features",
        "Secure data storage",
        "Limited sharing capabilities",
        "Access to educational resources",
        "Basic AI functionalities",
      ],
    },
    {
      id: "pro",
      name: "Pro Plan",
      description: "For healthcare providers and small clinics.",
      price: "10K",
      currency: "XAF",
      iconSrc: "/icon-2.png",
      popular: true,
      bgColor: "bg-[#02201b]",
      textColor: "text-neutral-gray-100",
      secondaryTextColor: "text-neutral-gray-400",
      features: [
        "All Individual features",
        "Integrated patient management",
        "Advance AI Functionalities",
        "Seamless EHR integration",
        "Data analytics & reporting tools",
        "Priority support",
      ],
    },
    {
      id: "limitless",
      name: "Limitless Plan",
      description:
        "Essential tools for small teams so as to increase productivity",
      price: "15K",
      currency: "XAF",
      iconSrc: "/icon-3.png",
      popular: false,
      bgColor: "bg-shadeswhite",
      textColor: "text-neutral-gray-900",
      secondaryTextColor: "text-neutral-gray-500",
      features: [
        "All Pro features",
        "Custom integrations",
        "Dedicated account manager",
        "Advanced security features",
        "Standard Customer Service",
      ],
    },
  ];

  return (
    <section className="flex flex-col items-center gap-16 pt-8 pb-20 px-0 relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute w-full h-[908px] top-[795px] left-0">
        <div className="absolute w-[546px] h-[396px] top-[512px] left-0 bg-[#05a5ce80] rounded-[1000px] blur-[275px]" />
        <div className="absolute w-[482px] h-[414px] top-[414px] right-0 bg-[#05a5ce80] blur-[275px] rounded-[1000px]" />
        <div className="absolute w-[493px] h-[600px] top-0 left-1/2 -translate-x-1/2 blur-[250px] bg-[linear-gradient(55deg,rgba(251,130,24,1)_22%,rgba(241,54,54,1)_51%,rgba(154,29,203,1)_75%)] rounded-[1000px]" />
      </div>

      {/* Header section */}
      <div className="flex flex-col items-center gap-10 px-[120px] py-0 relative w-full">
        <div className="flex w-[278px] items-center justify-center gap-3 pl-3.5 pr-[18px] py-1.5 relative rounded-[999px] overflow-hidden border border-solid border-slate-200 [background:radial-gradient(50%_50%_at_50%_50%,rgba(218,249,251,1)_0%,rgba(230,246,247,1)_13%,rgba(244,254,255,1)_30%,rgba(251,253,253,1)_58%,rgba(236,247,252,1)_68%,rgba(238,244,246,1)_80%,rgba(218,249,251,1)_100%)]">
          <div className="gap-1 px-3 py-0 bg-shadeswhite rounded-[100px] border-[0.75px] border-solid border-[#bbcaf3] inline-flex items-center relative">
            <div className="relative w-[5px] h-[5px] bg-project-blue rounded-[100px] blur-[1.5px]" />
            <div className="relative w-fit mt-[-0.75px] font-paragraph-p2-regular font-[number:var(--paragraph-p2-regular-font-weight)] text-project-blue text-[length:var(--paragraph-p2-regular-font-size)] tracking-[var(--paragraph-p2-regular-letter-spacing)] leading-[var(--paragraph-p2-regular-line-height)] whitespace-nowrap [font-style:var(--paragraph-p2-regular-font-style)]">
              NHA
            </div>
          </div>
          <div className="relative flex-1 font-paragraph-p1-regular font-[number:var(--paragraph-p1-regular-font-weight)] text-[#1e293bbf] text-[length:var(--paragraph-p1-regular-font-size)] text-center tracking-[var(--paragraph-p1-regular-letter-spacing)] leading-[var(--paragraph-p1-regular-line-height)] [font-style:var(--paragraph-p1-regular-font-style)]">
            Flexible Pricing For Everyone
          </div>
          <div className="absolute w-[26px] h-[199px] top-[-79px] left-[-35px] bg-[#fffffff2] rotate-[26.88deg] blur-[2.5px]" />
        </div>

        <div className="flex flex-col items-center justify-center gap-9 relative w-full">
          <h1 className="relative w-[828px] mt-[-1.00px] font-heading-h1-semi-bold font-[number:var(--heading-h1-semi-bold-font-weight)] text-project-blue text-[length:var(--heading-h1-semi-bold-font-size)] text-center tracking-[var(--heading-h1-semi-bold-letter-spacing)] leading-[var(--heading-h1-semi-bold-line-height)] [font-style:var(--heading-h1-semi-bold-font-style)]">
            Simple Pricing and Transparent for Everyone
          </h1>
          <h4 className="relative w-[518px] font-heading-h4-small-semi-bold font-[number:var(--heading-h4-small-semi-bold-font-weight)] text-black text-[length:var(--heading-h4-small-semi-bold-font-size)] text-center tracking-[var(--heading-h4-small-semi-bold-letter-spacing)] leading-[var(--heading-h4-small-semi-bold-line-height)] [font-style:var(--heading-h4-small-semi-bold-font-style)]">
            Flexible Plans to Fit Your Needs
            <br />
            Choose the Mi-HEALTH plan that&apos;s right for you or your
            organization.
          </h4>
        </div>
      </div>

      {/* Pricing cards section */}
      <div className="relative w-full max-w-[1214px]">
        {/* Pricing toggle */}
        <div className="flex justify-center mb-[104px]">
          <ToggleGroup
            type="single"
            defaultValue="monthly"
            className="bg-neutralgray-200 p-0.5 rounded-[10px]"
          >
            <ToggleGroupItem
              value="monthly"
              className="w-[237px] px-6 py-2 rounded-[8px_0px_0px_8px] border border-solid border-slate-300 shadow-shadow-XS data-[state=on]:bg-neutral-gray-100 data-[state=off]:bg-shadeswhite"
            >
              <span className="text-neutral-gray-500 data-[state=on]:text-neutral-gray-500 data-[state=off]:text-neutral-gray-900 text-xl leading-[24.0px] [font-family:'Inter',Helvetica] font-medium tracking-[0] whitespace-nowrap">
                Monthly Pricing
              </span>
            </ToggleGroupItem>
            <ToggleGroupItem
              value="annual"
              className="w-[222px] px-6 py-2 rounded-[0px_8px_8px_0px] border border-solid border-slate-300 data-[state=on]:bg-neutral-gray-100 data-[state=off]:bg-shadeswhite"
            >
              <span className="text-neutral-gray-900 data-[state=on]:text-neutral-gray-500 data-[state=off]:text-neutral-gray-900 text-xl leading-[24.0px] [font-family:'Inter',Helvetica] font-medium tracking-[0] whitespace-nowrap">
                Annual Pricing
              </span>
            </ToggleGroupItem>
          </ToggleGroup>
        </div>

        {/* Pricing cards */}
        <div className="flex items-end gap-6">
          {pricingPlans.map((plan) => (
            <Card
              key={plan.id}
              className={`flex flex-col flex-1 ${plan.bgColor} rounded-2xl border border-solid ${plan.id === "pro" ? "border-[#5f626b]" : "border-slate-300"}`}
            >
              <CardContent className="flex flex-col gap-6 p-5 pt-7">
                <div className="flex flex-col gap-3">
                  <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-2">
                      <div className="flex flex-col gap-2">
                        <img
                          className="w-[57.06px] h-[50px]"
                          alt={`${plan.name} icon`}
                          src={plan.iconSrc}
                        />
                        <div className="flex flex-col gap-2">
                          <h3
                            className={`mt-[-1.00px] font-heading-h5-bold font-[number:var(--heading-h5-bold-font-weight)] ${plan.textColor} text-[length:var(--heading-h5-bold-font-size)] tracking-[var(--heading-h5-bold-letter-spacing)] leading-[var(--heading-h5-bold-line-height)] [font-style:var(--heading-h5-bold-font-style)]`}
                          >
                            {plan.name}
                          </h3>

                          {plan.popular && (
                            <Badge className="w-fit justify-center px-2.5 py-0.5 bg-primaryblue-50 rounded border border-solid border-[#46d5fa] text-project-green">
                              <span className="font-footer-CAP font-[number:var(--footer-CAP-font-weight)] text-[length:var(--footer-CAP-font-size)] tracking-[var(--footer-CAP-letter-spacing)] leading-[var(--footer-CAP-line-height)] whitespace-nowrap [font-style:var(--footer-CAP-font-style)]">
                                POPULAR TARIFFS
                              </span>
                            </Badge>
                          )}

                          <p
                            className={`font-heading-h6-semi-bold font-[number:var(--heading-h6-semi-bold-font-weight)] ${plan.secondaryTextColor} text-[length:var(--heading-h6-semi-bold-font-size)] tracking-[var(--heading-h6-semi-bold-letter-spacing)] leading-[var(--heading-h6-semi-bold-line-height)] [font-style:var(--heading-h6-semi-bold-font-style)]`}
                          >
                            {plan.description}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-end gap-3">
                      <div className="inline-flex items-end justify-center gap-1">
                        <span
                          className={`mt-[-1.00px] [font-family:'Inter',Helvetica] font-bold ${plan.id === "pro" ? "bg-[linear-gradient(55deg,rgba(251,130,24,1)_22%,rgba(241,54,54,1)_51%,rgba(154,29,203,1)_75%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] text-transparent" : plan.textColor} text-7xl tracking-[-2.88px] leading-[54px] whitespace-nowrap`}
                        >
                          {plan.price}
                        </span>
                        <span
                          className={`${plan.id === "pro" ? "bg-[linear-gradient(55deg,rgba(251,130,24,1)_22%,rgba(241,54,54,1)_51%,rgba(154,29,203,1)_75%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] text-transparent" : plan.textColor} text-[23px] tracking-[-0.92px] leading-[27.6px] [font-family:'Inter',Helvetica] font-bold whitespace-nowrap`}
                        >
                          {plan.currency}
                        </span>
                      </div>
                      <p
                        className={`flex-1 [font-family:'Inter',Helvetica] font-medium ${plan.id === "pro" ? "text-neutral-gray-300" : "text-neutral-gray-400"} text-base tracking-[0] leading-[19.2px]`}
                      >
                        Per Users
                        <br />
                        per Months
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col gap-3">
                    <Button className="w-full bg-project-green text-shadeswhite hover:bg-project-green/90 rounded-lg">
                      <span className="[font-family:'Inter',Helvetica] font-medium text-lg tracking-[0] leading-[22px] whitespace-nowrap">
                        Get Started
                      </span>
                    </Button>
                    <Button
                      variant={plan.id === "pro" ? "default" : "outline"}
                      className={`w-full ${plan.id === "pro" ? "bg-shadeswhite text-neutral-gray-900 hover:bg-shadeswhite/90" : "border-slate-300 shadow-shadow-XS"} rounded-lg`}
                    >
                      <span className="[font-family:'Inter',Helvetica] font-medium text-lg tracking-[0] leading-[22px] whitespace-nowrap">
                        {plan.id === "pro"
                          ? "Try For Free for 30 Days"
                          : "Contact Sales"}
                      </span>
                    </Button>
                  </div>
                </div>

                <Separator className="w-full h-px" />

                <div className="flex flex-col gap-[29px] pt-6">
                  <div className="flex flex-col gap-2">
                    <h4
                      className={`${plan.textColor} mt-[-1.00px] font-heading-h5-bold font-[number:var(--heading-h5-bold-font-weight)] text-[length:var(--heading-h5-bold-font-size)] tracking-[var(--heading-h5-bold-letter-spacing)] leading-[var(--heading-h5-bold-line-height)] [font-style:var(--heading-h5-bold-font-style)]`}
                    >
                      Characteristics
                    </h4>
                    <p
                      className={`font-heading-h6-semi-bold font-[number:var(--heading-h6-semi-bold-font-weight)] ${plan.secondaryTextColor} text-[length:var(--heading-h6-semi-bold-font-size)] tracking-[var(--heading-h6-semi-bold-letter-spacing)] leading-[var(--heading-h6-semi-bold-line-height)] [font-style:var(--heading-h6-semi-bold-font-style)]`}
                    >
                      These are the functionalities you will obtain
                    </p>
                  </div>

                  <div className="flex flex-col gap-4 py-4">
                    {plan.features.map((feature, index) => (
                      <div
                        key={`${plan.id}-feature-${index}`}
                        className="flex items-center gap-3"
                      >
                        <img
                          className="w-7 h-7"
                          alt="Checkbox"
                          src="/checkbox.svg"
                        />
                        <p
                          className={`flex-1 [font-family:'Inter',Helvetica] font-medium ${plan.id === "pro" ? "text-neutral-gray-300" : "text-neutral-gray-500"} text-base tracking-[0] leading-6`}
                        >
                          {feature}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
