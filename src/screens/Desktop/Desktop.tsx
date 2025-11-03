import React from "react";
import { AboutUsSection } from "./sections/AboutUsSection";
import { ContactFooterSection } from "./sections/ContactFooterSection";
import { HeroBannerSection } from "./sections/HeroBannerSection";
import { MainContentSection } from "./sections/MainContentSection";
import { NavigationBarSection } from "./sections/NavigationBarSection";
import { OurServicesSection } from "./sections/OurServicesSection";
import { PortfolioSection } from "./sections/PortfolioSection";

export const Desktop = (): JSX.Element => {
  return (
    <div className="flex flex-col w-full bg-white">
      <NavigationBarSection />
      <HeroBannerSection />
      <MainContentSection />
      <AboutUsSection />
      <OurServicesSection />
      <PortfolioSection />
      <ContactFooterSection />
    </div>
  );
};
