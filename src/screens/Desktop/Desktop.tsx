import React, { useState } from "react";
import { AboutUsSection } from "./sections/AboutUsSection";
import { ContactFooterSection } from "./sections/ContactFooterSection";
import { HeroBannerSection } from "./sections/HeroBannerSection";
import { MainContentSection } from "./sections/MainContentSection";
import { NavigationBarSection } from "./sections/NavigationBarSection";
import { OurServicesSection } from "./sections/OurServicesSection";
import { LeadershipSection } from "./sections/LeadershipSection";

import { PortfolioSection } from "./sections/PortfolioSection";
import { TestimonialsSection } from "./sections/TestimonialsSection/TestimonialsSection";
import { ContactFormSlider } from "../../components/ContactFormSlider";

export const Desktop = (): JSX.Element => {
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);

  const openContactForm = () => setIsContactFormOpen(true);
  const closeContactForm = () => setIsContactFormOpen(false);

  return (
    <div className="flex flex-col w-full bg-white">
      <NavigationBarSection onContactClick={openContactForm} />
      <HeroBannerSection onGetInTouchClick={openContactForm} />
      <MainContentSection />
      <AboutUsSection />
      <OurServicesSection />
        <LeadershipSection />
      <PortfolioSection />
      <TestimonialsSection />
      <ContactFooterSection />
      <ContactFormSlider isOpen={isContactFormOpen} onClose={closeContactForm} />
    </div>
  );
};
